import { Router } from 'express';

import { healthCheckHandler } from './healthCheckControler';

const healthCheckRouter = Router();

healthCheckRouter.get('/', healthCheckHandler);

export default healthCheckRouter;