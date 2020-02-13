import session from 'express-session';
import mongoose from 'mongoose';
import { Router } from 'express';
import { logger } from '../lib/logger';

export const sess = (router: Router) => {
    router.use(session({
        saveUninitialized:true,
        resave:true,
        secret:'secretsessionkey',
        store:require('mongoose-session')(mongoose)
    }));
};