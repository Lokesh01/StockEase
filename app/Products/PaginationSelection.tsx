"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PaginationType } from "./ProductTable";

const PaginationSelection = ({
  pagination,
  setPagination,
}: {
  pagination: PaginationType;
  setPagination: React.Dispatch<React.SetStateAction<PaginationType>>;
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="text-gray-500 text-sm">Rows per page</div>
        <Select
          value={pagination.pageSize.toString()}
          onValueChange={(value) =>
            setPagination((prev) => ({
              ...prev,
              pageSize: parseInt(value),
            }))
          }
        >
          <SelectTrigger className="border rounded-md px-2 w-14">
            <SelectValue placeholder={pagination.pageSize.toString()} />
          </SelectTrigger>
          <SelectContent>
            {[5, 10, 15, 20, 25, 30].map((size) => (
              <SelectItem key={size} value={size.toString()}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
    </div>
  );
};

export default PaginationSelection;
