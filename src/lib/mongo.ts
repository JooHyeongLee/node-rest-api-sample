/** 
 * openrider3 - v2
 *
 * (c) 2020 Cufit Inc.
 * Author : dev@cufit.net
 */


import mongoose = require("mongoose");
import { logger } from './logger';
import { config } from './config';

export class Mongo { 
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

export const mongo = new Mongo();