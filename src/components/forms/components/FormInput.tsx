import React from "react";
import { FormControl, FormErrorMessage, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Radio, RadioGroup, Stack, Textarea,  } from "@chakra-ui/react";
import { IFormInput, ITypeInput } from "../../../types";

export const FormInput: React.FC<IFormInput> = ({
  name,
  label,
  isInvalid,
  errorMessage,
  type,
  flex = 1,
  register
}) => {
  return (
    <FormControl mb="3" isInvalid={isInvalid} flex={flex}>
      <FormLabel>{label}</FormLabel>

      {(ITypeInput.text == type || ITypeInput.date == type) && (
        <Input id={name} type={type} {...register(name)} />
      )}

      {ITypeInput.number == type && (
        <NumberInput id={name} defaultValue={0} min={0} max={100}>
          <NumberInputField {...register(name)} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      )}

      {ITypeInput.radio == type && (
        <RadioGroup id={name}>
          <Stack direction={"row"}>
            <Radio {...register(name)} value="Novo">
              Novo
            </Radio>
            <Radio {...register(name)} value="Usado">
              Usado
            </Radio>
            <Radio {...register(name)} value="Recondicionado">
              Recondicionado
            </Radio>
          </Stack>
        </RadioGroup>
      )}

      {ITypeInput.textarea == type && (
        <Textarea id={name} {...register(name)} />
      )}

      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};
