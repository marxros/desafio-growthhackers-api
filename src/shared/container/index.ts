import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/Products/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/Products/repositories/CategoriesRepository';

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);