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
                let session = await sessionModel.model.find({
                    _id: 'qSzjyLXzEMSFQq77hXp-Oia1l4Jroj1G'
                })
                console.log(session);
                logger.info(`[route] / `);
                res.status(200).send(1);
                
            }
        ]
    }
}

export const home = new Home();
