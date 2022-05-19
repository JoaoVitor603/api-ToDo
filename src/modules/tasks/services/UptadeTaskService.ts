import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Task from '../typeorm/entities/Task';
import TaskRepository from '../typeorm/repositories/TaskRepository';

interface IRequest {
    id: string;
    taskName: string;
    description: string;
    complete: boolean;
}

class UpdateTaskService {
    public async execute({
        id,
        taskName,
        description,
        complete,
    }: IRequest): Promise<Task> {
        const tasksRepository = getCustomRepository(TaskRepository);

        const task = await tasksRepository.findOne(id);

        if (!task) {
            throw new AppError('Task não encontrada.');
        }

        const taskExists = await tasksRepository.findByName(taskName);

        if (taskExists) {
            throw new AppError('Já há uma tarefa com este nome');
        }

        task.taskName = taskName;
        task.description = description;
        task.complete = complete;

        await tasksRepository.save(task);

        return task;
    }
}

export default UpdateTaskService;
