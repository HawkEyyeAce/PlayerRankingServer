import { rankingGetAllAction } from "./controller/RankingGetAllAction";
import { rankingGetByIdAction } from "./controller/RankingGetByIdAction";
import { rankingGetByUserIDAction } from "./controller/RankingGetByUserIDAction";
import { rankingGetByScoreAction } from "./controller/RankingGetByScoreAction";
import { rankingGetInRangeAction } from "./controller/RankingGetInRangeAction";
import { rankingSaveAction } from "./controller/RankingSaveAction";
import { rankingDeleteByIdAction } from "./controller/RankingDeleteByIdAction";
import { rankingDeleteByUserIDAction } from "./controller/RankingDeleteByUserIDAction";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/rankings",
        method: "get",
        action: rankingGetAllAction
    },
    {
        path: "/rankings/id/:id",
        method: "get",
        action: rankingGetByIdAction
    },
    {
        path: "/rankings/userID/:userID",
        method: "get",
        action: rankingGetByUserIDAction
    },
    {
        path: "/rankings/score",
        method: "get",
        action: rankingGetByScoreAction
    },
    {
        path: "/rankings/range/:id",
        method: "get",
        action: rankingGetInRangeAction
    },
    {
        path: "/rankings",
        method: "post",
        action: rankingSaveAction
    },
    {
        path: "/rankings/id/:id",
        method: "delete",
        action: rankingDeleteByIdAction
    },
    {
        path: "/rankings/userID/:userID",
        method: "delete",
        action: rankingDeleteByUserIDAction
    }
];