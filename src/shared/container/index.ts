import { container } from 'tsyringe';

import { IDevelopersRepository } from '../../modules/developers/repositories/IDevelopersRepository';
import { DevelopersRepository } from '../../modules/developers/repositories/implementations/DevelopersRepository';

container.registerSingleton<IDevelopersRepository>(
  'DevelopersRepository',
  DevelopersRepository,
);
