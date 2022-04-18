import { getRepository, Repository } from "typeorm";
import { Product } from "../entities/Product";
import { 
  ICreateProductDTO, 
  IProductsRepository, 
  IUpdateProductDTO
} from "./IProductsRepository";

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }
  
  async create({ name, description, category_id, price }: ICreateProductDTO): Promise<void> {
    const product = this.repository.create({
      name,
      description,
      price,
      category_id,
    });

    await this.repository.save(product);
  }

  async list(): Promise<Product[]> {
    const products = await this.repository.find();
    return products;
  }

  async findByName(name: string): Promise<Product> {
    const product = await this.repository.findOne({	where: { name } });
    return product;
  }
  
  async findById(id: string): Promise<Product> {
    const product = await this.repository.findOne({ where: { id } });
    return product;
  }

  async update(id: string, data: IUpdateProductDTO): Promise<void> {
    await this.repository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { ProductsRepository };