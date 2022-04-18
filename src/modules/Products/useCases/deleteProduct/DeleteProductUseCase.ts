import { inject, injectable } from "tsyringe";
import { IProductsRepository } from "../../repositories/IProductsRepository";

injectable()
class DeleteProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    
    if(!id) {
      throw new Error('Product id is required.');
    }

    const productExists = await this.productsRepository.findById(id);

    if(!productExists) {
      throw new Error("Product not found");
    }
    
    await this.productsRepository.delete(id);
  }
}

export { DeleteProductUseCase };