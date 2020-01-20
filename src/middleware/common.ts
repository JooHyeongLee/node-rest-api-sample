import express from "express";
import cors from "cors";
import parser from "body-parser";
import compression from "compression";
import multer from "multer";
import path from "path";

export const handleCors = (router: express.Router) =>
  router.use(cors({ credentials: true, origin: true }));

export const handleBodyRequestParsing = (router: express.Router) => {
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

export const handleCompression = (router: express.Router) => {
  router.use(compression());
};

export const staticDir = (router: express.Router) => {
  router.use(express.static(path.join(__dirname, 'public')));
  router.use('/static', express.static("/public"));
}

export const multipart = (router: express.Router) => {
  var upload = multer();
  multer({dest: "tmp"});
  router.use(upload.none());
}