import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ExportCategoryUseCase } from "./ExportCategoryUseCase";

class ExportCategoryController {

  async handle(request: Request, response: Response): Promise<Response> {

    const { category } = request.params;

    const exportCategoryUseCase = container.resolve(ExportCategoryUseCase);

    const products = await exportCategoryUseCase.execute(category);

    return response.json(products);
  }
}

export { ExportCategoryController };
