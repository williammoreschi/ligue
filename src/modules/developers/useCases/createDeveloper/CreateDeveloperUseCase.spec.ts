import { AppError } from '../../../../errors/AppError';
import { DevelopersRepositoryInMemory } from '../../repositories/in-memory/DevelopersRepositoryInMemory';
import { CreateDeveloperUseCase } from './CreateDeveloperUseCase';

let createDeveloperUseCase: CreateDeveloperUseCase;
let developersRepositoryInMemory: DevelopersRepositoryInMemory;

describe('Create Developer', () => {
  beforeEach(() => {
    developersRepositoryInMemory = new DevelopersRepositoryInMemory();
    createDeveloperUseCase = new CreateDeveloperUseCase(
      developersRepositoryInMemory,
    );
  });

  it('should be able to create a new developer', async () => {
    const developer = {
      name: 'Developer Test',
      age: 33,
      sex: 'M',
      hobby: 'Hobby Test',
      birthDate: new Date(),
    };

    await createDeveloperUseCase.execute({
      name: developer.name,
      age: developer.age,
      sex: developer.sex,
      hobby: developer.hobby,
      birthDate: developer.birthDate,
    });

    const developerCreated = await developersRepositoryInMemory.findByName(
      developer.name,
    );

    expect(developerCreated).toHaveProperty('id');
  });

  it('should not be able to create a new developer, because variable sex only allow value M or F', async () => {
    expect(async () => {
      const developer = {
        name: 'Developer Test',
        age: 33,
        sex: 'X',
        hobby: 'Hobby Test',
        birthDate: new Date(),
      };

      await createDeveloperUseCase.execute({
        name: developer.name,
        age: developer.age,
        sex: developer.sex,
        hobby: developer.hobby,
        birthDate: developer.birthDate,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new developer with name exists', async () => {
    expect(async () => {
      const developer = {
        name: 'Developer Test',
        age: 33,
        sex: 'M',
        hobby: 'Hobby Test',
        birthDate: new Date(),
      };

      await createDeveloperUseCase.execute({
        name: developer.name,
        age: developer.age,
        sex: developer.sex,
        hobby: developer.hobby,
        birthDate: developer.birthDate,
      });

      await createDeveloperUseCase.execute({
        name: developer.name,
        age: developer.age,
        sex: developer.sex,
        hobby: developer.hobby,
        birthDate: developer.birthDate,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
