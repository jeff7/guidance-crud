import { Edit } from "@refinedev/chakra-ui";
import { ProductForm } from "../../components/forms";

export const ProductEdit = () => (
    <Edit footerButtonProps={{ display: "none" }}>
      <ProductForm />
    </Edit>
);
