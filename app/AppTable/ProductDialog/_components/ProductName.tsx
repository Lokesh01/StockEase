import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import IconSelector from "../IconSelector";
import { MdError } from "react-icons/md";

const ProductName = ({
  onSelectedIcon,
}: {
  onSelectedIcon: (selectedIcon: ReactNode) => void;
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const getSelectedIcon = (selectedIcon: ReactNode) => {
    onSelectedIcon(selectedIcon);
  };
  return (
    <div className="mt-5 flex flex-col gap-2">
      <Label className="text-slate-500" htmlFor="product-name">
        {`Product's Name`}
      </Label>
      <div className="flex gap-2 items-center">
        <Input
          {...register("productName")}
          type="text"
          id="product-name"
          className="h-11 shadow-none"
        />
        <IconSelector onUpdateIcon={getSelectedIcon} />
      </div>

      {errors.productName && (
        <div className="text-red-500 flex gap-1 items-center text-[13px]">
          <MdError />
          <p>The product name is required</p>
        </div>
      )}
    </div>
  );
};

export default ProductName;
