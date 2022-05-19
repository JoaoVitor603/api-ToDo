import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Task from '../typeorm/entities/Task';
import TaskRepository from '../typeorm/repositories/TaskRepository';

class ListTaskService {
    public async execute(): Promise<Task[]> {
        const tasksRepository = getCustomRepository(TaskRepository);

        const Tasks = await tasksRepository.find();

        return Tasks;
    }
}
export default ListTaskService;
