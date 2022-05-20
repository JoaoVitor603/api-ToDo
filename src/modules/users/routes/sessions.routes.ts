import { Router } from 'express';
import SessionControllers from '../controllers/SessionController';

const sessionsRouter = Router();
const sessionsController = new SessionControllers();

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
