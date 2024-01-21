import ButtonAccept from "@/app/components_global/buttons/ButtonAccept";
import Link from "next/link";
export default function AddStaffButton() {
  return (
    <>
      <Link
        href={"/adminPanel/staffAdmin/addPosition"}
        passHref
        className="w-full"
      >
        <ButtonAccept className="border-none w-full rounded-none">
          Add Position
        </ButtonAccept>
      </Link>
    </>
  );
}
