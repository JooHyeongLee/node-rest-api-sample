import { Router, Request, Response } from "express";



const testRouter2 = {
    test3 : {
        path: "/aa",
        method: "get",
        handler: [
            async ({  }: Request, res: Response) => {
                res.status(200).send("hello");
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
