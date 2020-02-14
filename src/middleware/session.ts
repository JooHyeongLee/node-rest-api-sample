import session from 'express-session';
import mongoose from 'mongoose';
import { Router } from 'express';
import { logger } from '../lib/logger';
const MongoStore = require('connect-mongo')(session);

export const sess = (router: Router) => {
    router.use(session({
        saveUninitialized: false,
        resave: false,
        store: new MongoStore({
            url: 'mongodb://localhost/MEVN-boilerplate',
            touchAfter: 24 * 3600, // time period in seconds
            autoRemove: 'native', // Default
            collection: "session"
        }),
        secret:'secretsessionkey',
        
    }));
};