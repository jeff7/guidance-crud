import * as yup from "yup";

export const productSchema = yup.object().shape({
  name: yup.string().required("Name is required Jeff"),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be a positive number"),
}) as yup.AnyObjectSchema;


