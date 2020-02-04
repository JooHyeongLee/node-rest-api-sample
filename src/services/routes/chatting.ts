import { Router, Request, Response } from "express";
import { logger } from "../../utils/logger";
import { Chatting } from '../models/chatting';
import util from 'util';
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
    },
    join: {
        path: "/api/chat/join",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                logger.info('[route] /api/chat/join');
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
                var client  = mqtt.connect('mqtt://test.mosquitto.org');
                // TODO 채팅방에 따라서 구독 채널(collection)을 분기하는 방법
                // 채팅방만큼 구독 가능한 채널이 생길 수 있으므로 collectino 관리가 필요할듯.
                client.on('connect', () => {
                    client.subscribe('presence', function (err) {
                        if (!err) {
                          logger.info(req.body.chat);
                          client.publish('listener', req.body.chat)
                        }
                    })
                })


                res.status(200).send("hello");
            }
        ]
    }
}

export {chatting}
