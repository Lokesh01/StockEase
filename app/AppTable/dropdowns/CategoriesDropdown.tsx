"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { CommandEmpty } from "cmdk";
import { LucideGitPullRequestDraft } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

type Category = {
  value: string;
  label: string;
};

type CategoriesDropdownProps = {
  selectedCategories: string[];
  setSelectedCategories: Dispatch<SetStateAction<string[]>>;
};

const categories: Category[] = [
  { value: "electronics", label: "Electronics" },
  { value: "furniture", label: "Furniture" },
  { value: "clothing", label: "Clothing" },
  { value: "books", label: "Books" },
  { value: "toys", label: "Toys" },
  { value: "beauty", label: "Beauty" },
  { value: "sports", label: "Sports" },
  { value: "home-decor", label: "Home Decor" },
  { value: "home-appliances", label: "Home Appliances" },
  { value: "others", label: "Others" },
];

const CategoriesDropdown = ({
  selectedCategories,
  setSelectedCategories,
}: CategoriesDropdownProps) => {
  const [open, setOpen] = useState(false);

  const handleCheckboxChange = (value: string) => {
    setSelectedCategories((prev) => {
      const updatedCategories = prev.includes(value)
        ? prev.filter((category) => category !== value)
        : [...prev, value];
      return updatedCategories;
    });
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
  };
  return (
    <div className="flex items-center space-x-4 poppins">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant={"secondary"} className="h-10">
            <LucideGitPullRequestDraft />
            Categories
          </Button>
        </PopoverTrigger>

        <PopoverContent className="p-0 w-56 poppins" side="bottom" align="end">
          <Command className="p-1">
            <CommandInput placeholder="Category" />
            <CommandList>
              <CommandEmpty className="text-slate-500 text-sm text-center p-5">
                No Category Found
              </CommandEmpty>

              <CommandGroup>
                {categories.map((category) => (
                  <CommandItem className="h-9" key={category.value}>
                    <Checkbox
                      checked={selectedCategories.includes(category.value)}
                      onClick={() => handleCheckboxChange(category.value)}
                      className="size-4 rounded-[4px]"
                    />

                    <div
                      className={`flex items-center gap-1 p-1 rounded-lg px-3 text-[14px]`}
                    >
                      {category.label}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>

            <div className="flex flex-col gap-2 text-[23px]">
              <Separator />
              <Button
                onClick={clearAllFilters}
                variant={"ghost"}
                className="text-[12px] mb-1"
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

export default CategoriesDropdown;
