import { Box, Button, Input, Typography } from "@mui/joy";
import { ShoppingBag, Search } from "lucide-react";
import { ProductCard } from "./components/ProductCard";
import { Product } from "../shared/types";

const Page = () => {
  const products: Product[] = [
    {
      id: "0",
      image: "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SL1500_.jpg",
      name: "Apple MacBook Air M2",
      description:
        "Laptop ultradelgada con chip M2, pantalla de 13.6 pulgadas y 8GB de RAM.",
      price: 1199.99,
      stock: "1",
    },
    {
      id: "1",
      image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg",
      name: "Samsung Galaxy S23 Ultra",
      description:
        "Smartphone de alta gama con pantalla Dynamic AMOLED de 6.8 pulgadas y S Pen.",
      price: 999.99,
      stock: "1",
    },
    {
      id: "3",
      image: "https://m.media-amazon.com/images/I/71Q5sdPHD-L._AC_SL1500_.jpg",
      name: "Sony WH-1000XM5",
      description:
        "Auriculares inalámbricos con cancelación de ruido y 30 horas de batería.",
      price: 399.99,
      stock: "1",
    },
    {
      id: "4",
      image: "https://m.media-amazon.com/images/I/61gjJX8hXlL._AC_SL1500_.jpg",
      name: "Nintendo Switch OLED",
      description:
        "Consola híbrida con pantalla OLED de 7 pulgadas y almacenamiento de 64GB.",
      price: 349.99,
      stock: "1",
    },
    {
      id: "5",
      image: "https://m.media-amazon.com/images/I/81t6Av5DvXL._AC_SL1500_.jpg",
      name: "Logitech MX Master 3S",
      description: "Ratón ergonómico con sensor de 8000 DPI y carga USB-C.",
      price: 99.99,
      stock: "1",
    },
    {
      id: "4",
      image: "https://m.media-amazon.com/images/I/61gjJX8hXlL._AC_SL1500_.jpg",
      name: "Nintendo Switch OLED",
      description:
        "Consola híbrida con pantalla OLED de 7 pulgadas y almacenamiento de 64GB.",
      price: 349.99,
      stock: "1",
    },
    {
      id: "5",
      image: "https://m.media-amazon.com/images/I/81t6Av5DvXL._AC_SL1500_.jpg",
      name: "Logitech MX Master 3S",
      description: "Ratón ergonómico con sensor de 8000 DPI y carga USB-C.",
      price: 99.99,
      stock: "1",
    },
    {
      id: "4",
      image: "https://m.media-amazon.com/images/I/61gjJX8hXlL._AC_SL1500_.jpg",
      name: "Nintendo Switch OLED",
      description:
        "Consola híbrida con pantalla OLED de 7 pulgadas y almacenamiento de 64GB.",
      price: 349.99,
      stock: "1",
    },
    {
      id: "5",
      image: "https://m.media-amazon.com/images/I/81t6Av5DvXL._AC_SL1500_.jpg",
      name: "Logitech MX Master 3S",
      description: "Ratón ergonómico con sensor de 8000 DPI y carga USB-C.",
      price: 99.99,
      stock: "1",
    },
  ];

  return (
    <Box sx={{ height: "100vh", p: 4 }}>
      <Box
        sx={{
          width: "100%",
          borderRadius: 4,
          bgcolor: "white",
          mt: 2,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              p: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "100%",
              bgcolor: "#0073E6",
              color: "white",
            }}
          >
            <ShoppingBag />
          </Box>
          <Typography level="title-lg">Catalogo Productos</Typography>
        </Box>
        <Input
          placeholder="Busca un producto"
          startDecorator={<Search />}
          name="search"
          endDecorator={<Button>Search</Button>}
        />
      </Box>
      <Box
        borderRadius={4}
        width="100%"
        height={500}
        bgcolor="white"
        display="flex"
        flexWrap="wrap"
        p={4}
        mt={5}
        gap={4}
        overflow="scroll"
      >
        {products.map((product, index) => {
          return <ProductCard product={product} key={index} />;
        })}
      </Box>
    </Box>
  );
};

export default Page;
