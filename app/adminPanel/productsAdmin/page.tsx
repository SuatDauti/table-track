import CreateProductButton from "@/app/components/adminProducts/createProductButton";
import HeaderTextProducts from "@/app/components/adminProducts/headertext";
import ProductsDisplayTable from "@/app/components/adminProducts/productsDisplayTable";

export default function productsAdmin() {
  return (
    <div className="flex flex-col items-center w-full gap-8 max-h-screen overflow-y-scroll relative">
      <HeaderTextProducts />
      <CreateProductButton />
      <ProductsDisplayTable />
    </div>
  );
}
