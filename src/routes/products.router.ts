import { Router } from 'express';
import { CreateProductController } from '../modules/Products/useCases/createProduct/CreateProductController';
import { ListProductsController } from '../modules/Products/useCases/listProducts/ListProductsController';
import { UpdateProductController } from '../modules/Products/useCases/updateProduct/UpdateProductController';
import { DeleteProductController } from '../modules/Products/useCases/deleteProduct/DeleteProductController';
import { DetailsProductController } from '../modules/Products/useCases/detailsProduct/DetailsProductController';

const productsRoutes = Router();

const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();
const detailsProductController = new DetailsProductController();


productsRoutes.post('/', createProductController.handle);
productsRoutes.get('/', listProductsController.handle);
productsRoutes.get('/:id', detailsProductController.handle);
productsRoutes.put('/:id', updateProductController.handle);
productsRoutes.delete('/:id', deleteProductController.handle);

export { productsRoutes };
