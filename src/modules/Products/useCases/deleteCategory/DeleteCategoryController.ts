import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

class DeleteCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
  
      const deleteCategoryUseCase = container.resolve(DeleteCategoryUseCase);
  
      await deleteCategoryUseCase.execute(id);
  
      return response.status(200).send();
      
    } catch (error) {
      return response.status(400).json({
        error: error.message || "Unexpected error.",
      });
    }
  }
}

export { DeleteCategoryController };