import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {

  async handle(request: Request, response: Response): Promise<Response> {

    const { category } = request.params;
    const products = request.body;

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    await importCategoryUseCase.execute(category, products);

    return response.json(products);
  }
}

export { ImportCategoryController };
