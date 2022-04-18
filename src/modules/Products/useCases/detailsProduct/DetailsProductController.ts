import { Request, Response } from "express";
import { container } from "tsyringe";
import { DetailsProductUseCase } from "./DetailsProductUseCase";


class DetailsProductController {
  async handle(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const detailsProductsUseCase = container.resolve(DetailsProductUseCase);

    const product = await detailsProductsUseCase.execute(id);

    return response.status(200).json(product);

  }
}

export { DetailsProductController };