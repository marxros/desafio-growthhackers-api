import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  id: string;
  name?: string;
  description?: string;
}

@injectable()
class UpdateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(data: IRequest): Promise<void> {
    
    const { id } = data;

    if(!id) {
      throw new Error('Category id is required.');
    }

    const categoryExists = await this.categoriesRepository.findById(id);

    if (!categoryExists) {
      throw new Error("Category not found");
    }

    await this.categoriesRepository.update(data);
  }
}

export { UpdateCategoryUseCase };