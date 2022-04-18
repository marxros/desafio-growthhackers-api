import { inject, injectable } from "tsyringe";
import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IRequest {
  name?: string;
  description?: string;
  price: number;
  category_id: string;
}

@injectable()
class UpdateProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute(id: string, data: IRequest): Promise<void> {

    if(!id) {
      throw new Error('Product id is required.');
    }

    const productExists = await this.productsRepository.findById(id);
    console.log('productExists', productExists);

    if (!productExists) {
      throw new Error("Product not found");
    }

    await this.productsRepository.update(id, data);
  }
}

export { UpdateProductUseCase };