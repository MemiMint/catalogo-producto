import { getAxios } from "../../axios";
import { PRODUCTS_ROUTES } from "../../api/endpoints";
import { Product } from "../../../shared/types";

export const getAllProducts = async (): Promise<Product[] | null> => {
  try {
    const response = await getAxios(PRODUCTS_ROUTES.getProducts, "GET");

    const products: Product[] = await response.data;

    return products;
  } catch (error) {
    console.error(error);

    return null;
  }
};
