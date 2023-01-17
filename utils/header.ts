export const jsonHeader = (data: any) => {
  return {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    body: data,
  };
};
