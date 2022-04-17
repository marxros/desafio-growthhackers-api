import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {

  async handle(request: Request, reponse: Response): Promise<Response> {
    try {
    const { name, description } = request.body;

      const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

      await createCategoryUseCase.execute({
        name,
        description
      });

      return reponse.status(201).send();
    } catch (err) {
      return reponse.status(400).json({
        error: err.message || "Unexpected error.",
      });
    }
  }
}


export { CreateCategoryController };