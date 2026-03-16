import { useState, useMemo } from "react";
import type { SelectChangeEvent } from "@mui/material/Select";

type Order = "asc" | "desc";

export function useTable<T extends Record<string, unknown>>(
  rows: T[],
  rowsPerPage: number = 20,
) {
  const [orderBy, setOrderBy] = useState<keyof T | "">("");
  const [orderDirection, setOrderDirection] = useState<Order>("asc");
  const [page, setPage] = useState<number>(1);

  const totalPages = Math.ceil(rows.length / rowsPerPage);

  const handleSort = (column: keyof T) => {
    const isAsc = orderBy === column && orderDirection === "asc";
    setOrderDirection(isAsc ? "desc" : "asc");
    setOrderBy(column);
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSelectPage = (event: SelectChangeEvent<number>) => {
    setPage(Number(event.target.value));
  };

  const sortedRows = useMemo(() => {
    if (!orderBy) return rows;

    const key = orderBy as keyof T;

    return [...rows].sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];

      if (valueA === valueB) return 0;

      return orderDirection === "asc"
        ? valueA > valueB
          ? 1
          : -1
        : valueA < valueB
          ? 1
          : -1;
    });
  }, [rows, orderBy, orderDirection]);

  const start = (page - 1) * rowsPerPage;

  const paginatedRows = useMemo(() => {
    return sortedRows.slice(start, start + rowsPerPage);
  }, [sortedRows, start, rowsPerPage]);

  return {
    orderBy,
    orderDirection,
    page,
    totalPages,
    paginatedRows,
    handleSort,
    handlePageChange,
    handleSelectPage,
  };
}
