import React from "react";
import { FormControl, FormErrorMessage, FormLabel, Select } from "@chakra-ui/react";
import { ISelectInput } from "../../../types";

export const SelectInput: React.FC<ISelectInput> = ({
  name,
  label,
  options,
  isInvalid,
  errorMessage,
  register
}) => {
  return (
    <FormControl mb="3" flex={2} isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      <Select id={name} {...register(name)}>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};
