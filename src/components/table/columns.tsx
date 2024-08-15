import { HStack } from "@chakra-ui/react";
import { DeleteButton, EditButton, ShowButton } from "@refinedev/chakra-ui";

export const dinamicsColumns = [
  {
    id: "id",
    header: "ID",
    accessorKey: "id",
  },
  {
    id: "name",
    header: "Nome",
    accessorKey: "name",
    meta: {
      filterOperator: "contains",
    },
  },
  {
    id: "price",
    header: "Preço",
    accessorKey: "price",
  },
  {
    id: "actions",
    header: "Ações",
    accessorKey: "id",
    enableColumnFilter: false,
    enableSorting: false,
    cell: function render({ getValue }) {
      return (
        <HStack>
          <ShowButton hideText size="sm" recordItemId={getValue() as number} />
          <EditButton hideText size="sm" recordItemId={getValue() as number} />
          <DeleteButton
            hideText
            size="sm"
            recordItemId={getValue() as number}
          />
        </HStack>
      );
    },
  },
];
