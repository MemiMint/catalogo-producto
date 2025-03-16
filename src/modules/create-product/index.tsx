import * as React from "react";
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
import { useCreateProduct } from "./hook";
import { SuccessModal } from "../shared/components/feedback/SuccessModal";
import { isFormValid } from "../shared/utils/is-form-valid";

const Page: React.FC = () => {
  const {
    formData,
    modalOpen,
    handleChange,
    handleFileUpload,
    onSubmit,
    handleClose,
    handleOpen,
  } = useCreateProduct();

  return (
    <Container sx={{ maxWidth: 500, mt: 4 }}>
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography level="h2">Agregar Producto</Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* Nombre */}
        <FormControl required>
          <FormLabel>Nombre</FormLabel>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre del producto"
          />
        </FormControl>

        {/* Descripción */}
        <FormControl required>
          <FormLabel>Descripción</FormLabel>
          <Textarea
            name="description"
            value={formData.description}
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
            name="price"
            value={formData.price}
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

        {/* Image Url */}
        <FormControl>
          <FormLabel>Imagen del product</FormLabel>
          <Input type="file" name="imageUrl" onChange={handleFileUpload} />
        </FormControl>

        {/* Submit Button */}
        <Stack direction="row" justifyContent="center">
          <Button
            disabled={!isFormValid(formData)}
            onClick={onSubmit}
            variant="solid"
            color="primary"
            size="lg"
          >
            Guardar Producto
          </Button>
        </Stack>
      </Box>
      <SuccessModal
        title="Producto Registrado!"
        message="Producto creado con exito"
        isOpen={modalOpen}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </Container>
  );
};

export default Page;
