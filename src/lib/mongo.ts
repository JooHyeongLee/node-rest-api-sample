/** 
 * Mongo DB pool
 *
 * (c) 2020 jhlee
 * Author : jhlee@cufit.net
 */

import mongoose = require("mongoose");
import { logger } from './logger';
import { config } from './config';

class Mongo { 
    private db: mongoose.Connection;
    
    constructor() {
        this.init();
    }

    public get pool() {
        return this.db;
    }

    public async init() {
        await mongoose.connect(`mongodb://${config.orm.host}:27017/MEVN-boilerplate`, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
        this.db = mongoose.connection;
        this.db.on("error", console.error.bind(console, "connection error"));
        this.db.once("open", async () =>{
            logger.info("Mongo Connection Succeeded");
        });
  }
}

export const mongo = new Mongo();