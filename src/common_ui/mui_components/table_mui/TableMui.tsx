import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import { useTable } from "../../../hooks/use_table/useTable";

interface Column {
  id: string;
  label: string;
  align?: "left" | "right" | "center";
  width?: string | number;
}

interface TableMuiProps<T> {
  columns: Column[];
  rows: T[];
  height?: string;
  className?: string;
}

export default function TableMui<T extends Record<string, unknown>>({
  columns,
  rows,
  height,
  className,
}: TableMuiProps<T>) {
  const {
    orderBy,
    orderDirection,
    page,
    totalPages,
    paginatedRows,
    handleSort,
    handlePageChange,
    handleSelectPage,
  } = useTable<T>(rows, 20);

  return (
    <Box>
      {/* TABLE */}
      <TableContainer
        className={className}
        sx={{
          height: height || "calc(100vh - 188px)",
        }}
      >
        <Table stickyHeader>
          {/* HEADER */}
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{ width: column.width }}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? orderDirection : "asc"}
                    onClick={() => handleSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* BODY */}
          <TableBody>
            {paginatedRows.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    {row[column.id] as React.ReactNode}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* PAGINATION */}
      <Box className="pagination-wrapper">
        <Box sx={{ width: "20px" }} />
        <Stack>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            showFirstButton
            showLastButton
            renderItem={(item) => (
              <PaginationItem
                slots={{
                  first: KeyboardDoubleArrowLeftOutlinedIcon,
                  last: KeyboardDoubleArrowRightOutlinedIcon,
                  previous: KeyboardArrowLeftOutlinedIcon,
                  next: KeyboardArrowRightOutlinedIcon,
                }}
                {...item}
              />
            )}
          />
        </Stack>

        {/* PAGE SELECT */}
        <Box className="pages-list-wrapper">
          Page
          <Select
            size="small"
            value={page}
            onChange={handleSelectPage}
            sx={{ padding: 0 }}
          >
            {[...Array(totalPages)].map((_, index) => (
              <MenuItem key={index + 1} value={index + 1}>
                {index + 1}
              </MenuItem>
            ))}
          </Select>
          of {totalPages}
        </Box>
      </Box>
    </Box>
  );
}
