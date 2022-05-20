import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UserRepository';

interface IRequest {
    name: string;
    password: string;
}

class CreateUserService {
    public async execute({ name, password }: IRequest): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepository);
        const nameExists = await usersRepository.findByName(name);

        if (nameExists) {
            throw new AppError('Nome de usuário já cadastrado');
        }

        const hashedPassword = await hash(password, 8);

        const user = usersRepository.create({
            name,
            password: hashedPassword,
        });

        await usersRepository.save(user);
        return user;
    }
}
export default CreateUserService;
