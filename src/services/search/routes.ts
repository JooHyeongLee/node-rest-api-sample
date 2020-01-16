import { Request, Response, Handler } from "express";
import { getPlacesByName } from "./SearchController";
import { checkSearchParams } from "../../middleware/checks";
import {testRouter} from './route/test';
import {testRouter2} from './route/test2';

let result: any = [];
// console.log(routes);
result.push(testRouter.test)
result.push(testRouter.test2)
result.push(testRouter2.test3)
result.push(testRouter2.test4)


export default result
/* 
export default [
  {
    path: "/api/v1/search",
    method: "get",
    handler: [
      checkSearchParams,
      async ({ query }: Request, res: Response) => {
        const result = await getPlacesByName(query.q);
        res.status(200).send(result);
      }
    ]
  },
  {
    path: "/api/test",
    method: "get",
    handler: [
      async ({  }: Request, res: Response) => {
        res.status(200).send("test");
      }
    ]
  },
  // result
]; */