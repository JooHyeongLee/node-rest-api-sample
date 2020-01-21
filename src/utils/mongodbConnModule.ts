import mongoose = require("mongoose");
import { logger } from './logger';

async function conn() {
    await mongoose.connect('mongodb://localhost:27017/MEVN-boilerplate', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error"));
    db.once("open", async function(callback){
      await logger.info("Connection Succeeded");
    });
    return db;
} 

export {conn}
