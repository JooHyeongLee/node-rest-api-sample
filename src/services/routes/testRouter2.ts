import { Router, Request, Response } from "express";
import { logger } from "../../utils/logger";



const testRouter2 = {
    test3 : {
        path: "/aa",
        method: "get",
        handler: [
            async ({  }: Request, res: Response) => {
                logger.info('[route] : /aa ')
                res.status(200).send("abcd");
            }
        ]
    }, 
    test4: {
        path: "/bb",
        method: "get",
        handler: [
            async ({  }: Request, res: Response) => {
                res.status(200).send("world");
            }
        ]
    }
}

export {testRouter2}
