import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { Developer } from '../../entities/Developer';
import {
  IDevelopersRepository,
  IFilterDeveloperDTO,
} from '../../repositories/IDevelopersRepository';

@injectable()
class FindByFilterDeveloperUseCase {
  constructor(
    @inject('DevelopersRepository')
    private developersRepository: IDevelopersRepository,
  ) {}
  async execute({
    name,
    sex,
    hobby,
    age,
  }: IFilterDeveloperDTO): Promise<Developer[]> {
    if (!name && !sex && !hobby && !age) {
      throw new AppError(
        'The filter must have at least one of these parameters: name, age, hobby, sex',
      );
    }
    const developers = await this.developersRepository.findByFilter({
      name,
      sex,
      hobby,
      age,
    });

    return developers;
  }
}

export { FindByFilterDeveloperUseCase };
