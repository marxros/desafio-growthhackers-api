import { Category } from "../entities/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface IUpdateCategoryDTO {
  id: string;
  name?: string;
  description?: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
  findById(id: string): Promise<Category>;
  update(data: IUpdateCategoryDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO, IUpdateCategoryDTO };	