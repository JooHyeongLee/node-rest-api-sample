# Production ready Node.js REST APIs Setup using TypeScript , MYSQL.

# Prerequisites
* npm 6+
* node.js 10+

# cluster
* pm2

# ORM
* typeorm

# Getting started
1. ```npm install```
2. ```src/config/ormconfig.ts```
3. ```npm run dev```
4. ```npm run start(pm2)```

# ormconfig.ts
```typescript
const ormconfig: any = {
   "development": {
      "type": "mysql",
      "host": "host",
      "port": port,
      "username": "username",
      "password": "password",
      "database": "database",
      "synchronize": false,
      "logging": false,
      "entities": [
         "src/entity/**/*.ts"
      ],
      "cli": {
         "entitiesDir": "src/entity"
      }
   }, 
   "production": {
       ...
   }
   
}
export {ormconfig} 
```