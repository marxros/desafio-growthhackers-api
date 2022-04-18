import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteProductUseCase } from "./DeleteProductUseCase";


class DeleteProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
  
      const deleteCategoryUseCase = container.resolve(DeleteProductUseCase);
  
      await deleteCategoryUseCase.execute(id);
  
      return response.status(200).send();
      
    } catch (error) {
      return response.status(400).json({
        error: error.message || "Unexpected error.",
      });
    }
  }

}

export { DeleteProductController };