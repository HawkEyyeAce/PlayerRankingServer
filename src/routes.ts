import { rankingGetAllAction } from "./controller/RankingGetAllAction";
import { rankingGetByIdAction } from "./controller/RankingGetByIdAction";
import { rankingGetInRangeAction } from "./controller/RankingGetInRangeAction";
import { rankingSaveAction } from "./controller/RankingSaveAction";
import { rankingDeleteByIdAction } from "./controller/RankingDeleteByIdAction";

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
        path: "/rankings/:id",
        method: "get",
        action: rankingGetByIdAction
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
        path: "/rankings/:id",
        method: "delete",
        action: rankingDeleteByIdAction
    }
];