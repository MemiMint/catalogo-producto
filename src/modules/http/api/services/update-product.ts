import { getAxios } from "../../axios";
import { PRODUCTS_ROUTES } from "../../api/endpoints";
import { Product } from "../../../shared/types";

type UpdateProductBody = {
  file: File;
} & Partial<Product>;

export const updateProduct = async (
  id: number,
  file: File,
  name: string,
  description: string,
  price: string,
  stock: string
): Promise<Product | null> => {
  try {
    const response = await getAxios<{ id: number }, UpdateProductBody>(
      PRODUCTS_ROUTES.updateProduct,
      "PUT",
      "multipart/form-data",
      {
        id: id,
      },
      {
        file: file,
        name: name,
        description: description,
        price: parseInt(price),
        stock: parseInt(stock),
      }
    );

    const updatedProduct = await response.data;

    if (!updatedProduct) return null;

    return updatedProduct;
  } catch (error) {
    console.error(error);

    return null;
  }
};
