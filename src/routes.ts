import { rankingGetAllAction } from "./controller/RankingGetAllAction";
import { rankingGetByIdAction } from "./controller/RankingGetByIdAction";
import { rankingSaveAction } from "./controller/RankingSaveAction";

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
        path: "/rankings",
        method: "post",
        action: rankingSaveAction
    }
];