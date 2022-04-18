import { Product } from "../entities/Product";

interface ICreateProductDTO {
  name: string;
  description: string;
  price: number;
  category_id: string;
}

interface IUpdateProductDTO {
  name?: string;
  description?: string;
  price?: number;
  category_id?: string;
}

interface IProductsRepository {
  findByName(name: string): Promise<Product>;
  list(): Promise<Product[]>;
  create(product: ICreateProductDTO): Promise<void>;
  findById(id: string): Promise<Product>;
  update(id: string, product: IUpdateProductDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IProductsRepository, ICreateProductDTO, IUpdateProductDTO };