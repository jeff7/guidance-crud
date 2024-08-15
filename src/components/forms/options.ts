import { IOptions } from "../../types";

export const statusAvailabilityOptions: IOptions[] = [
  { value: "", label: "Selecione o status" },
  { value: "Em estoque", label: "Em estoque" },
  { value: "Fora de estoque", label: "Fora de estoque" },
  { value: "Em preparação", label: "Em preparação" },
];

export const supplierOptions: IOptions[] = [
  { value: "", label: "Selecione o fornecedor" },
  { value: "Fornecedor 1", label: "Fornecedor 1" },
  { value: "Fornecedor 2", label: "Fornecedor 2" },
  { value: "Fornecedor 3", label: "Fornecedor 3" },
];

export const categoryOptions: IOptions[] = [
  { value: "", label: "Selecione a categoria" },
  { value: "Eletronicos", label: "Eletronicos" },
  { value: "Roupas", label: "Roupas" },
  { value: "Alimentos", label: "Alimentos" },
];
