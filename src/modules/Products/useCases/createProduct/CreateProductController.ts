import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  async handle(request: Request, reponse: Response): Promise<Response> {
    try {
    const { name, description, price, category_id } = request.body;

      const createProductUseCase = container.resolve(CreateProductUseCase);

      await createProductUseCase.execute({
        name,
        description,
        category_id,
        price,
      });

      return reponse.status(201).send();
    } catch (err) {
      return reponse.status(400).json({
        error: err.message || "Unexpected error.",
      });
    }
  }
}

export { CreateProductController };