import { Request, Response } from "express";
import { container } from "tsyringe";
import { DetailsCategoryUseCase } from "./DetailsCategoryUseCase";


class DetailsProductController {
  async handle(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const detailsCategoryUseCase = container.resolve(DetailsCategoryUseCase);

    const product = await detailsCategoryUseCase.execute(id);

    return response.status(200).json(product);

  }
}

export { DetailsProductController };