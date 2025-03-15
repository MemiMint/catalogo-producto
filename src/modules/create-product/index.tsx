import * as React from "react";
import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Stack,
} from "@mui/joy";

const Page: React.FC = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.nombre ||
      !formData.descripcion ||
      !formData.precio ||
      !formData.stock
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    console.log("Product submitted:", formData);
    alert("Producto agregado con éxito");
  };

  return (
    <Container sx={{ maxWidth: 500, mt: 4 }}>
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography level="h2">Agregar Producto</Typography>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        {/* Nombre */}
        <FormControl required>
          <FormLabel>Nombre</FormLabel>
          <Input
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre del producto"
          />
        </FormControl>

        {/* Descripción */}
        <FormControl required>
          <FormLabel>Descripción</FormLabel>
          <Textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Descripción del producto"
            minRows={3}
          />
        </FormControl>

        {/* Precio */}
        <FormControl required>
          <FormLabel>Precio</FormLabel>
          <Input
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            placeholder="Precio en USD"
          />
        </FormControl>

        {/* Stock */}
        <FormControl required>
          <FormLabel>Stock</FormLabel>
          <Input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Cantidad en stock"
          />
        </FormControl>

        {/* Submit Button */}
        <Stack direction="row" justifyContent="center">
          <Button type="submit" variant="solid" color="primary" size="lg">
            Guardar Producto
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Page;
