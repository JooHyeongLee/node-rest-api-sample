import { logger } from "../../lib/logger";
import { chattingModel } from "../models/chatting";
import { Request } from "express";
import { mqtt, Mqtt } from "../../lib/mqtt";
import { BaseController } from "../commonType/base";
import { mosca } from "../../lib/mosca";
import { db } from "../../lib/db";

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
        await mqtt.subscribe(req.body.id);        
    }
    // 메세지 발행
    submit = async(req: Request) => {
        // Base64 decode
        let data = Buffer.from('MTIzNA==', 'base64').toString('ascii');
        await mqtt.publish(Mqtt.topic, req.body.chat);
        console.log(req.body);
        let newPacket = {
            topic: 'clients',
            payload: req.body.chat,
            retain: false,
            qos: 0
          };
        await mosca.broker.publish(newPacket);
    }
}

export const chattingService = Chatting;

