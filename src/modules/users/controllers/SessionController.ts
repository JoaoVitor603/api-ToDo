import { Request, request, Response, response } from 'express';
import CreateSessionService from '../services/CreateSessionService';

export default class SessionControllers {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { name, password } = request.body;

        const createSession = new CreateSessionService();

        const user = await createSession.execute({ name, password });

        return response.json(user);
    }
}
