import { getAxios } from "../../axios";
import { PRODUCTS_ROUTES } from "../../api/endpoints";
import { Product } from "../../../shared/types";

export const deleteProduct = async (id: number): Promise<Product | null> => {
  try {
    const response = await getAxios<{ id: number }, void>(
      PRODUCTS_ROUTES.deleteProduct,
      "DELETE",
      undefined,
      {
        id: id,
      }
    );

    const product: Product = await response.data;

    if (product === null) {
      return null;
    }

    return product;
  } catch (error) {
    console.error(error);

    return null;
  }
};
