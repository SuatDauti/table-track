import StaffCompleteForm from "@/app/components/staffOrderComponents/staffCompleteTab";
import StaffOrderByCategory from "@/app/components/staffOrderComponents/staffOrderByCategory";
import StaffOrderBySearch from "@/app/components/staffOrderComponents/staffOrderBySearch";
import ButtonAction from "@/app/components_global/buttons/ButtonAction";
import Link from "next/link";
export default async function TableOrder() {
  return (
    <>
      <div className="flex w-screen h-full items-center justify-center mt-14 flex-col">
        <div className="flex justify-around w-full">
          <Link href="/staffPanel" className=" absolute top-0 left-0" passHref>
            <ButtonAction>Back</ButtonAction>
          </Link>
          {/* Find Product By Search */}
          <StaffOrderBySearch />
          {/* Main Form / Add 1*/}
          <p>Table Test</p>

          {/* Main Tab */}
          <StaffCompleteForm />
        </div>

        {/* Search By Category */}
        <StaffOrderByCategory />
      </div>
    </>
  );
}
