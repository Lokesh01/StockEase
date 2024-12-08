import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductTable from "../Products/ProductTable";
import { products } from "../Products/ProductData";
import { columns } from "../Products/columns";

const AppTable = () => {
  return (
    <Card className="mt-12 flex flex-col shadow-sm poppins border-none">
      <CardHeader className="flex justify-between p-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="font-bold text-[23px]">Products</CardTitle>
            <p className="text-sm text-slate-600">34 products</p>
          </div>
          <Button>Add Product</Button>
        </div>
      </CardHeader>

      <CardContent>
        <ProductTable data={products} columns={columns} />
      </CardContent>
    </Card>
  );
};

export default AppTable;
