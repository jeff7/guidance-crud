import React from "react";
import { useTable } from "@refinedev/react-table";
import { List } from "@refinedev/chakra-ui";

import { Table, TableContainer } from "@chakra-ui/react";
import { dinamicsColumns } from "./columns";
import { HeaderTable } from "./header";
import { BodyTable } from "./body";
import { Pagination } from "../pagination";

export const ProductTable = () => {
  const columns = React.useMemo(() => dinamicsColumns, []);

  const {
    getHeaderGroups,
    getRowModel,
    refineCore: { setCurrent, pageCount, current },
  } = useTable({
    columns,
    refineCoreProps: {
      initialSorter: [
        {
          field: "id",
          order: "desc",
        },
      ],
    },
  });

  return (
    <List>
      <TableContainer whiteSpace="pre-line">
        <Table variant="simple">
          <HeaderTable headerGroups={getHeaderGroups()} />
          <BodyTable rowModels={getRowModel().rows} />
        </Table>
      </TableContainer>
      <Pagination
        current={current}
        pageCount={pageCount}
        setCurrent={setCurrent}
      />
    </List>
  );
};
