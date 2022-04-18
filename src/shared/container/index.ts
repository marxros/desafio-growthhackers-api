import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/Products/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/Products/repositories/CategoriesRepository';
import { IProductsRepository } from '../../modules/Products/repositories/IProductsRepository';
import { ProductsRepository } from '../../modules/Products/repositories/ProductsRepository';

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductsRepository
);