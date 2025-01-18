import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductTable from "../Products/ProductTable";
import { columns } from "../Products/columns";
import ProductDialog from "./ProductDialog/ProductDialog";
import { useProductStore } from "../useProductStore";
import { useEffect } from "react";

const AppTable = () => {
  const { allProducts, loadProducts } = useProductStore();

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Card className="mt-12 flex flex-col shadow-sm poppins border-none">
      <CardHeader className="flex justify-between p-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="font-bold text-[23px]">Products</CardTitle>
            <p className="text-sm text-slate-600">
              {allProducts.length} products
            </p>
          </div>
          <ProductDialog />
        </div>
      </CardHeader>

      <CardContent>
        <ProductTable data={allProducts} columns={columns} />
      </CardContent>
    </Card>
  );
};

export default AppTable;
