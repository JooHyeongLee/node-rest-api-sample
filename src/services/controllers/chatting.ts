import { logger } from "../../utils/logger";
import * as db from "typeorm";
import { Chatting } from "../models/chatting";
import { Request } from "express";
import mqtt from 'mqtt';
import { Mqtt } from "./mqtt";


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
        await Mqtt.getInstance().subscribe(req.body.id);
        let client = mqtt.connect('mqtt://localhost:1883');
        /* client.subscribe(req.body.id, (err)=> {
            if(!err) {
                logger.info(`${req.body.id} topic join!`);
            }
        }) */
        client.on('message', function (topic, message) {
          // message is Buffer
          console.log(message.toString())
          client.end()
        })
    },
    submit: async(req: Request) => {
        await Mqtt.getInstance().publish(req.body.id, req.body.chat);
    }
};
