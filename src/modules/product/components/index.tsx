import { FC } from "react";
import { Box, Typography, Button, AspectRatio } from "@mui/joy";
import { Product } from "../../shared/types";
import { useNavigate } from "react-router";

export const CardDetail: FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Product Image */}
      <Box sx={{ flex: 1, maxWidth: 350 }}>
        <AspectRatio ratio="3/4">
          <img
            src={`http://localhost:5026${product.imageUrl}`}
            alt={product.name}
            loading="lazy"
          />
        </AspectRatio>
      </Box>

      {/* Product Details */}
      <Box
        sx={{
          flex: 1,
          pl: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography level="h2">{product.name}</Typography>
          <Typography level="body-md" sx={{ color: "text.secondary", my: 2 }}>
            {product.description}
          </Typography>
          <Typography level="h3" color="primary">
            ${product.price}
          </Typography>
          <Typography level="body-xs" color="primary">
            Cantidad en stock {product.stock}
          </Typography>
        </Box>

        <Button
          onClick={() => navigate(`/product/${product.id}/edit`)}
          variant="solid"
          color="primary"
          size="lg"
          sx={{ mt: 3 }}
        >
          Editar
        </Button>
      </Box>
    </>
  );
};
