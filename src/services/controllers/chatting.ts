import { logger } from "../../utils/logger";
import * as db from "typeorm";
import { Chatting } from "../models/chatting";
import { Request } from "express";


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
    }
};