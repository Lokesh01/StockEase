"use client";

import { Input } from "@/components/ui/input";
import {
  ColumnDef,
  ColumnFiltersState,
  FilterFn,
  filterFns,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import StatusDropdown, { Status } from "../AppTable/dropdowns/StatusDropdown";
import CategoriesDropdown from "../AppTable/dropdowns/CategoriesDropdown";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export interface PaginationType {
  pageIndex: number;
  pageSize: number;
}
// Define custom filter types
declare module "@tanstack/table-core" {
  interface FilterFns {
    multiSelect: FilterFn<unknown>;
  }
}

// define the custom filter function
const multiSelectFilter: FilterFn<unknown> = (
  row,
  columnId,
  filterValue: string[]
) => {
  const rowValue = (row.getValue(columnId) as string).toLowerCase();
  const lowerCaseFilterValues = filterValue.map((val) => val.toLowerCase());
  return filterValue.length === 0 || lowerCaseFilterValues.includes(rowValue);
};
console.log("multiSelectFilter", multiSelectFilter);
const ProductTable = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
  const [pagination, setPagination] = useState<PaginationType>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<Status[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  console.log(selectedCategories);

  useEffect(() => {
    setColumnFilters((prev) => {
      // remove both status and category filters
      const baseFilters = prev.filter(
        (filter) => filter.id !== "status" && filter.id !== "category"
      );
      const newFilters = [...baseFilters];

      // add status filter if there are selected statuses
      if (selectedStatuses.length > 0) {
        newFilters.push({ id: "status", value: selectedStatuses });
      }

      //add category filter if there are selected categories
      if (selectedCategories.length > 0) {
        newFilters.push({ id: "category", value: selectedCategories });
      }

      console.log("new column filters:", newFilters);
      return newFilters;
    });

    // set initial sorting for the "createdAt" column
    setSorting([{ id: "createdAt", desc: true }]);
  }, [selectedStatuses, selectedCategories]);

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      sorting,
      columnFilters,
    },
    filterFns: {
      multiSelect: multiSelectFilter,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <Input
            // value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            placeholder="Search by name..."
            className="max-w-sm h-10"
          />

          <div className="flex items-center gap-4">
            <StatusDropdown
              selectedStatuses={selectedStatuses}
              setSelectedStatuses={setSelectedStatuses}
            />
            <CategoriesDropdown
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
