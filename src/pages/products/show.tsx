import { useShow } from "@refinedev/core";
import { Show } from "@refinedev/chakra-ui";

import { Flex } from "@chakra-ui/react";
import { DividerForm } from "../../components/forms";
import { InputView } from "../../components/InputView/InputView";

export const ProductShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const formatedDate = () => {
    if(record?.validityDate) return record?.validityDate.split('T')[0];
  }

  return (
    <Show isLoading={isLoading}>
      <Flex gap={4}>
        <InputView placeholder="Código" value={record?.id} />
        <InputView placeholder="Nome" value={record?.name} />
        <InputView placeholder="Categoria" value={record?.category} />
        <InputView placeholder="Preço" value={record?.price} />
        <InputView placeholder="Desconto (%)" value={record?.discount} />
      </Flex>

      <DividerForm label="Disponibilidade" />

      <Flex gap={4}>
        <InputView
          placeholder="Quantidade em Estoque"
          value={record?.quantityStock}
        />
        <InputView
          placeholder="Status de Disponibilidade"
          value={record?.statusAvailability}
        />
        <InputView placeholder="Fornecedor" value={record?.supplier} />
        <InputView placeholder="Garantia (em dias)" value={record?.guarantee} />
      </Flex>

      <DividerForm label="Características" />

      <Flex gap={4}>
        <InputView placeholder="Condição" value={record?.condition} />
        <InputView placeholder="Data de Validade" value={formatedDate()} />
        <InputView placeholder="Peso (kg)" value={record?.weight} />
        <InputView placeholder="Altura (cm)" value={record?.height} />
        <InputView placeholder="Comprimento (cm)" value={record?.length} />
        <InputView placeholder="Largura (cm)" value={record?.width} />
      </Flex>

      <Flex gap={4}>
        <InputView
          textarea
          placeholder="Descrição"
          value={record?.description}
        />
      </Flex>
    </Show>
  );
};
