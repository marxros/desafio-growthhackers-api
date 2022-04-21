import { inject, injectable } from "tsyringe";
import { Product } from "../../entities/Product";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class ExportCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
    private productsRepository: IProductsRepository,
  ) {}

  async execute(categoryName: string): Promise<Product[]> {
    const category = await this.categoriesRepository.findByName(categoryName);

    const products = await this.productsRepository.findByCategory(category.id);

    return products;
  }
}

export { ExportCategoriesUseCase };