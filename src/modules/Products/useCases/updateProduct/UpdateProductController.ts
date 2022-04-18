import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateProductUseCase } from "./UpdateProductUseCase";


class UpdateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {

      const { id } = request.params;
      console.log(id)
      const data = request.body;
  
      const updateProductUseCase = container.resolve(UpdateProductUseCase);
  
      await updateProductUseCase.execute(id, data);
  
      return response.status(200).send();
      
    } catch (error) {
      return response.status(400).json({
        error: error.message || "Unexpected error.",
      });
    }
  }
}

export { UpdateProductController };