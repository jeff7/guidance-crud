import { Edit, Layout } from "@refinedev/chakra-ui";
import { ProductForm } from "../../components/forms";

export const ProductEdit = () => (
  <Layout>
    <Edit footerButtonProps={{ display: "none" }}>
      <ProductForm />
    </Edit>
  </Layout>
);
