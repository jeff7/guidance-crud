import { Create } from "@refinedev/chakra-ui";
import { ProductForm } from "../../components/forms";

export const ProductCreate = () => (
    <Create footerButtonProps={{ display: "none" }}>
      <ProductForm />
    </Create>
);
