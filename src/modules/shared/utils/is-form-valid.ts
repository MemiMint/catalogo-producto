export const isFormValid = (formData: object): boolean => {
  for (const key in formData) {
    const value = formData[key as keyof typeof formData];

    // Check if the value is a string and empty (after trimming)
    if (typeof value === "string" && (value as string).trim() === "") {
      return false;
    }

    // Check if the value is null or undefined
    if (value === null || value === undefined) {
      return false;
    }
  }

  // If all checks pass, the form is valid
  return true;
};
