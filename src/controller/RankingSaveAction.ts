import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Ranking } from "../entity/Ranking";

/**
 * Saves given ranking.
 */
export async function rankingSaveAction(request: Request, response: Response) {

    let error = false;

    // get a ranking repository to perform operations with ranking
    const rankingRepository = getManager().getRepository(Ranking);

    let userData = await rankingRepository.find({ where: {"userID": request.body.userID}});
    console.log("userData", userData);

    // check if this userID is already in the database
    if (Array.isArray(userData) && userData.length)
    {
        console.log("Try to update userID");
        if (userData.length == 1)
        {
            const ranking = rankingRepository.merge(userData[0], {userID: request.body.userID}, {score: request.body.score});
            rankingRepository.save(ranking);
        }
        else
        {
            console.log("Too many userID found in database.");
            error = true;
            response.send("Error: Too many userID found in database.");
        }
    }
    else
    {
        // create a real ranking object from ranking json object sent over http
        const newRanking = rankingRepository.create(request.body);

        // save received ranking
        await rankingRepository.save(newRanking);

        console.log("Create new userID");
    }
    
    if (!error)
    {
        let data = {
            'userID': request.body.userID,
            'score': request.body.score
        };

        console.log(new Date().toUTCString() + " / " + request.method + " / " + rankingSaveAction.name + " / Data sent : " + JSON.stringify(data) + "\n");

        // return saved ranking back
        response.send("Score sent");
    }
}