import { HeaderGroup, Row } from "@tanstack/react-table";

export type IHead = {
  headerGroups: HeaderGroup<Record<string, any>>[];
};

type RowsArray = Row<{ [x: string]: any }>[];

export type IBody = {
  rowModels: RowsArray;
};