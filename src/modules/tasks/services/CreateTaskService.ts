import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Task from '../typeorm/entities/Task';
import TasksRepository from '../typeorm/repositories/TaskRepository';

interface IRequest {
    taskName: string;
    description: string;
    complete: boolean;
}

class CreateTaskService {
    public async execute({
        taskName,
        description,
        complete,
    }: IRequest): Promise<Task> {
        const tasksRepository = getCustomRepository(TasksRepository);
        const taskExists = await tasksRepository.findByName(taskName);
        if (taskExists) {
            throw new AppError('There is already one with this name');
        }
        const task = tasksRepository.create({
            taskName,
            description,
            complete: false,
            //ultima alteração
        });

        await tasksRepository.save(task);

        return task;
    }
}
export default CreateTaskService;
