import { useEffect, useState } from "react";
import { useSuccessModal } from "../../shared/components/feedback/SuccessModal/hook";
import { getProduct } from "../../http/api/services/get-product";
import { urlToFile } from "../../shared/utils/url-to-file";
import { updateProduct } from "../../http/api/services/update-product";
import { deleteProduct } from "../../http/api/services/delete-product";
import { useConfirmModal } from "../../shared/components/feedback/ConfirmModal/hook";

type UpdateProductState = {
  imageUrl: File | null;
  name: string;
  description: string;
  price: string;
  stock: string;
};

export const useUpdateProduct = (pid: string) => {
  const [formData, setFormData] = useState<UpdateProductState>({
    imageUrl: null,
    description: "",
    name: "",
    price: "",
    stock: "",
  });

  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalMessage, setModalMessage] = useState<string>("");

  const successModal = useSuccessModal();
  const confirmModal = useConfirmModal();

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

  const onFetchProduct = async (): Promise<void> => {
    const product = await getProduct(parseInt(pid));

    if (!product) {
      alert("product no encontrado");
      return;
    }

    const image: File = await urlToFile(product.imageUrl, product.imageUrl);

    setFormData({
      imageUrl: image,
      name: product.name,
      description: product.description,
      price: String(product.price),
      stock: String(product.stock),
    });
  };

  const onSubmit = async () => {
    const fData = new FormData();

    const file = formData.imageUrl as File;

    fData.append("file", file);
    fData.append("name", formData.name);
    fData.append("description", formData.description);
    fData.append("price", formData.price);
    fData.append("stock", formData.stock);

    const updatedProduct = await updateProduct(
      parseInt(pid),
      file,
      fData.get("name")!.toString(),
      fData.get("description")!.toString(),
      fData.get("price")!.toString(),
      fData.get("stock")!.toString()
    );

    if (!updatedProduct) {
      alert("No se puedo actualizar el producto");

      return;
    }

    setModalTitle("Actualizado!");
    setModalMessage("El producto ha sido actualizado");

    successModal.handleOpen();
  };

  const onDeleteProduct = async () => {
    const deletedProduct = await deleteProduct(parseInt(pid));

    if (!deletedProduct) {
      alert("No se pudo eliminar el producto");

      return;
    }

    setModalTitle("Producto eliminado!");
    setModalMessage("El producto Ha sido Eliminado");
  };

  useEffect(() => {
    onFetchProduct();
  }, []);

  return {
    modalMessage,
    modalTitle,
    formData,
    handleChange,
    handleFileUpload,
    confirmModal,
    successModal,
    onSubmit,
    onDeleteProduct,
  };
};
