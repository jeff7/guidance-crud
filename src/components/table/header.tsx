import { flexRender } from "@tanstack/react-table";
import {
  Thead,
  Tr,
  Th,
  Text,
} from "@chakra-ui/react";
import { IHead } from "../../types";

export const HeaderTable = ({ headerGroups }: IHead) => {
  return (
    <Thead>
      {headerGroups.map((headerGroup) => (
        <Tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <Th key={header.id}>
              <Text>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </Text>
            </Th>
          ))}
        </Tr>
      ))}
    </Thead>
  );
};
