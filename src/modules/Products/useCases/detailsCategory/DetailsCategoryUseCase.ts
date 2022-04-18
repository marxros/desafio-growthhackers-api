import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class DetailsCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(id: string): Promise<Category> {
    if(!id) {
      throw new Error('Category id is required.');
    }

    const category = await this.categoriesRepository.findById(id);
    
    if(!category) {
      throw new Error("Category not found");
    }

    return category;
  }
}

export { DetailsCategoryUseCase };