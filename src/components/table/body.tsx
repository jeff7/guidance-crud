import { flexRender } from "@tanstack/react-table";
import {
  Tr,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { IBody } from "../../types";

export const BodyTable = ({ rowModels }: IBody) => {
  return (
    <Tbody>
      {rowModels.map((row) => (
        <Tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <Td key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  );
};
