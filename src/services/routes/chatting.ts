import { Router, Request, Response } from "express";
import { logger } from "../../utils/logger";
import { Chatting } from '../models/chatting';
import util from 'util';
import mqtt from 'mqtt';
import { chattingController } from "../controllers/chatting";
import { Mqtt } from "../controllers/mqtt";


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
    },
    join: {
        path: "/api/chat/join",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                logger.info('[route] /api/chat/join');
                // 여기서 구독하는 프로세스 진행
                let join = await chattingController.join(req);
                res.status(200).send("test");
            }
        ]
    },
    submit: {
        path: "/api/chat/submit",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                logger.info('[route] /api/chat/submit');
                logger.info(`publish ch - listener ${req.body.chat}`);
                let submit = await chattingController.submit(req);
                res.status(200).send(req.body.chat);
            }
        ]
    },
}

export {chatting}
