import { Router, Request, Response } from "express";
import { Member } from "../models/member";
import { logger } from "../../lib/logger";
import { BaseController } from "../commonType/base";

class Login extends BaseController {
    login = {
        login: {
            path: "/login",
            method: "post",
            handler: [
                async ({body, session}: Request, res: Response) => {
                    logger.info(`[route]: /login`);
                    let member = new Member();
                    let info = await member.model.findOne({
                        email: body.email,
                        password: body.password
                    });
                    if(info) {
                        res.status(200).send("success");
                    }
                    else {
                        res.status(404).send("fail");
                    }
                }
            ]
        }
    }
    
}

export const login = new Login();
