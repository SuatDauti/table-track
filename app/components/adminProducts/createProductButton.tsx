import ButtonAccept from "@/app/components_global/buttons/ButtonAccept";
import Link from "next/link";

export default function CreateProductButton() {
  return (
    <Link
      href={"/adminPanel/productsAdmin/addCategory"}
      passHref
      className="w-full"
    >
      <ButtonAccept className="rounded-none border-none w-full">
        Add Category
      </ButtonAccept>
    </Link>
  );
}
