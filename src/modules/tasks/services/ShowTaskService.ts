import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Task from '../typeorm/entities/Task';
import TaskRepository from '../typeorm/repositories/TaskRepository';

interface IRequest {
    id: string;
}

class ShowTaskService {
    public async execute({ id }: IRequest): Promise<Task> {
        const tasksRepository = getCustomRepository(TaskRepository);

        const tasks = await tasksRepository.findOne(id);

        if (!tasks) {
            throw new AppError('tarefa não encontrada');
        }

        return tasks;
    }
}
export default ShowTaskService;
