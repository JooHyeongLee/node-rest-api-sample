import { Router, Request, Response } from "express";
import { logger } from "../../lib/logger";
import { mongo } from "../../lib/mongo";
import {sessionModel} from '../models/session';

class Home {
    // 홈 화면
    home = {
        path: "/",
        method: "get",
        handler: [
            async ( req: Request, res: Response) => {
                logger.info(`[route] / `);
                res.status(200).send(1);
                
            }
        ]
    }
}

export const home = new Home();
