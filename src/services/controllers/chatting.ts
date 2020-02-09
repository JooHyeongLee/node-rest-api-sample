import { logger } from "../../lib/logger";
import { chattingVo } from "../models/chatting";
import { Request } from "express";
import { Mqtt } from "../../lib/mqtt";
import { BaseController } from "../commonType/base";

class Chatting extends BaseController {
    // 채팅방 생성
    create =  async (req: Request) => {
        try {
            let result = await chattingVo.create({
                title: req.body.title,
                types: req.body.types,
                password: req.body.password,
                count: 0,
                channel: req.body.channel,
                useYN: 'Y'
            });
            return this.success(result);
        } catch(error) {
          logger.error(error);
        }
    }
    // 채팅방 구독
    join = async (req: Request) => {
        // await new Mqtt().subscribe(req.body.id);
        logger.info(`${req.body.id} topic join!`);
    }
    // 메세지 발행
    submit = async(req: Request) => {
        // await new Mqtt().publish(req.body.id, req.body.chat);
    }
}

export const chattingService = Chatting;

