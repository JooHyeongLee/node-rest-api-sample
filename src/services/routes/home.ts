import { Router, Request, Response } from "express";
import { logger } from "../../lib/logger";
import { config } from "../../lib/config";
import { mongo } from "../../lib/mongo";
import { db } from "../../lib/db";

class Home {
    home = {
        home: {
            path: "/",
            method: "get",
            handler: [
                async ({ session }: Request, res: Response) => {
                    logger.info(`[route] / `);
                    res.status(200).send(session);
                }
            ]
        },
        test: {
            path: "/test",
            method: "get",
            handler: [
                async ({ session }: Request, res: Response) => {
                    logger.info(`[route] / `);
                    console.log(mongo.pool.collection('member').find({}));
                    res.status(200).send(config.common);
                }
            ]
        }
    }
}

export const home = new Home();
