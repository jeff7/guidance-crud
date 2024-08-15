import { Create, Layout } from "@refinedev/chakra-ui";
import { ProductForm } from "../../components/forms";

export const ProductCreate = () => (
  <Layout>
    <Create footerButtonProps={{ display: "none" }}>
      <ProductForm />
    </Create>
  </Layout>
);
