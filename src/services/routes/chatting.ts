import { Router, Request, Response } from "express";
import { logger } from "../../utils/logger";
import { Chatting } from '../models/chatting';
import mqtt from 'mqtt';
import { chattingController } from "../controllers/chatting";


const chatting = {
    selectList : {
        path: "/api/chat/selectList",
        method: "get",
        handler: [
            async ({  }: Request, res: Response) => {
                logger.info('[route] /api/chat/selectList');
                // 채팅방 리스트 조회
                let list = await Chatting.find({
                    useYN: "Y"
                });
                res.status(200).send(list);
            }
        ]
    },
    create: {
        path: "/api/chat/create",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                logger.info('[route] /api/chat/create');
                // 채팅방 생성
                let create = await chattingController.create(req);
                res.status(200).send(create);
            }
        ]
    }
}

export {chatting}
