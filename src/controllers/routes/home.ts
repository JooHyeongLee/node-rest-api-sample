import { Router, Request, Response } from "express";
import { logger } from "../../lib/logger";

class Home {
    // 홈 화면
    home = {
        path: "/",
        method: "get",
        handler: [
            async ({ session }: Request, res: Response) => {
                logger.info(`[route] / `);
                res.status(200).send(session);
                
            }
        ]
    }
}

export const home = new Home();
