import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Ranking } from "../entity/Ranking";

/**
 * Saves given ranking.
 */
export async function rankingSaveAction(request: Request, response: Response) {

    // get a ranking repository to perform operations with ranking
    const rankingRepository = getManager().getRepository(Ranking);

    // create a real ranking object from ranking json object sent over http
    const newRanking = rankingRepository.create(request.body);

    let data = {
        'userID': request.body.userID,
        'score': request.body.score
    };

    console.log(new Date().toUTCString() + " / " + request.method + " / " + rankingSaveAction.name + " / Data sent : " + JSON.stringify(data) + "\n");

    // save received ranking
    await rankingRepository.save(newRanking);
    
    // return saved ranking back
    response.send("Score sent");
}