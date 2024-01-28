import AddTableButton from "@/app/components/adminTables/addTableButton";
import RemoveTableButton from "@/app/components/adminTables/removeTableButton";

export default function TablesAdmin() {
  return (
    <div className="flex flex-col items-center w-full gap-8 max-h-screen overflow-y-scroll">
      <h1 className="text-white text-5xl mt-12">Tables</h1>
      <div className=" w-full">
        <AddTableButton />
      </div>
      <RemoveTableButton />
    </div>
  );
}
