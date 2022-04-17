import { Router } from 'express';
import { CreateCategoryController } from '../modules/Products/useCases/createCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/Products/useCases/listCategories/ListCategoriesController';
import { UpdateCategoryController } from '../modules/Products/useCases/updateCategory/UpdateCategoryController';
import { DeleteCategoryController } from '../modules/Products/useCases/deleteCategory/DeleteCategoryController';

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);
categoriesRoutes.get('/', listCategoriesController.handle);
categoriesRoutes.put('/', updateCategoryController.handle);
categoriesRoutes.delete('/:id', deleteCategoryController.handle);

export { categoriesRoutes };