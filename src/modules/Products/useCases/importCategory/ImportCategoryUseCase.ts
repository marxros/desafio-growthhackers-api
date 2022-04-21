import { inject, injectable } from "tsyringe";
import { Product } from "../../entities/Product";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
    private productsRepository: IProductsRepository,
  ) {}

  async execute(categoryName: string, products: Product[]): Promise<void> {
    const category = await this.categoriesRepository.findByName(categoryName);

    if (!category) {
      throw new Error("Category not found");
    }

    for (const product of products) {
      product.category_id = category.id;
      await this.productsRepository.create(product);
    }
    
  }
}

export { ImportCategoryUseCase };