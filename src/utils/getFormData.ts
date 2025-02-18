export const getFormData = (formData: FormData) => {
  if(!formData) return {};
  const data: { [key: string]: string | File } = {};

  for (let [key, value] of formData) {
    data[key] = value;
  }

  return data;
};
