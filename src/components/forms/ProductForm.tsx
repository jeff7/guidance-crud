import {
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useForm } from "@refinedev/react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "../../validators";
import { IProduct } from "../../types";
import { SelectInput } from "./components/SelectInput";
import { DividerForm } from "./components/DividerForm";
import { categoryOptions, statusAvailabilityOptions, supplierOptions } from "./options";
import { FormInput } from "./components/FormInput";

export const ProductForm = () => {
  const {
    saveButtonProps,
    register,
    formState: { errors },
    ...restFormProps
  } = useForm<IProduct>({
    resolver: yupResolver(productSchema),
  });

  return (
    <Box as="form" {...restFormProps}>
      <Flex gap={4}>
        <FormInput
          label="Nome do Produto"
          isInvalid={!!errors?.name}
          errorMessage={`${errors.name?.message}`}
          name="name"
          register={register}
          type="text"
          flex={4}
        />

        <SelectInput
          isInvalid={!!errors?.category}
          errorMessage={`${errors.category?.message}`}
          label="Categoria"
          name="category"
          options={categoryOptions}
          register={register}
        />

        <FormInput
          label="Preço"
          isInvalid={!!errors?.price}
          errorMessage={`${errors.price?.message}`}
          name="price"
          register={register}
          type="number"
        />

        <FormInput
          label="Desconto (%)"
          isInvalid={!!errors?.discount}
          errorMessage={`${errors.discount?.message}`}
          name="discount"
          register={register}
          type="number"
        />
      </Flex>

      <DividerForm label="Disponibilidade" />

      <Flex gap={8}>
        <SelectInput
          isInvalid={!!errors?.statusAvailability}
          errorMessage={`${errors.statusAvailability?.message}`}
          label="Status de Disponibilidade"
          name="statusAvailability"
          options={statusAvailabilityOptions}
          register={register}
        />

        <FormInput
          label="Quantidade em Estoque"
          isInvalid={!!errors?.quantityStock}
          errorMessage={`${errors.quantityStock?.message}`}
          name="quantityStock"
          register={register}
          type="number"
          flex={2}
        />

        <SelectInput
          isInvalid={!!errors?.supplier}
          errorMessage={`${errors.supplier?.message}`}
          label="Fornecedor"
          name="supplier"
          options={supplierOptions}
          register={register}
        />

        <FormInput
          label="Garantia (em dias)"
          isInvalid={!!errors?.guarantee}
          errorMessage={`${errors.guarantee?.message}`}
          name="guarantee"
          register={register}
          type="number"
          flex={2}
        />
      </Flex>

      <DividerForm label="Características" />

      <Flex gap={4}>
        <FormInput
          label="Condição"
          isInvalid={!!errors?.condition}
          errorMessage={`${errors.condition?.message}`}
          name="condition"
          register={register}
          type="radio"
        />

        <FormInput
          label="Data de Validade"
          isInvalid={!!errors?.validityDate}
          errorMessage={`${errors.validityDate?.message}`}
          name="validityDate"
          register={register}
          type="date"
        />

        <FormInput
          label="Peso (kg)"
          isInvalid={!!errors?.weight}
          errorMessage={`${errors.weight?.message}`}
          name="weight"
          register={register}
          type="number"
        />

        <FormInput
          label="Altura (cm)"
          isInvalid={!!errors?.height}
          errorMessage={`${errors.height?.message}`}
          name="height"
          register={register}
          type="number"
        />

        <FormInput
          label="Comprimento (cm)"
          isInvalid={!!errors?.length}
          errorMessage={`${errors.length?.message}`}
          name="length"
          register={register}
          type="number"
        />

        <FormInput
          label="Largura (cm)"
          isInvalid={!!errors?.width}
          errorMessage={`${errors.width?.message}`}
          name="width"
          register={register}
          type="number"
        />
      </Flex>

      <Flex>
        <FormInput
          label="Descrição"
          isInvalid={!!errors?.description}
          errorMessage={`${errors.description?.message}`}
          name="description"
          register={register}
          type="textarea"
        />
      </Flex>

      <Flex justifyContent={"flex-end"}>
        <Button mt={4} colorScheme="blue" type="submit" {...saveButtonProps}>
          Salvar
        </Button>
      </Flex>
    </Box>
  );
};
