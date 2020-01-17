import * as db from "typeorm";
import * as fs from 'fs';
import * as path from 'path';
import {ormconfig} from '../config/ormconfig';
import {logger} from '../utils/logger';


let env: string = process.env.NODE_ENV!;

async function conn() {
    let entry: string[] = [];
    const files: any = await setEnv(env);
    files.map( async(v: string)=>{
        if(v.substr(v.length-2) === 'js') {
            const model = await import (path.join(__dirname, `../entity/SEASON3_DEV/entities/${v}`));
            entry.push(model[v.split(".js")[0]]);
        }
    })

    db.createConnection({
        type: "mysql",
        host: ormconfig[env].host,
        port: 3306,
        username: ormconfig[env].username,
        password: ormconfig[env].password,
        database: ormconfig[env].database,
        entities: entry,
        synchronize: ormconfig[env].synchronize          // 주의!! 무조건 false로
    }).then(async connection=>{
        if(connection.isConnected) {
            logger.info('DB connected');
        };
    }).catch(error=>{
        logger.error(error);
    })
}

// env에 따라서 import하는 경로 변경
async function setEnv(env: string) {
    if(env === 'production') {
        const files = await new Promise((resolve, reject)=> fs.readdir(path.join(__dirname, '../entity/SEASON3/entities/'), (err: NodeJS.ErrnoException | null, files: string[])=>{
            if(err) {
                reject(err)
            } else {
                resolve(files);
            }
        })).catch(error=>{
            logger.error(error);
        });
        return files;
    } else {
        const files = await new Promise((resolve, reject)=> fs.readdir(path.join(__dirname, '../entity/SEASON3_DEV/entities/'), (err: NodeJS.ErrnoException | null, files: string[])=>{
            if(err) {
                reject(err)
            } else {
                resolve(files);
            }
        })).catch(error=>{
            logger.error(error);
        });
        return files;
    }
}

export {conn}
