import { Router } from 'express';	
import { categoriesRoutes } from './categories.router';
import { productsRoutes } from './products.router';

const router = Router();

router.use('/categories',categoriesRoutes);
router.use('/products', productsRoutes);

export { router };