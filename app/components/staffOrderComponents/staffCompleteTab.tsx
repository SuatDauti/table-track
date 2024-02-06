import ButtonAccept from "@/app/components_global/buttons/ButtonAccept";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ButtonReject from "@/app/components_global/buttons/ButtonReject";
import ButtonNeutral from "@/app/components_global/buttons/ButtonNeutral";

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
  const [clearedTab, SetClearedTab] = useState([]);

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

  const clearTab = async (e: any) => {
    e.preventDefault();

    const id = pathname;

    try {
      const res = await fetch(`http://localhost:3000/api/clearTab/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(clearedTab),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }
    } catch (error) {
      console.log(error);
    }
    location.reload();
  };

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
        <div className="grid grid-cols-3 ">
          <ButtonAccept className="w-full h-fit">Order</ButtonAccept>
          <ButtonNeutral className="w-full h-fit">Pay</ButtonNeutral>
          <ButtonReject className="w-full h-fit" onClick={clearTab}>
            Clear
          </ButtonReject>
        </div>
      </div>
    </>
  );
}
