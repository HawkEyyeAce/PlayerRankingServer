import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Ranking } from "../entity/Ranking";

/**
 * Loads all rankings from the database.
 */
export async function rankingGetAllAction(request: Request, response: Response) {

    // get a ranking repository to perform operations with ranking
    const rankingRepository = getManager().getRepository(Ranking);

    // load all rankings
    const rankings = await rankingRepository.find();

    console.log(new Date().toUTCString() + " / " + request.method + " / " + rankingGetAllAction.name + " / " + JSON.stringify(rankings) + "\n");

    // return loaded rankings
    response.send(rankings);
}