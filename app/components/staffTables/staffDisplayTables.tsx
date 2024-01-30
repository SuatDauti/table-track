"use client";

import Link from "next/link";
import ButtonAction from "@/app/components_global/buttons/ButtonAction";
import { useEffect, useState } from "react";

const getTables = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/addTable", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default function StaffDisplayTables() {
  const [tableData, setTableData] = useState<any[]>([]);

  useEffect(() => {
    const fetchTables = async () => {
      const data = await getTables();
      console.log("Fetched data:", data);
      setTableData(data.table);
    };

    fetchTables();
  }, []);

  return (
    <>
      {/* Tables rendering */}
      {tableData &&
        tableData.map((t: any) => (
          <div key={t._id}>
            <div className="bg-white flex min-w-[100px] min-h-[100px] items-center flex-col justify-center rounded-t-md ">
              <p>Used By: {t.usedBy}</p>
              <p>Table {t.tableNO}</p>
            </div>

            <Link href={`/staffPanel/${t._id}`} passHref>
              <ButtonAction className="w-full rounded-t-none border-none min-w-[250px]">
                Total: 300$
              </ButtonAction>
            </Link>
          </div>
        ))}
    </>
  );
}
