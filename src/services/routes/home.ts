import { Router, Request, Response } from "express";
import { logger } from "../../lib/logger";
import { BaseController } from "../commonType/base";

class Home extends BaseController {
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
                    res.status(200).send(session);
                }
            ]
        }
    }
}

export const home = new Home();
