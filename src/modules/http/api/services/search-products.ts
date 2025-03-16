import { getAxios } from "../../axios";
import { PRODUCTS_ROUTES } from "../../api/endpoints";
import { Product } from "../../../shared/types";

export const searchProducts = async (search: string): Promise<Product[]> => {
  try {
    const response = await getAxios<null, { search: string }>(
      PRODUCTS_ROUTES.searchProduct,
      "POST",
      undefined,
      undefined,
      {
        search,
      }
    );

    const products: Product[] = await response.data;

    return products;
  } catch (error) {
    console.error(error);

    return [];
  }
};
