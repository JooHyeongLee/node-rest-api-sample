import {
    handleCors,
    handleBodyRequestParsing,
    handleCompression,
    staticDir,
    multipart
  } from "./common";
  
  import { handleAPIDocs } from "./apiDocs";
  
  export default [
    handleCors,
    handleBodyRequestParsing,
    handleCompression,
    handleAPIDocs,
    staticDir,
    multipart
  ];