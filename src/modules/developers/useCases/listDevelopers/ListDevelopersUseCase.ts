import { inject, injectable } from 'tsyringe';

import { Developer } from '../../entities/Developer';
import { IDevelopersRepository } from '../../repositories/IDevelopersRepository';

@injectable()
class ListDevelopersUseCase {
  constructor(
    @inject('DevelopersRepository')
    private developersRepository: IDevelopersRepository,
  ) {}
  async execute(): Promise<Developer[]> {
    const developers = await this.developersRepository.list();
    return developers;
  }
}

export { ListDevelopersUseCase };
