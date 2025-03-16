import { useState } from "react";

export const useLoading = (loadingFirst: boolean = false) => {
  const [loading, setLoading] = useState<boolean>(loadingFirst);

  const toggleLoading = (isLoading: boolean) => setLoading(isLoading);

  return {
    loading,
    toggleLoading,
  };
};
