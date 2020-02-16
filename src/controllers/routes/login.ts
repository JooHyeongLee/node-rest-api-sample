import { Router, Request, Response, request } from "express";
import { Member } from "../models/member";
import { logger } from "../../lib/logger";

class Login {
    // 로그인
    login = {
        path: "/login",
        method: "post",
        handler: [
            async ( req: Request, res: Response) => {
                logger.info(`[route]: /login`);
                let member = new Member();
                let info = await member.model.findOne({
                    email: req.body.email,
                    password: req.body.password
                });
                if(info) {
                    if(req.session!.info) {
                        req.session?.save(err=>{
                            if(err) logger.error(`session save error`);
                        })
                    } else {
                        req.session!.info = {
                            email: info.toObject().email,
                            profile: info.toObject().profile_url
                        };
                        logger.info('session save');
                    }
                    res.status(200).send(req.session);
                }
                else {
                    res.status(404).send("fail");
                }
            }
        ]
    }
}

export const login = new Login();
