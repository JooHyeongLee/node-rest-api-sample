import { Router, Request, Response } from "express";
import { logger } from "../../utils/logger";

const login = {
    login: {
        path: "/login",
        method: "post",
        handler: [
            async ({body}: Request, res: Response) => {
                console.log(body);
                res.status(200).send("login");
            }
        ]
    }
}

export {login}
