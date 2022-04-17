import { Router } from 'express';	
import { categoriesRoutes } from './categories.router';

const router = Router();

router.use('/categories',categoriesRoutes);



export { router };