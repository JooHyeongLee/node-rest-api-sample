import {testRouter} from './routes/testRouter';
import {testRouter2} from './routes/testRouter2';
import {count} from './routes/count';
import * as fs from 'fs';
import * as path from 'path';
import { logger } from '../utils/logger';

let result: any = [];
let routes = [testRouter, testRouter2, count];

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


async function initRouter<Router>(routes: Router[]) {
  let routeLists: any = await routeList();
  const entry: any = [];

  routeLists.map( async (v: string)=>{
    if(v.substr(v.length-2) === 'js') {
        const route = await import (path.join(__dirname, `/routes/${v}`));
        
        let a: any = Object.values(route[v.split(".js")[0]]);
        Array.prototype.push.apply(entry, a[0]);

    }
  })
  
  const route: Partial<Router>[] = [];

  for(const prop of routes) {
    Array.prototype.push.apply(route, Object.values(prop));
  }
  result = route;
}

initRouter(routes);

export default result


/* 
export default [
  {
    path: "/api/v1/search",
    method: "get",
    handler: [
      checkSearchParams,
      async ({ query }: Request, res: Response) => {
        const result = await getPlacesByName(query.q);
        res.status(200).send(result);
      }
    ]
  },
  {
    path: "/api/test",
    method: "get",
    handler: [
      async ({  }: Request, res: Response) => {
        res.status(200).send("test");
      }
    ]
  },
  // result
]; */