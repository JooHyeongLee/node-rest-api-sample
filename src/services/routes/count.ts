import { Router, Request, Response } from "express";
import {getMemberCount} from '../controllers/count';
import { logger } from "../../utils/logger";

const count = {
    memberCount : {
        path: "/api/member/count",
        method: "post",
        handler: [
            async ({  }: Request, res: Response) => {
                logger.info('[route] /api/member/count');
                let count = await getMemberCount();
                res.status(200).send(count);
            }
        ]
    }, 
}

export {count}
