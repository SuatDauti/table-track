import StaffDisplayTable from "@/app/components/adminStaff/staffDisplayTable";
import AddStaffButton from "@/app/components/adminStaff/addStaffButton";

export default function StaffAdmin() {
  return (
    <div className="flex flex-col items-center w-full gap-8 max-h-screen overflow-y-scroll">
      <h1 className="text-white text-5xl mt-12">Staff</h1>
      <AddStaffButton />
      <StaffDisplayTable />
    </div>
  );
}
