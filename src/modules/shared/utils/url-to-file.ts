export const urlToFile = async (
  url: string,
  filename: string
): Promise<File> => {
  const response = await fetch(`http://localhost:5026${url}`, {
    method: "GET",
    mode: "no-cors",
  });
  const blob = await response.blob();

  return new File([blob], filename, { type: blob.type });
};
