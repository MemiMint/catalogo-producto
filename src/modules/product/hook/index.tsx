import { useState, useEffect } from "react";
import { Product } from "../../shared/types";
import { useLoading } from "../../shared/hooks/useLoading";
import { getProduct } from "../../http/api/services/get-product";

export const useProductDetails = (pid: string) => {
  const [product, setProduct] = useState<Product | null>(null);

  const { loading, toggleLoading } = useLoading();

  const onFetchProduct = async () => {
    toggleLoading(true);

    try {
      const foundProduct: Product | null = await getProduct(parseInt(pid));

      setProduct(foundProduct);
    } catch (error) {
      console.error(error);

      setProduct(null);
    } finally {
      toggleLoading(false);
    }
  };

  useEffect(() => {
    onFetchProduct();
  }, []);

  return {
    loading,
    product,
  };
};
