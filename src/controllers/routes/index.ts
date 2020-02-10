/** 
 * openrider3 - v2
 *
 * (c) 2020 Cufit Inc.
 * Author : dev@cufit.net
 */

import * as fs from 'fs';
import * as path from 'path';
import { logger } from '../../lib/logger';

// routes 디렉토리에 있는 파일명 리스트 가져오기
async function routeList() {
  const files = await new Promise((resolve, reject) =>
    fs.readdir(
      path.join(__dirname),
      (err: NodeJS.ErrnoException | null, files: string[]) => {
        if (err) {
          reject(err);
        } else {
          resolve(files);
        }
      }
    )
  ).catch(error => {
    logger.error(error);
  });
  return files;
}

// 모든 라우터 파일을 import해서 반환
async function initRouter<Router>() {
  let routeLists: any = await routeList();

  // js 이외의 파일 제외
  let js = routeLists.filter((v: any) => {
    return v.substr(v.length - 2) === 'js' && v != 'index.js';
  });

  // import 처리
  let result: any[] = await Promise.all(
    js.map(async (v: any) => {
      const route = await import(path.join(__dirname, `/${v}`));
      let routeName = v.split('.js')[0];
      // 참고) route 파일명과 파일내 최상위 객체명이 동일해야함
      return Object.values(route[routeName]);
    })
  );

  // route 정보 리스트를 반환 
  // 참고) route 정보 : path, method, handler
  const route: Partial<Router>[] = [];
  for (const prop of result) route.push(prop);
  return route;
}

// route 정보 리스트 요청 함수
export default async function() {
  return await initRouter();
}