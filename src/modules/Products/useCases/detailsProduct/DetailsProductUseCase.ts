import { inject, injectable } from "tsyringe";
import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class DetailsProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository,
  ) {}

  async execute(id: string): Promise<Product> {
    if(!id) {
      throw new Error('Product id is required.');
    }

    const product = await this.productsRepository.findById(id);
    
    if(!product) {
      throw new Error("Product not found");
    }

    return product;
  }
}

export { DetailsProductUseCase };