import React from "react";
import { Modal, Button, Typography, Stack } from "@mui/joy";

type ConfirmActionModalProps = {
  isOpen: boolean;
  handleOpen(): void;
  handleClose(): void;
  handleConfirm(): void;
};

export const ConfirmActionModal: React.FC<ConfirmActionModalProps> = ({
  handleClose,
  handleConfirm,
  isOpen,
}) => {
  return (
    <div>
      <Modal open={isOpen} onClose={handleClose}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            backgroundColor: "white",
            padding: 24,
            borderRadius: 8,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography level="h4" component="div" sx={{ mb: 2 }}>
            ¿Estás seguro que quieres eliminar este producto?
          </Typography>
          <Typography level="body-md" sx={{ mb: 3 }}>
            Una vez eliminado, no se podrá recuperar
          </Typography>

          {/* Action Buttons */}
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button variant="outlined" color="neutral" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="solid" color="danger" onClick={handleConfirm}>
              Eliminar
            </Button>
          </Stack>
        </div>
      </Modal>
    </div>
  );
};
