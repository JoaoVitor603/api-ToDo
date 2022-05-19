import { EntityRepository, Repository } from 'typeorm';
import Task from '../entities/Task';

@EntityRepository(Task)
class TaskRepository extends Repository<Task> {
    public async findByName(taskName: string): Promise<Task | undefined> {
        const task = this.findOne({
            where: {
                taskName,
            },
        });
        return task;
    }
}

export default TaskRepository;
