import { Request, Response } from 'express';
import CreateTaskService from '../services/CreateTaskService';
import DeleteTaskService from '../services/DeleteTaskService';
import ListTaskService from '../services/ListTaskService';
import ShowTaskService from '../services/ShowTaskService';
import UptadeTaskService from '../services/UptadeTaskService';

export default class TaskController {
    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const listTask = new ListTaskService();

        const task = await listTask.execute();

        return response.json(task);
    }
    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const showTask = new ShowTaskService();

        const task = await showTask.execute({ id });
        return response.json(task);
    }
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { taskName, description, complete } = request.body;

        const createTask = new CreateTaskService();

        const task = await createTask.execute({
            taskName,
            description,
            complete,
        });

        return response.json(task);
    }

    public async uptade(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { taskName, description, complete } = request.body;
        const { id } = request.params;

        const uptadeTask = new UptadeTaskService();

        const task = await uptadeTask.execute({
            id,
            taskName,
            description,
            complete,
        });
        return response.json(task);
    }

    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = request.params;

        const deleteTask = new DeleteTaskService();

        await deleteTask.execute({ id });

        return response.json([]);
    }
}
