import http from "http";
import os from 'os';
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./services";
import { logger } from "./utils/logger";

// type orm 
import * as dbConnection from './utils/dbConnection';
dbConnection.conn();


// mongo DB 
import * as mongoosedbConnModule from './utils/mongodbConnModule';
mongoosedbConnModule.conn();

process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);
});

const app = express();
// 미들웨어 등록
applyMiddleware(middleware, app);
// 라우터 등록
applyRoutes(routes, app);
// 에러핸들러 미들웨어 등록
applyMiddleware(errorHandlers, app);

const { PORT = 8081 } = process.env;
const server = http.createServer(app);

server.listen(PORT, ()=>{
    logger.info(`---------------------------------------------------`);
    logger.info(`    Openrider3 server listening on port ` + PORT);
    logger.info(`     - hostname : ${os.hostname()}`);
    logger.info(`     - run-mode : ${process.env.NODE_ENV}`);
    logger.info(`     - by-local : ${process.env.BY_LOCAL}`);
    logger.info(`---------------------------------------------------`);
})
