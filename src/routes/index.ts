import { Router } from 'express';

import { developersRoutes } from './developers.routes';

const router = Router();

router.use('/developers', developersRoutes);

export { router };
