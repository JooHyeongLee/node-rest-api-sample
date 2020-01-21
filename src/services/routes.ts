import * as fs from 'fs';
import * as path from 'path';
import { logger } from '../utils/logger';

async function routeList() {
  const files = await new Promise((resolve, reject)=> fs.readdir(path.join(__dirname, '/routes/'), (err: NodeJS.ErrnoException | null, files: string[])=>{
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


async function initRouter<Router>() {
  let routeLists: any = await routeList();

  let js = routeLists.filter((v: any)=> {
    return v.substr(v.length-2) === 'js';
  })

  let result: any[] = await Promise.all(js.map(async (v: any)=> {
    const route = await import (path.join(__dirname, `/routes/${v}`));
    return await Object.values(route[v.split(".js")[0]]);
  }));
  
  const route: Partial<Router>[] = [];

  for(const prop of result) {
    Array.prototype.push.apply(route, Object.values(prop));
  }
  return route;
}

export default async function() {
    return await initRouter();
}
