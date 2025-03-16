import React from "react";
import { Modal, ModalDialog, Typography, Button, Stack } from "@mui/joy";
import { useNavigate } from "react-router";

type SuccessModalProps = {
  title: string;
  message: string;
  isOpen: boolean;
  handleOpen(): void;
  handleClose(): void;
};

export const SuccessModal: React.FC<SuccessModalProps> = (props) => {
  const navigate = useNavigate();

  return (
    <Modal open={props.isOpen} onClose={props.handleClose}>
      <ModalDialog
        sx={{
          maxWidth: 400,
          margin: "auto",
          padding: 3,
          textAlign: "center",
        }}
      >
        {/* Success Icon (You can replace this with an actual icon) */}
        <Typography
          level="h2"
          component="div"
          sx={{ color: "success.500", mb: 2 }}
        >
          ✅
        </Typography>

        {/* Success Message */}
        <Typography level="h4" component="div" sx={{ mb: 2 }}>
          {props.title}
        </Typography>
        <Typography level="body-md" sx={{ mb: 3 }}>
          {props.message}
        </Typography>

        {/* Close Button */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="solid" color="primary" onClick={() => navigate("/")}>
            Continar
          </Button>
        </Stack>
      </ModalDialog>
    </Modal>
  );
};
