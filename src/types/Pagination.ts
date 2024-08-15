export type IPagination = {
  current: number;
  pageCount: number;
  setCurrent: (page: number) => void;
};
