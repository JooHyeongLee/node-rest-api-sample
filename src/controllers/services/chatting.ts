import { logger } from "../../lib/logger";
import { chattingModel } from "../models/chatting";
import { Request } from "express";
import { mqtt } from "../../lib/mqtt";
import { BaseController } from "../commonType/base";
import { mosca } from "../../lib/mosca";

class Chatting extends BaseController {
    // 채팅방 생성
    create =  async (req: Request) => {
        try {
            let result = await chattingModel.model.create({
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
        mosca.broker.on('clientConnected', (client: { id: any; })=>{
            logger.info(`client connected : ${client.id}`);
        });
    }
    // 메세지 발행
    submit = async(req: Request) => {
        await mqtt.publish('$SYS/Bd6tyWC/new/clients', req.body.chat);
        // await new Mqtt().publish(req.body.id, req.body.chat);
    }
}

export const chattingService = Chatting;

