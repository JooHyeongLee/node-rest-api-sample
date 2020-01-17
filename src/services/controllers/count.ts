import { logger } from "../../utils/logger";
import { OR_MEMBER } from "../../entity/SEASON3_DEV/entities/OR_MEMBER";
import * as db from "typeorm";


export const getMemberCount = async () => {
    try {
      let extn: Function = OR_MEMBER;
      const data = await db.getConnection()
                          .getRepository(extn)
                          .createQueryBuilder("OR_MEMBER")
                          .select("COUNT(*) AS COUNT")
                          .getRawOne();
      return data;
    } catch(error) {
      logger.error(error);
    }
};