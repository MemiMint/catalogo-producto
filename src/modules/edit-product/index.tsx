import React from "react";
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
import { useUpdateProduct } from "./hook";
import { ConfirmActionModal } from "../shared/components/feedback/ConfirmModal";
import { SuccessModal } from "../shared/components/feedback/SuccessModal";

const Page: React.FC = () => {
  const { pid } = useParams();

  const {
    formData,
    onSubmit,
    handleChange,
    handleFileUpload,
    onDeleteProduct,
    confirmModal,
    successModal,
  } = useUpdateProduct(pid!);

  return (
    <Container sx={{ maxWidth: 500, mt: 4 }}>
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography level="h2">Editar Producto</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* Nombre */}
        <FormControl required>
          <FormLabel>Nombre</FormLabel>
          <Input name="name" value={formData.name} onChange={handleChange} />
        </FormControl>

        {/* Descripción */}
        <FormControl required>
          <FormLabel>Descripción</FormLabel>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
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

        <FormControl required>
          <FormLabel>Imagen del Producto</FormLabel>
          <Input
            type="file"
            name="imageUrl"
            value={""}
            onChange={handleFileUpload}
          />
          <Typography>{formData.imageUrl?.name}</Typography>
        </FormControl>

        {/* Buttons */}
        <Stack direction="row" justifyContent="space-between">
          <Button onClick={onSubmit} variant="solid" color="primary" size="lg">
            Guardar Cambios
          </Button>
          <Button
            variant="soft"
            color="danger"
            size="lg"
            onClick={confirmModal.handleOpen}
          >
            Eliminar
          </Button>
        </Stack>
      </Box>
      <ConfirmActionModal
        handleOpen={confirmModal.handleOpen}
        isOpen={confirmModal.modalOpen}
        handleClose={confirmModal.handleClose}
        handleConfirm={() => {
          onDeleteProduct();
          confirmModal.handleClose();
          successModal.handleOpen();
        }}
      />
      <SuccessModal
        handleClose={successModal.handleClose}
        handleOpen={successModal.handleOpen}
        isOpen={successModal.modalOpen}
        message="El producto ha sido eliminado"
      />
    </Container>
  );
};

export default Page;
