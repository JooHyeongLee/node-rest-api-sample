/** 
 * Type ORM (MYSQL) db pool
 *
 * (c) 2020 jhlee
 * Author : jhlee@cufit.net
 */

import * as typeorm from 'typeorm';
import { logger } from './logger';
import { config } from './config';

export class DB { 

  constructor() {
    this.init();
  }

  // DB 연결 후에 typeorm connection 객체를 가져오는 함수
  public get pool() : any {
    return typeorm.getConnection();
  }

  // DB 연결 초기화
  public async init() {
    // config에 따라 상용/개발 DB 분기처리 , entities는 빌드시에 해당 디렉토리에 파일을 새로 생성
   typeorm.createConnection({
      type: 'mysql',
      host: config.orm.host,
      port: 3306,
      username: config.orm.username,
      password: config.orm.password,
      database: config.orm.database,
      entities: ["entities/*.*"],
      synchronize: config.orm.synchronize, // 주의!! 무조건 false로
    })
      .then(async connection => {
        if (connection.isConnected) {
          logger.info('DB connected');
        }
      })
      .catch(error => {
        logger.error(error);
      });
  }
}

export const db = new DB();