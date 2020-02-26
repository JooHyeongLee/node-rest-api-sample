import { Router, Request, Response } from "express";
import request from 'request';
import { logger } from "../../lib/logger";
import { config } from "../../lib/config";

class Map {
    // 홈 화면
    init = {
        path: "/api/map/init",
        method: "get",
        handler: [
            async ( req: Request, res: Response) => {
                logger.info(`[route] /api/map/init `);
            }
        ]
    }
}

export const map = new Map();
