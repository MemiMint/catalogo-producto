import React, { useState } from "react";
import { useParams } from "react-router";
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
  const { productId } = useParams();

  // State for form inputs
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "10", // Assuming stock, since it's not in the original product structure
  });

  //   if (!productId) {
  //     return (
  //       <Container sx={{ textAlign: "center", mt: 5 }}>
  //         <Typography level="h2">Producto no encontrado</Typography>
  //       </Container>
  //     );
  //   }

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (Save changes)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Product updated:", formData);
    alert("Producto actualizado con éxito");
  };

  // Handle delete
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este producto?"
    );
    if (confirmDelete) {
      console.log(`Producto eliminado`);
      alert("Producto eliminado");
    }
  };

  return (
    <Container sx={{ maxWidth: 500, mt: 4 }}>
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography level="h2">Editar Producto</Typography>
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
          />
        </FormControl>

        {/* Descripción */}
        <FormControl required>
          <FormLabel>Descripción</FormLabel>
          <Textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
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
          />
        </FormControl>

        {/* Buttons */}
        <Stack direction="row" justifyContent="space-between">
          <Button type="submit" variant="solid" color="primary" size="lg">
            Guardar Cambios
          </Button>
          <Button
            variant="soft"
            color="danger"
            size="lg"
            onClick={handleDelete}
          >
            Eliminar
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Page;
