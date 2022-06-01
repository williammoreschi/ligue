import { getRepository, Repository } from 'typeorm';

import { Developer } from '../../entities/Developer';
import {
  ICreateDeveloperDTO,
  IDevelopersRepository,
  IFilterDeveloperDTO,
} from '../IDevelopersRepository';

class DevelopersRepository implements IDevelopersRepository {
  private repository: Repository<Developer>;

  constructor() {
    this.repository = getRepository(Developer);
  }
  async findByFilter({
    name,
    sex,
    hobby,
    age,
  }: IFilterDeveloperDTO): Promise<Developer[]> {
    const where = {};
    if (name) {
      Object.assign(where, { name });
    }
    if (sex) {
      Object.assign(where, { sex });
    }
    if (age) {
      Object.assign(where, { age });
    }
    if (hobby) {
      Object.assign(where, { hobby });
    }

    const developers = await this.repository.find(where);

    return developers;
  }

  async create({
    id,
    name,
    sex,
    hobby,
    age,
    birthDate,
  }: ICreateDeveloperDTO): Promise<void> {
    const developer = this.repository.create({
      id,
      name,
      sex,
      hobby,
      age,
      birthDate,
    });

    await this.repository.save(developer);
  }

  async list(): Promise<Developer[]> {
    const developers = await this.repository.find();
    return developers;
  }

  async findByName(name: string): Promise<Developer> {
    const developer = await this.repository.findOne({ name });
    return developer;
  }

  async findById(id: string): Promise<Developer> {
    const developer = await this.repository.findOne(id);
    return developer;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { DevelopersRepository };
