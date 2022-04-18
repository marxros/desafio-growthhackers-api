import { inject, injectable } from "tsyringe";
import { ICreateProductDTO, IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class CreateProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository,
  ) {}

  async execute({ name, description, price, category_id }: ICreateProductDTO): Promise<void> {
    const product = await this.productsRepository.findByName(name);

    if (product) {
      throw new Error("Product already exists");
    }

    this.productsRepository.create({ 
      name, 
      description, 
      price, 
      category_id 
    });
  }
}

export { CreateProductUseCase };