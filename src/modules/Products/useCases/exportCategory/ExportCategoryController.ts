import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ExportCategoriesUseCase } from "./ExportCategoryUseCase";

class ListCategoriesController {

  async handle(request: Request, response: Response): Promise<Response> {

    const { category } = request.params;

    const exportCategoryUseCase = container.resolve(ExportCategoriesUseCase);

    const products = await exportCategoryUseCase.execute(category);

    return response.json(products);
  }
}

export { ListCategoriesController };
