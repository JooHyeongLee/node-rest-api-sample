import rateLimit from 'express-rate-limit';
import { Router } from 'express';

export const limiter = (router: Router) => {
router.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
    }));
};
