import { Developer } from '../entities/Developer';

interface ICreateDeveloperDTO {
  id?: string;
  name: string;
  sex: string;
  hobby: string;
  age: number;
  birthDate: Date;
}

interface IFilterDeveloperDTO {
  name: string;
  sex: string;
  hobby: string;
  age: string;
}

interface IDevelopersRepository {
  create({
    name,
    sex,
    hobby,
    age,
    birthDate,
  }: ICreateDeveloperDTO): Promise<void>;
  list(): Promise<Developer[]>;
  findByFilter({
    name,
    sex,
    hobby,
    age,
  }: IFilterDeveloperDTO): Promise<Developer[]>;
  findByName(name: string): Promise<Developer>;
  findById(id: string): Promise<Developer>;
  delete(id: string): Promise<void>;
}

export { IDevelopersRepository, ICreateDeveloperDTO, IFilterDeveloperDTO };
