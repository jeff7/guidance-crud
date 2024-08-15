import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "@refinedev/react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "../../validators";
import { IProduct } from "../../types";

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
      <FormControl mb="3" isInvalid={!!errors?.name}>
        <FormLabel>Name</FormLabel>
        <Input
          id="name"
          type="text"
          {...register("name", { required: "Name is required" })}
        />
        <FormErrorMessage>{`${errors.name?.message}`}</FormErrorMessage>
      </FormControl>
      <FormControl mb="3" isInvalid={!!errors?.material}>
        <FormLabel>Material</FormLabel>
        <Input
          id="material"
          type="text"
          {...register("material", { required: "Material is required" })}
        />
        <FormErrorMessage>{`${errors.material?.message}`}</FormErrorMessage>
      </FormControl>
      <FormControl mb="3" isInvalid={!!errors?.description}>
        <FormLabel>Description</FormLabel>
        <Textarea
          id="description"
          {...register("description", {
            required: "Description is required",
          })}
        />
        <FormErrorMessage>{`${errors.description?.message}`}</FormErrorMessage>
      </FormControl>
      <FormControl mb="3" isInvalid={!!errors?.price}>
        <FormLabel>Price</FormLabel>
        <Input
          id="price"
          type="number"
          {...register("price", { required: "Price is required" })}
        />
        <FormErrorMessage>{`${errors.price?.message}`}</FormErrorMessage>
      </FormControl>

      <Button mt={4} colorScheme="blue" type="submit" {...saveButtonProps}>
        Save
      </Button>
    </Box>
  );
};
