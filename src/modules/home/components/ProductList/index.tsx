import { FC } from "react";
import { Box, Typography } from "@mui/joy";
import { Product } from "../../../shared/types";
import { ProductCard } from "../ProductCard";

type ProductCardListProps = {
  products: Product[];
};

export const ProductList: FC<ProductCardListProps> = (props) => {
  const { products } = props;

  if (products.length === 0) {
    return (
      <Box
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography level="h4" sx={{ color: "text.secondary" }}>
          No products available.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      gap={2}
      flexWrap="wrap"
      sx={{ overflowY: "auto" }}
    >
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </Box>
  );
};
