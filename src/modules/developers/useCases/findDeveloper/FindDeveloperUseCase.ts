import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { Developer } from '../../entities/Developer';
import { IDevelopersRepository } from '../../repositories/IDevelopersRepository';

@injectable()
class FindDeveloperUseCase {
  constructor(
    @inject('DevelopersRepository')
    private developersRepository: IDevelopersRepository,
  ) {}
  async execute(id: string): Promise<Developer> {
    const developer = await this.developersRepository.findById(id);

    if (!developer) {
      throw new AppError('Developer not exists');
    }
    return developer;
  }
}

export { FindDeveloperUseCase };
