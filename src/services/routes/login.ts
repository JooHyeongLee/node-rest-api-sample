import { Router, Request, Response } from "express";
import { logger } from "../../utils/logger";

const login = {
    login: {
        path: "/login",
        method: "post",
        handler: [
            async ({  }: Request, res: Response) => {
                res.status(200).send("login");
            }
        ]
    }
}

export {login}
