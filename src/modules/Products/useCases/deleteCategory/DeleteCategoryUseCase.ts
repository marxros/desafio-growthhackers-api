import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class DeleteCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(id: string): Promise<void> {
    
    if(!id) {
      throw new Error('Category id is required.');
    }

    const categoryExists = await this.categoriesRepository.findById(id);

    if(!categoryExists) {
      throw new Error("Category not found");
    }
    
    await this.categoriesRepository.delete(id);
  }
}

export { DeleteCategoryUseCase };