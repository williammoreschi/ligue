import { inject, injectable } from 'tsyringe';

import { IDevelopersRepository } from '../../repositories/IDevelopersRepository';

@injectable()
class DeleteDeveloperUseCase {
  constructor(
    @inject('DevelopersRepository')
    private developersRepository: IDevelopersRepository,
  ) {}
  async execute(id: string): Promise<void> {
    await this.developersRepository.delete(id);
  }
}

export { DeleteDeveloperUseCase };
