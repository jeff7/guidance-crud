import { useShow } from "@refinedev/core";
import {
  Show,
  TextField,
  NumberField,
  MarkdownField,
  Layout,
} from "@refinedev/chakra-ui";

import { Heading } from "@chakra-ui/react";

export const ProductShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Layout>
      <Show isLoading={isLoading}>
        <Heading as="h5" size="sm">
          Id
        </Heading>
        <TextField value={record?.id} />

        <Heading as="h5" size="sm" mt={4}>
          Name
        </Heading>
        <TextField value={record?.name} />

        <Heading as="h5" size="sm" mt={4}>
          Material
        </Heading>
        <TextField value={record?.material} />

        <Heading as="h5" size="sm" mt={4}>
          Description
        </Heading>
        <MarkdownField value={record?.description} />

        <Heading as="h5" size="sm" mt={4}>
          Price
        </Heading>
        <NumberField
          value={record?.price}
          options={{ style: "currency", currency: "USD" }}
        />
      </Show>
    </Layout>
  );
};
