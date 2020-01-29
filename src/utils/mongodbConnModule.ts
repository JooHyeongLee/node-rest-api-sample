import mongoose = require("mongoose");
import { logger } from './logger';

export class MongoConn {
  private db: mongoose.Connection;
  constructor() {
    this.init();
  }

  public async init() {
    await mongoose.connect('mongodb://localhost:27017/MEVN-boilerplate', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
    this.db = mongoose.connection;
    this.db.on("error", console.error.bind(console, "connection error"));
    this.db.once("open", async () =>{
      logger.info("Connection Succeeded");
    });
  }
}


/* async function conn() {
    await mongoose.connect('mongodb://localhost:27017/MEVN-boilerplate', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error"));
    db.once("open", async function(callback){
      logger.info("Connection Succeeded");
    });
    return db;
} 

export {conn} */
