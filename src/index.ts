import "reflect-metadata";
import { createConnection } from "typeorm";
import { Request, Response } from "express";
import * as express from 'express';
import * as bodyParser from "body-parser";
import { AppRoutes } from "./routes";

const PORT = 8080;

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register all application routes
    AppRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    // run app
    app.listen(PORT, () => {
        console.info('Express server listening on http://localhost:', PORT);
        console.log("Press CTRL-C to stop\n");
    });

  }).catch(error => console.log("TypeOrm connection error: ", error));