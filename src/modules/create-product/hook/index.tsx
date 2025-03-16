import { useState } from "react";
import { Product } from "../../shared/types";
import { createProduct } from "../../http/api/services/create-product";
import { useSuccessModal } from "../../shared/components/feedback/SuccessModal/hook";

type CreateProductState = {
  imageUrl: File | null;
  name: string;
  description: string;
  price: string;
  stock: string;
};

export const useCreateProduct = () => {
  const [formData, setFormData] = useState<CreateProductState>({
    imageUrl: null,
    description: "",
    name: "",
    price: "",
    stock: "",
  });

  const { handleClose, handleOpen, modalOpen } = useSuccessModal();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.item(0);

    if (file) {
      setFormData((prevState) => ({
        ...prevState,
        imageUrl: file,
      }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    const fData = new FormData();

    const file = formData.imageUrl as File;

    fData.set("file", file);
    fData.set("name", formData.name);
    fData.set("description", formData.description);
    fData.set("price", formData.price);
    fData.set("stock", formData.stock);

    const newProduct: Partial<Product> = {
      name: fData.get("name")!.toString(),
      description: fData.get("description")!.toString(),
      price: parseInt(fData.get("price")!.toString()),
      stock: parseInt(fData.get("stock")!.toString()),
    };

    if (!file) return;

    const response = await createProduct(
      fData.get("file") as File,
      newProduct.name!,
      newProduct.description!,
      newProduct.price!,
      newProduct.stock!
    );

    if (response) {
      handleOpen();
    }
  };

  return {
    formData,
    handleChange,
    handleFileUpload,
    handleClose,
    modalOpen,
    handleOpen,
    onSubmit,
  };
};
