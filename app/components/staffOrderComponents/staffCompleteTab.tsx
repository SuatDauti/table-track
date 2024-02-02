import ButtonAccept from "@/app/components_global/buttons/ButtonAccept";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const getTable = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/addTable/", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    const data = await res.json();
    return data.table;
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default function StaffCompleteForm({ parentValue }: any) {
  const [tableValue, SetTableValue] = useState(0);
  const [tableData, setTableData] = useState<any[]>([]);
  const pathname = usePathname().split("/").pop();

  const fetchTables = async () => {
    const id = pathname;
    const data = await getTable();

    // Check if data is not undefined and contains the expected properties
    if (data && Array.isArray(data)) {
      const filteredTable = data.find((table) => table._id === id);

      if (filteredTable) {
        setTableData(filteredTable.tableContent || []);
        SetTableValue(filteredTable.tableTotal || 0);
      }
    }
  };

  useEffect(() => {
    fetchTables();
  }, [parentValue]);

  return (
    <>
      <div className="border-2 border-white flex flex-col justify-between   bg-[#141414] p-2 min-h-[80vh] w-1/3">
        <div className="border-2 border-white flex flex-col justify-between text-white  bg-[#141414] p-2 min-h-[80vh] w-full ">
          {/* Tab+Products wrapper */}
          <div>
            {/* Tab Title */}
            <h1 className="text-center py-4">Tab</h1>

            <div className="overflow-y-scroll h-[60vh]">
              {/* Product */}
              {tableData?.map((t: any) => (
                <div
                  key={t._id}
                  className="grid grid-cols-3 place-items-center border-y-2 py-2"
                >
                  <p className="justify-self-start">{t.productName}</p>
                  <p>{t.productAmmount}</p>
                  <p>{t.productPrice}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Total Price */}
          <div className="flex justify-between border-t-2 py-2 text-lg text-greenProd">
            <p>Total:</p>
            <p>{tableValue} $</p>
          </div>
        </div>
        <ButtonAccept>Save</ButtonAccept>
      </div>
    </>
  );
}
