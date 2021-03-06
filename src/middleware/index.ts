import {
    handleCors,
    handleBodyRequestParsing,
    handleCompression,
    staticDir,
    multipart,
    mqtt,
  } from "./common";
  
import { handleAPIDocs } from "./apiDocs";
import { limiter } from "./rateLimit";
import { sess } from "./session";
  
  export default [
    handleCors,
    handleBodyRequestParsing,
    handleCompression,
    handleAPIDocs,
    staticDir,
    multipart,
    limiter,
    sess,
    mqtt
  ];