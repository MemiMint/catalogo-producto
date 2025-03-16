import { FC } from "react";
import { Box } from "@mui/joy";
import { Product } from "../../../shared/types";
import { ProductCard } from "../ProductCard";

type ProductCardListProps = {
  products: Product[];
};

export const ProductList: FC<ProductCardListProps> = (props) => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      gap={2}
      flexWrap="wrap"
      sx={{ overflowY: "auto" }}
    >
      {props.products.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </Box>
  );
};
