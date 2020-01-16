import { Router, Request, Response } from "express";



const testRouter = {
    test : {
        path: "/hello",
        method: "get",
        handler: [
            async ({  }: Request, res: Response) => {
                res.status(200).send("hello");
            }
        ]
    }, 
    test2: {
        path: "/world",
        method: "get",
        handler: [
            async ({  }: Request, res: Response) => {
                res.status(200).send("world");
            }
        ]
    }
}

export {testRouter}
