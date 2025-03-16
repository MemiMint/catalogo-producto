import { useState } from "react";

export const useSuccessModal = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  // Close the modal
  const handleClose = () => {
    setModalOpen(false);
  };

  return {
    modalOpen,
    handleOpen,
    handleClose,
  };
};
