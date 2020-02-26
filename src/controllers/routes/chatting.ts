import { Router, Request, Response } from "express";
import { logger } from "../../lib/logger";
import { chattingModel } from '../models/chatting';
import { chattingService } from "../services/chatting";
import { mqtt } from "../../lib/mqtt";
import { BaseController } from "../commonType/base";
import { mosca } from "../../lib/mosca";

class Chatting extends BaseController {

    // 채팅방 목록 조회
    selectList = {
        path: "/api/chat/selectList",
        method: "get",
        handler: [
            async ({  }: Request, res: Response) => {
                logger.info('[route] /api/chat/selectList');
                // 채팅방 리스트 조회
                let list = await chattingModel.model.find({
                    useYN: "Y"
                });
                res.status(200).send(list);
            }
        ]
    }
    // 채팅방 생성
    create = {
        path: "/api/chat/create",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                logger.info('[route] /api/chat/create');
                // 채팅방 생성
                let create = await chattingService.create(req);
                res.status(200).send(create);
            }
        ]
    }
    // 채팅방 참가
    join = {
        path: "/api/chat/join",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                logger.info('[route] /api/chat/join');
                // 여기서 구독하는 프로세스 진행
                await chattingService.join(req);
                res.status(200).send("test");
            }
        ]
    }
    // 메시지 전송
    submit = {
        path: "/api/chat/submit",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                logger.info('[route] /api/chat/submit');
                await mqtt.publish(req.body.topic, req.body.chat);
                res.status(200).send(req.body.chat);
            }
        ]
    }
}

export const chatting = new Chatting();