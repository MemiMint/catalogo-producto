import { getAxios } from "../../axios";
import { PRODUCTS_ROUTES } from "../../api/endpoints";
import { Product } from "../../../shared/types";

type CreateProductBody = {
  file: File;
} & Partial<Product>;

export const createProduct = async (
  file: File,
  name: string,
  description: string,
  price: number,
  stock: number
): Promise<Product | null> => {
  try {
    const response = await getAxios<void, CreateProductBody>(
      PRODUCTS_ROUTES.getProductById,
      "POST",
      "multipart/form-data",
      undefined,
      {
        file: file,
        name: name,
        description: description,
        price: price,
        stock: stock,
      }
    );

    const product: Product = await response.data;

    return product;
  } catch (error) {
    console.error(error);

    return null;
  }
};
