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
                    req.session!.isLogin = true;
                    // 몽고 세션 저장
                    req.session?.save(err=>{
                        logger.error(err);
                    })
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
