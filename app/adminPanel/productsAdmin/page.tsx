import CreateProductButton from "@/app/components/adminProducts/createProductButton";
import ProductsDisplayTable from "@/app/components/adminProducts/productsDisplayTable";

export default function productsAdmin() {
  return (
    <div className="flex flex-col items-center w-full gap-8 max-h-screen overflow-y-scroll relative">
      <h1 className="text-white text-5xl mt-12">Products</h1>
      <CreateProductButton />
      <ProductsDisplayTable />
    </div>
  );
}
