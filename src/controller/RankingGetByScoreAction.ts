import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Ranking } from "../entity/Ranking";

/**
 * Loads ranking by a given score.
 */
export async function rankingGetByScoreAction(request: Request, response: Response) {

    // get a ranking repository to perform operations with ranking
    const rankingRepository = getManager().getRepository(Ranking);

    // load a ranking by a given score
    const ranking = await rankingRepository.findOne({score: request.body.score});

    // working with score number as 15
    // not working with score float number as 15.1
    // cast error not found from typeorm

    // if ranking was not found return 404 to the client
    if (!ranking) {
        response.send("no data available");
        response.status(404);
        response.end();
        return;
    }

    console.log(new Date().toUTCString() + " / " + request.method + " / " + rankingGetByScoreAction.name + " / " + JSON.stringify(ranking) + "\n");

    // return loaded ranking
    response.send(ranking);
}