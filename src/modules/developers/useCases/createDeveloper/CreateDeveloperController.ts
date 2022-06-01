import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateDeveloperUseCase } from './CreateDeveloperUseCase';

class CreateDeveloperController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, sex, hobby, age, birthDate } = request.body;
    const createDeveloperUseCase = container.resolve(CreateDeveloperUseCase);

    await createDeveloperUseCase.execute({ name, sex, hobby, age, birthDate });

    return response.status(201).send();
  }
}

export { CreateDeveloperController };
