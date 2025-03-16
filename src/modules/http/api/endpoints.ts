type ProductRoutes = {
  getProducts: string;
  getProductById: string;
  createProduct: string;
  updateProduct: string;
  deleteProduct: string;
  searchProduct: string;
};

export const PRODUCTS_ROUTES: ProductRoutes = {
  getProducts: "/products",
  getProductById: "/product",
  createProduct: "/product",
  deleteProduct: "/product",
  updateProduct: "/product",
  searchProduct: "/products/search",
};
