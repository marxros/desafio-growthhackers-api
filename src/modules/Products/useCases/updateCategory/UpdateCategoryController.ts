import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

class UpdateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = request.body;
  
      const updateCategoryUseCase = container.resolve(UpdateCategoryUseCase);
  
      await updateCategoryUseCase.execute(data);
  
      return response.status(200).send();
      
    } catch (error) {
      return response.status(400).json({
        error: error.message || "Unexpected error.",
      });
    }
  }
}

export { UpdateCategoryController };