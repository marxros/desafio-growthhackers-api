import { Router } from 'express';
import { CreateCategoryController } from '../modules/Products/useCases/createCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/Products/useCases/listCategories/ListCategoriesController';
import { DetailsProductController } from '../modules/Products/useCases/detailsCategory/DetailsCategoryController';
import { UpdateCategoryController } from '../modules/Products/useCases/updateCategory/UpdateCategoryController';
import { DeleteCategoryController } from '../modules/Products/useCases/deleteCategory/DeleteCategoryController';
import { ExportCategoryController } from '../modules/Products/useCases/exportCategory/ExportCategoryController';
import { ImportCategoryController } from '../modules/Products/useCases/importCategory/ImportCategoryController';

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
// const detailsProductController = new DetailsProductController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();
const exportCategoryController = new ExportCategoryController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);
categoriesRoutes.get('/', listCategoriesController.handle);
categoriesRoutes.get('/:category/export', exportCategoryController.handle);
categoriesRoutes.post('/:category/import', importCategoryController.handle);
categoriesRoutes.put('/:id', updateCategoryController.handle);
categoriesRoutes.delete('/:id', deleteCategoryController.handle);

export { categoriesRoutes };