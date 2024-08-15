import * as yup from "yup";

export const productSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome do produto é obrigatório")
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(150, "Nome não pode ter mais de 150 caracteres"),

  description: yup
    .string()
    .max(355, "Descrição não pode ter mais de 355 caracteres")
    .optional(),

  price: yup
    .number()
    .required("Preço é obrigatório")
    .positive("Preço deve ser maior que 0.01")
    .min(0.01, "Preço mínimo é 0.01"),

  quantityStock: yup
    .number()
    .required("Quantidade em estoque é obrigatória")
    .integer("Quantidade deve ser um número inteiro")
    .min(0, "Quantidade não pode ser negativa"),

  category: yup
    .string()
    .required("Categoria é obrigatória")
    .oneOf(["Eletronicos", "Roupas", "Alimentos"], "Categoria inválida"),

  validityDate: yup
    .date()
    .nullable()
    .optional()
    .min(new Date(), "Data de validade deve ser no futuro"),

  weight: yup
    .number()
    .positive("Peso deve ser maior que 0")
    .nullable()
    .optional(),

  height: yup
    .number()
    .positive("Altura deve ser maior que 0")
    .nullable()
    .optional(),

  length: yup
    .number()
    .positive("Comprimento deve ser maior que 0")
    .nullable()
    .optional(),

  width: yup
    .number()
    .positive("Largura deve ser maior que 0")
    .nullable()
    .optional(),

  statusAvailability: yup
    .string()
    .required("Status de disponibilidade é obrigatório")
    .oneOf(["Em estoque", "Fora de estoque", "Em preparação"], "Status inválido"),

  discount: yup
    .number()
    .nullable()
    .optional()
    .min(0, "Desconto não pode ser negativo")
    .max(100, "Desconto não pode ser maior que 100%"),

  supplier: yup
    .string()
    .required("Fornecedor é obrigatório")
    .oneOf(
      ["Fornecedor 1", "Fornecedor 2", "Fornecedor 3"],
      "Fornecedor inválido"
    ),

  guarantee: yup
    .number()
    .integer("Garantia deve ser um número inteiro")
    .nullable()
    .optional()
    .min(0, "Garantia não pode ser negativa"),

  condition: yup
    .string()
    .required("Condição do produto é obrigatória")
    .oneOf(["Novo", "Usado", "Recondicionado"], "Condição inválida"),
}) as yup.AnyObjectSchema;

