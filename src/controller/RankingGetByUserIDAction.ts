import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Ranking } from "../entity/Ranking";

/**
 * Loads ranking by a given userID.
 */
export async function rankingGetByUserIDAction(request: Request, response: Response) {

    // get a ranking repository to perform operations with ranking
    const rankingRepository = getManager().getRepository(Ranking);

    // load a ranking by a given userID
    const ranking = await rankingRepository.findOne({userID: request.params.userID});

    // if ranking was not found return 404 to the client
    if (!ranking) {
        response.send("no data available");
        response.status(404);
        response.end();
        return;
    }

    console.log(new Date().toUTCString() + " / " + request.method + " / " + rankingGetByUserIDAction.name + " / " + JSON.stringify(ranking) + "\n");

    // return loaded ranking
    response.send(ranking);
}