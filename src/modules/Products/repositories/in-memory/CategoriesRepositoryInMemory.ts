import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO, IUpdateCategoryDTO } from "../ICategoriesRepository";
import { v4 as uuidV4} from 'uuid';


class CategoriesRepositoryInMemory implements ICategoriesRepository {
  private categories: Category[] = [];

  constructor() {
    this.categories = [
      {
        id: uuidV4(),
        name: "Categoria 1",
        description: "Descrição da categoria 1",
        created_at: new Date(),
      },
      {
        id: uuidV4(),
        name: "Categoria 2",
        description: "Descrição da categoria 2",
        created_at: new Date(),
      },
      {
        id: uuidV4(),
        name: "Categoria 3",
        description: "Descrição da categoria 3",
        created_at: new Date(),
      },
    ];
  }

  public async list(): Promise<Category[]> {
    return this.categories;
  }

  public async findById(id: string): Promise<Category> {
    const category = this.categories.find((category) => category.id === id);

    return category;
  }

  public async create(data: ICreateCategoryDTO): Promise<void> {
    const category = new Category();
    
    Object.assign(category, {
      name: data.name,
      description: data.description,
    });


    this.categories.push(category);

  }

  public async findByName(name: string): Promise<Category> {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }

  public async update(id: string, data: IUpdateCategoryDTO): Promise<void> {
    const category = this.categories.find((category) => category.id === id);

    if (!category) {
      return null;
    }

    category.name = data.name;
    category.description = data.description;

  }

  public async delete(id: string): Promise<void> {
    const category = this.categories.find((category) => category.id === id);

    if (!category) {
      return null;
    }
    
    this.categories = this.categories.filter((category) => category.id !== id);

  }
}

export { CategoriesRepositoryInMemory };