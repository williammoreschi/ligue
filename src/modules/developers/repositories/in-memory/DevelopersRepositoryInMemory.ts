import { Developer } from '../../entities/Developer';
import {
  ICreateDeveloperDTO,
  IDevelopersRepository,
  IFilterDeveloperDTO,
} from '../IDevelopersRepository';

class DevelopersRepositoryInMemory implements IDevelopersRepository {
  developers: Developer[] = [];

  async create({
    name,
    sex,
    hobby,
    age,
    birthDate,
  }: ICreateDeveloperDTO): Promise<void> {
    const developer = new Developer();
    Object.assign(developer, { name, sex, hobby, age, birthDate });
    this.developers.push(developer);
  }
  async list(): Promise<Developer[]> {
    return this.developers;
  }

  async findByFilter({
    name,
    sex,
    hobby,
    age,
  }: IFilterDeveloperDTO): Promise<Developer[]> {
    const developers = this.developers.filter(developer => {
      return (
        developer.name === name ||
        developer.sex === sex ||
        developer.hobby === hobby ||
        String(developer.age) === age
      );
    });
    return developers;
  }

  async findByName(name: string): Promise<Developer> {
    const developer = this.developers.find(
      developer => developer.name === name,
    );
    return developer;
  }

  async findById(id: string): Promise<Developer> {
    const developer = this.developers.find(developer => developer.id === id);
    return developer;
  }
  async delete(id: string): Promise<void> {
    const developers = this.developers.filter(developer => {
      return developer.id !== id;
    });

    this.developers = developers;
  }
}

export { DevelopersRepositoryInMemory };
