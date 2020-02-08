import { logger } from "../../lib/logger";
import * as db from "typeorm";
import { chattingVo } from "../models/chatting";
import { Request } from "express";
import mqtt from 'mqtt';
import { Mqtt } from "./mqtt";

class Chatting {
    create =  async (req: Request) => {
        try {
            await chattingVo.create({
                title: req.body.title,
                types: req.body.types,
                password: req.body.password,
                count: 0,
                useYN: 'Y'
            });
        } catch(error) {
          logger.error(error);
        }
    }
    join = async (req: Request) => {
        await Mqtt.getInstance.subscribe(req.body.id);
        let client = mqtt.connect('mqtt://localhost:1883');
        /* client.subscribe(req.body.id, (err)=> {
            if(!err) {
                logger.info(`${req.body.id} topic join!`);
            }
        }) */
    }
    submit = async(req: Request) => {
        await Mqtt.getInstance.publish(req.body.id, req.body.chat);
    }

}

export const chattingService = new Chatting();

Mqtt.getInstance.client.on('message', (topic, packet) => {
    logger.info(`🐶 ${topic} ${packet}`)
})


