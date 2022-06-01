import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindDeveloperUseCase } from './FindDeveloperUseCase';

class FindDeveloperController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const findDeveloperUseCase = container.resolve(FindDeveloperUseCase);

    const developer = await findDeveloperUseCase.execute(id);

    return response.json(developer);
  }
}

export { FindDeveloperController };
