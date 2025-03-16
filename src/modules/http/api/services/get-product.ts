import { getAxios } from "../../axios";
import { PRODUCTS_ROUTES } from "../../api/endpoints";
import { Product } from "../../../shared/types";

export const getProduct = async (id: number): Promise<Product | null> => {
  try {
    const response = await getAxios<{ id: number }, void>(
      PRODUCTS_ROUTES.getProductById,
      "GET",
      undefined,
      {
        id: id,
      }
    );

    const product: Product = await response.data;

    return product;
  } catch (error) {
    console.error(error);

    return null;
  }
};
