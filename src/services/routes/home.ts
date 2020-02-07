import { Router, Request, Response } from "express";
import { logger } from "../../lib/logger";

const home = {
    home : {
        path: "/",
        method: "get",
        handler: [
            async ({ session }: Request, res: Response) => {
                logger.info(`[route] / `);
                res.status(200).send(session);
            }
        ]
    }, 
}

export {home}
