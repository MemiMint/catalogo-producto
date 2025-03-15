import * as React from "react";
//import { useParams } from "react-router";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import AspectRatio from "@mui/joy/AspectRatio";
import { Container, Box } from "@mui/joy";
import { Product } from "../shared/types/";

const Page: React.FC = () => {
  //const { pid } = useParams();

  const product: Product = {
    id: "3",
    image: "https://m.media-amazon.com/images/I/71Q5sdPHD-L._AC_SL1500_.jpg",
    name: "Sony WH-1000XM5",
    description:
      "Auriculares inalámbricos con cancelación de ruido y 30 horas de batería.",
    price: 399.99,
    stock: "1",
  };

  if (!product) {
    return <Typography level="h2">Product not found</Typography>;
  }

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 4,
      }}
    >
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "row",
          width: 800,
          p: 2,
          borderRadius: "lg",
          boxShadow: "md",
        }}
      >
        {/* Product Image */}
        <Box sx={{ flex: 1, maxWidth: 350 }}>
          <AspectRatio ratio="3/4">
            <img src={product.image} alt={product.name} loading="lazy" />
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

          <Button variant="solid" color="primary" size="lg" sx={{ mt: 3 }}>
            Editar
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default Page;
