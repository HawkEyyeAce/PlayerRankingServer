import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Ranking } from "../entity/Ranking";

/**
 * Delete ranking by a given id.
 */
export async function rankingDeleteByIdAction(request: Request, response: Response) {

    // get a ranking repository to perform operations with ranking
    const rankingRepository = getManager().getRepository(Ranking);

    // load a ranking by a given id
    const ranking = await rankingRepository.findOne(request.params.id);

    // if ranking was not found return 404 to the client
    if (!ranking) {
        response.status(404);
        response.end();
        return;
    }

    await rankingRepository.remove(ranking);

    // return loaded ranking
    response.send("Score deleted");
}