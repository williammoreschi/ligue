import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteDeveloperUseCase } from './DeleteDeveloperUseCase';

class DeleteDeveloperController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteDeveloperUseCase = container.resolve(DeleteDeveloperUseCase);

    await deleteDeveloperUseCase.execute(id);

    return response.status(204).send();
  }
}

export { DeleteDeveloperController };
