import session from 'express-session';
import { Router } from 'express';

export const sess = (router: Router) => {
    router.use(session({ secret: 'jhlee', resave: true, saveUninitialized: true, cookie: { maxAge: 60000 }}));
};
