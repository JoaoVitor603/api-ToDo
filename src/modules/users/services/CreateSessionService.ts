import AppError from '@shared/errors/AppError';
import { compare } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UserRepository';

interface IRequest {
    name: string;
    password: string;
}
// // interface IResponse {
// //     user: User;
// // } Retornar o IResponse como tipo da interface após criação do token
class CreateSessionService {
    public async execute({ name, password }: IRequest): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepository);
        const user = await usersRepository.findByName(name);

        if (!user) {
            throw new AppError('Nome de usuário ou senha incorretos', 401);
        }

        const passwordConfirmed = await compare(password, user.password);

        if (!passwordConfirmed) {
            throw new AppError('Nome de usuário ou senha incorretos', 401);
        }

        await usersRepository.save(user);
        return user;
    }
}
export default CreateSessionService;
