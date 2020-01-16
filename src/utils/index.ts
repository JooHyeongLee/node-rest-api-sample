import { Router, Request, Response, NextFunction } from "express";

type Wrapper = ((router: Router) => void);

export const applyMiddleware = (
  middlewareWrappers: Wrapper[],
  router: Router
) => {
  for (const wrapper of middlewareWrappers) {
    wrapper(router);
  }
};

type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

type Route = {
  path: string;
  method: string;
  handler: Handler | Handler[];
};

export const applyRoutes = (routes: Route[], router: Router) => {
  /* [ { test: { path: '/hello', method: 'get', handler: [Array] },
    test2: { path: '/world', method: 'get', handler: [Array] } } ] */
  for (const route of routes) {
    console.log(route.path);
    const { method, path, handler } = route;
    (router as any)[method](path, handler);
  }
};