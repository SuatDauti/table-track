import Link from "next/link";
import ButtonReject from "@/app/components_global/buttons/ButtonReject";
import HeaderTextProducts from "@/app/components/adminProducts/headertext";
import AddProductForm from "@/app/components/adminProducts/Forms/AddProductForm";

export default function AddProduct() {
  return (
    <div className="relative flex flex-col items-center w-full gap-8 max-h-screen overflow-y-scroll">
      {/* Go back button */}
      <Link
        href={"/adminPanel/productsAdmin "}
        passHref
        className="self-start text-xl absolute"
      >
        <ButtonReject className="border-none rounded-none ">Back</ButtonReject>
      </Link>
      <HeaderTextProducts />
      <AddProductForm />
      <div></div>
    </div>
  );
}
