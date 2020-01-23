import { Router, Request, Response } from "express";
import { logger } from "../../utils/logger";
import { Member } from "../models/member";

const login = {
    login: {
        path: "/login",
        method: "post",
        handler: [
            async ({body, session}: Request, res: Response) => {
                let member = await new Member();
                let info = await member.model.findOne({
                    email: body.email,
                    password: body.password
                })
                if(info) {
                    logger.info(`[route]: /login`);
                    session!.isLogin = true;
                    res.status(200).send("success");
                } 
            }
        ]
    }
}

export {login}
