import { Category } from "../entities/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface IUpdateCategoryDTO {
  name?: string;
  description?: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
  findById(id: string): Promise<Category>;
  update(id: string, data: IUpdateCategoryDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO, IUpdateCategoryDTO };	