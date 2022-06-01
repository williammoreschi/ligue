import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindByFilterDeveloperUseCase } from './FindByFilterDeveloperUseCase';

class FindByFilterDeveloperController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, sex, hobby, age } = request.query;
    const findDeveloperUseCase = container.resolve(
      FindByFilterDeveloperUseCase,
    );
    console.log(name, sex, hobby, age);
    const developer = await findDeveloperUseCase.execute({
      name,
      sex,
      hobby,
      age,
    });

    return response.json(developer);
  }
}

export { FindByFilterDeveloperController };
