import { UseFormRegister } from "react-hook-form";

export type ISelectInput = {
  name: string;
  errorMessage: string;
  label: string;
  options?: IOptions[];
  isInvalid: boolean;
  register: UseFormRegister<any>;
};

export interface IFormInput extends ISelectInput {
  type: string;
  flex?: number;
}

export type IDivider = {
  label: string;
};

export type IOptions = {
  value: string;
  label: string;
};

export const ITypeInput = {
  text: "text",
  number: "number",
  date: "date",
  radio: "radio",
  textarea: "textarea",
}
