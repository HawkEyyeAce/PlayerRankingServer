import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Ranking } from "../entity/Ranking";

/**
 * Loads N first ranking by a given int.
 */
export async function rankingGetInRangeAction(request: Request, response: Response) {

    // get a ranking repository to perform operations with ranking
    const rankingRepository = getManager().getRepository(Ranking);

    // load all rankings
    const allrankings = await rankingRepository.find();

    // ordered rankings by descending order of score
    var sortedArray: { userID: string, score: number; }[] = allrankings.sort((n1,n2) => {
        if (n1.score < n2.score) {
            return 1;
        }

        if (n1.score > n2.score) {
            return -1;
        }

        return 0;
    });

    // filling an array with N first elements
    let ranking = [];
    for (let i = 0; i < parseInt(request.params.id); i++)
    {
        ranking.push(sortedArray[i]);
    }

    // if ranking was not found return 404 to the client
    if (!ranking) {
        response.send("no data available")
        response.status(404);
        response.end();
        return;
    }
    
    console.log(new Date().toUTCString() + " / " + request.method + " / " + rankingGetInRangeAction.name + " / " + JSON.stringify(ranking) + "\n");

    // return loaded ranking
    response.send(ranking);
}