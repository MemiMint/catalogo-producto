import * as React from "react";
import { useNavigate } from "react-router";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import { Stack } from "@mui/joy";
import { Product } from "../../../shared/types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card
      variant="outlined"
      sx={{
        width: 220,
        maxHeight: 290,
        borderRadius: "md",
        boxShadow: "sm",
        p: 1,
        cursor: "pointer",
      }}
    >
      <CardOverflow onClick={() => navigate(`/product/${product.id}`)}>
        <AspectRatio ratio="3/2">
          <img src={product.image} alt={product.name} loading="lazy" />
        </AspectRatio>
      </CardOverflow>
      <CardContent onClick={() => navigate(`/product/${product.id}`)}>
        <Typography level="title-sm">
          {product.name} -{" "}
          <Typography level="title-sm" color="primary">
            ${product.price}
          </Typography>
        </Typography>
        <Typography level="body-xs" sx={{ color: "text.secondary", mt: 1 }}>
          {product.description}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography level="body-xs">
            Queda en stock: {product.stock}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
