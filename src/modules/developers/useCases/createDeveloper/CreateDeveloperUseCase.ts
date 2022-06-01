import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { IDevelopersRepository } from '../../repositories/IDevelopersRepository';

interface IRequest {
  name: string;
  sex: string;
  hobby: string;
  age: number;
  birthDate: Date;
}

@injectable()
class CreateDeveloperUseCase {
  constructor(
    @inject('DevelopersRepository')
    private developersRepository: IDevelopersRepository,
  ) {}
  async execute({ name, sex, hobby, age, birthDate }: IRequest): Promise<void> {
    const developerAlreadyExists = await this.developersRepository.findByName(
      name,
    );

    if (developerAlreadyExists) {
      throw new AppError('Developer already exists');
    }

    if (sex !== 'M' && sex !== 'F') {
      throw new AppError('The variable sex permitted value M or F');
    }

    await this.developersRepository.create({
      name,
      sex,
      hobby,
      age,
      birthDate,
    });
  }
}

export { CreateDeveloperUseCase };
