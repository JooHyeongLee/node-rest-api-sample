/**
 * openrider3 - v2
 *
 * (c) 2020 Cufit Inc.
 * Author : dev@cufit.net
 */

// API Server
import { Server } from './server';

// the exception originates from an unhandled rejection or from synchronous errors. 
process.on('uncaughtException', e => {
    console.log(e);
    process.exit(1);
});
// whenever a Promise is rejected and no error handler is attached to the promise within a turn of the event loop
process.on('unhandledRejection', e => {
    console.log(e);
    process.exit(1);
});

// Base 64 decode 테스트

// 서버실행
new Server().run();