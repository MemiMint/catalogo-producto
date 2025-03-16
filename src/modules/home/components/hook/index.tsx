import { useEffect, useState } from "react";
import { Product } from "../../../shared/types";
import { getAllProducts } from "../../../http/api/services/get-products";
import { searchProducts } from "../../../http/api/services/search-products";
import { useLoading } from "../../../shared/hooks/useLoading";

export const useHome = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const { loading, toggleLoading } = useLoading();

  const onSearch = async (search: string) => {
    toggleLoading(true);

    try {
      const response = await searchProducts(search);

      console.log(response);

      setProducts(response);
    } catch (error) {
      console.error(error);
      alert("Ocurrio un error al buscar los productos");
    } finally {
      toggleLoading(false);
    }
  };

  const onFetchProducts = async () => {
    toggleLoading(true); // Set loading to true before fetching products.

    try {
      const response = await getAllProducts();

      if (!response) {
        alert("No hay productos");
        return; // Early return if no products are found.
      }

      setProducts(response);
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("Ocurrio un error al obtener los productos.");
    } finally {
      toggleLoading(false); // Ensure loading is set to false after fetching completes (success or error).
    }
  };

  useEffect(() => {
    onFetchProducts();
  }, []);

  return {
    loading,
    products,
    onSearch,
  };
};
