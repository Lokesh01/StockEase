import React from "react";
import { Product } from "./columns";
import { MdContentCopy, MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
type MenuItem = {
  icon: JSX.Element;
  label: string;
  className: string;
  separator?: undefined;
};

const ProductDropdown = ({ row }: { row: Row<Product> }) => {
  // const {setSelectedProduct, setOpenDialog} = useProductStore();

  // const {toast} = useToast();

  const menuItems: MenuItem[] = [
    { icon: <MdContentCopy />, label: "Copy", className: "" },
    { icon: <FaRegEdit />, label: "Edit", className: "" },
    { icon: <MdOutlineDelete />, label: "Delete", className: "text-red-600" },
  ];

  // const handleClickedItem = async (item: MenuItem) => {
  //   if(item.label === "Delete"){
  //     // setOpenDialog(true);
  //   }
  // }
  return (
    <div>
      <DropdownMenu>
        {/* Trigger drop down which is the more icon */}
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="poppins">
          {menuItems.map((item, index) =>
            item.separator ? (
              <DropdownMenuSeparator key={index} />
            ) : (
              <DropdownMenuItem
                key={index}
                className={`flex items-center gap-1 p-[10px] ${item.className}`}
                onClick={() => console.log(item.label)}
              >
                {item.icon}
                <span>{item.label}</span>
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProductDropdown;
