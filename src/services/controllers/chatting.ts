import { logger } from "../../utils/logger";
import * as db from "typeorm";
import { Chatting } from "../models/chatting";
import { Request } from "express";
import mqtt from 'mqtt';


export const chattingController = {
    create: async (req: Request) => {
        try {
            await Chatting.create({
                title: req.body.title,
                types: req.body.types,
                password: req.body.password,
                count: 0,
                useYN: 'Y'
            });
        } catch(error) {
          logger.error(error);
        }
    },
    join: async (req: Request) => {
        logger.info('[model] join mqtt');
        let client = mqtt.connect('mqtt://localhost:1883');
        
        client.on('connect', function () {
            client.subscribe(req.body.id, (err) => {
                console.log('구독과 좋아요');
            //                if (!err) {
            //                  client.publish(req.body.id, 'Hello mqtt');
            //                }
            })
        })
        client.on('message', function (topic, message) {
          // message is Buffer
          console.log(message.toString())
          client.end()
        })
    }
};
