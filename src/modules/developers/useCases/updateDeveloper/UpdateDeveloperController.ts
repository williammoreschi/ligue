import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateDeveloperUseCase } from './UpdateDeveloperUseCase';

class UpdateDeveloperController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, hobby, sex, age, birthdate } = request.body;
    const { id } = request.params;
    const updateDeveloperUseCase = container.resolve(UpdateDeveloperUseCase);

    const developer = await updateDeveloperUseCase.execute({
      id,
      name,
      hobby,
      sex,
      age,
      birthdate,
    });

    return response.json(developer);
  }
}

export { UpdateDeveloperController };
