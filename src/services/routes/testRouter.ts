import { Router, Request, Response } from "express";
import { OR_RECORD_EXTN_DEV } from '../../entity/SEASON3_DEV/entities/OR_RECORD_EXTN';
import * as db from "typeorm";
import { logger } from "../../utils/logger";
import { checkSearchParams } from "../../middleware/checks";


const testRouter = {
    test : {
        path: "/hello",
        method: "get",
        handler: [
            async ({  }: Request, res: Response) => {
                async function test() {
                    try {
                      let extn: Function = OR_RECORD_EXTN_DEV;
                      const data = await db.getConnection()
                                          .getRepository(extn)
                                          .createQueryBuilder("OR_RECORD_EXTN")
                                          .select("MAX(OR_RECORD_EXTN.RECORD_SEQ)", "LAST_RECORD_SEQ")
                                          .addSelect("MIN(OR_RECORD_EXTN.RECORD_SEQ)", "FIRST_RECORD_SEQ")
                                          .getRawMany();
                      return data;
                    } catch(error) {
                      logger.error(error);
                    }
                  }
                res.status(200).json(await test());
            }
        ]
    }, 
    test2: {
        path: "/world",
        method: "get",
        handler: [
            checkSearchParams,
            async ({ query }: Request, res: Response) => {
                res.status(200).send("world " + query.q);
            }
        ]
    }
}

export {testRouter}
