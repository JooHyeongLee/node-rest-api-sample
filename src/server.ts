/** 
 * openrider3 - v2
 *
 * (c) 2020 Cufit Inc.
 * Author : dev@cufit.net
 */

import os from 'os';
import http from 'http';
import express, { Router} from 'express';
import { handleCors, handleBodyRequestParsing, handleCompression, staticDir, multipart, mqtt } from "./middleware/common";
import routes from './controllers/routes';
import { logger } from './lib/logger';
import { config } from './lib/config';

// mqtt server(mosca)
// TODO: ormconfig 파일의 값으로 mongo, mosca 구동 필요
import { mosca } from './lib/mosca';
import { mongo } from './lib/mongo';
mongo.init()
import { sess } from './middleware/session';

export class Server {

  // 미들웨어 등록
  applyMiddleware(router: Router) {
    handleCors(router);
    handleBodyRequestParsing(router);
    handleCompression(router);
    staticDir(router);
    multipart(router);
    mqtt(router);
    sess(router);
  }

  // 라우터 등록
  async applyRoutes(routes: any, router: Router) : Promise<void>{
    // route 리스트 반환
    let routeAll = await routes();
    // route 적용
    for (const route of routeAll) {
        let props = Object.values(route);
        props.map( (v: any)=>{
            const { method, path, handler } = v;
            (router as any)[method](path, handler);
        })
    }
  }

  // Express 서버 실행
  run() {
    // 서비스 포트
    const port = config.common.SERVER.PORT;
    // Express 설정
    const app = express();
    this.applyMiddleware(app);
    this.applyRoutes(routes, app);

    // Express 시작
    const server = http.createServer(app);

    // MQTT server(mosca) 시작
    mosca.init()

    server.listen(port, () => {
      logger.info(`---------------------------------------------------`);
      logger.info(`    Express server listening on port ` + port);
      logger.info(`     - hostname : ${os.hostname()}`);
      logger.info(`     - run-mode : ${process.env.NODE_ENV}`);
      logger.info(`     - by-local : ${process.env.BY_LOCAL}`);
      logger.info(`---------------------------------------------------`);
    })
  }
}