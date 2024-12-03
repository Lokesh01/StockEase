import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { LucideGitPullRequestDraft } from "lucide-react";
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { FaCheck, FaInbox } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export type Status = {
  value: string;
  label: string;
  icon: ReactNode;
};

type StatusDropdownProps = {
  selectedStatuses: Status[];
  setSelectedStatuses: Dispatch<SetStateAction<Status[]>>;
};

const statuses: Status[] = [
  { value: "Published", label: "Published", icon: <FaCheck /> },
  { value: "Inactive", label: "Inactive", icon: <IoClose /> },
  { value: "Draft", label: "Draft", icon: <FaInbox /> },
];
const StatusDropdown = ({
  selectedStatuses,
  setSelectedStatuses,
}: StatusDropdownProps) => {
  const [open, setOpen] = useState(false);

  const returnColor = (status: string) => {
    switch (status) {
      case "Published":
        return "text-green-600 bg-green-100";
      case "Inactive":
        return "text-red-600 bg-red-100";
      case "Draft":
        return "text-gray-600 bg-gray-100";
      default:
        return "";
    }
  };

  function handleCheckboxChange(value: string) {
    setSelectedStatuses((prev) => {
      const updatedStatuses = prev.includes(value)
        ? prev.filter((status) => status !== value)
        : [...prev, value];

      return updatedStatuses;
    });
  }

  const clearFilters = () => {
    setSelectedStatuses([]);
  };

  return (
    <div className="flex items-center space-x-4 poppins">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="secondary" className="h-10">
            <LucideGitPullRequestDraft />
            Status
          </Button>
        </PopoverTrigger>

        <PopoverContent className="p-0 w-48 poppins">
          <Command className="p-1">
            <CommandList>
              <CommandGroup>
                {statuses.map((status) => (
                  <CommandItem
                    className="h-10 mb-2 flex"
                    key={status.value}
                    value={status.value}
                    onClick={() => handleCheckboxChange(status.value)}
                  >
                    <Checkbox
                      checked={selectedStatuses?.includes(status.value)}
                      onCheckedChange={() => handleCheckboxChange(status.value)}
                      className="size-4 rounded-[4px] mr-2"
                    />
                    <div
                      className={`flex items-center gap-1 ${returnColor(
                        status.value
                      )} p-1 rounded-lg px-4 text-[13px]`}
                    >
                      {status.icon}
                      {status.label}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>

            <div className="flex flex-col gap-2 text-[23px]">
              <Separator />
              <Button
                variant="ghost"
                className="text-[12px] mb-1"
                onClick={clearFilters}
              >
                Clear All
              </Button>
            </div>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default StatusDropdown;
