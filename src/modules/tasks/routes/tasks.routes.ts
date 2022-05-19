import { Router } from 'express';
import TaskController from '../controllers/TaskController';

const tasksRouter = Router();
const tasksController = new TaskController();

tasksRouter.get('/', tasksController.index);

tasksRouter.get('/:id', tasksController.show);

tasksRouter.post('/', tasksController.create);

tasksRouter.put('/:id', tasksController.uptade);

tasksRouter.delete('/:id', tasksController.delete);

export default tasksRouter;
