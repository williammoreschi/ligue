import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { IDevelopersRepository } from '../../repositories/IDevelopersRepository';

interface IRequest {
  id: string;
  name: string;
  sex: string;
  hobby: string;
  age: number;
  birthdate: Date;
}

@injectable()
class UpdateDeveloperUseCase {
  constructor(
    @inject('DevelopersRepository')
    private developersRepository: IDevelopersRepository,
  ) {}
  async execute({
    id,
    name,
    hobby,
    sex,
    age,
    birthdate,
  }: IRequest): Promise<void> {
    const developer = await this.developersRepository.findById(id);

    if (!developer) {
      throw new AppError('Developer not exists');
    }

    if (sex !== 'M' && sex !== 'F') {
      throw new AppError('The variable sex permitted value M or F');
    }

    Object.assign(developer, {
      name,
      hobby,
      sex,
      age,
      birthdate,
    });
    await this.developersRepository.create(developer);
  }
}

export { UpdateDeveloperUseCase };
