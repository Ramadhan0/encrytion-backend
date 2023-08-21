import { Router } from 'express';
import documentRouter from './document';

const indexRouter = Router();

// main router
indexRouter.use('/document', documentRouter);

export default indexRouter;
