import session from 'express-session';
import mongoose  from 'mongoose';
import { Router } from 'express';
import { logger } from '../lib/logger';
import { mongo } from "../lib/mongo";
const MongoStore = require('connect-mongo')(session);

export const sess = async (router: Router) => {
    router.use(session({
        secret: 'my-secret',
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({ 
            mongooseConnection: mongoose.connection,
            url: 'mongodb://localhost/MEVN-boilerplate',
            touchAfter: 24 * 3600, // time period in seconds
            autoRemove: 'native', // Default
            collection: "session"
        })
        /* saveUninitialized: true,
        resave: false,
        store: new MongoStore({
            url: 'mongodb://localhost/MEVN-boilerplate',
            touchAfter: 24 * 3600, // time period in seconds
            autoRemove: 'native', // Default
            collection: "session"
        }),
        secret:'secretsessionkey', */
    }));
    logger.info('Mongo Session Store init');
};