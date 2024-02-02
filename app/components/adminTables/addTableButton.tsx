"use client";

import ButtonAccept from "@/app/components_global/buttons/ButtonAccept";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ImSpinner5 } from "react-icons/im";

export default function AddTableButton() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    fetch("/api/addTable")
      .then((res) => res.json())
      .then((count) => {
        setCount(count.table.length);
        setLoading(false);
      });
  }, [refreshKey]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/addTable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usedBy: "",
          tableNO: 0,
          tableTotal: 0,
        }),
      });

      console.log("Response status:", res.status);

      if (res.ok) {
        setRefreshKey((oldKey) => oldKey + 1);
        router.push("/adminPanel/tablesAdmin");
      } else {
        const errorData = await res.json(); // Parse the error data
        console.error("Error data:", errorData); // Log the error data
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };
  return (
    <div className="flex justify-around flex-wrap">
      <ButtonAccept
        onClick={handleSubmit}
        className="border-none w-[50%] rounded-none "
      >
        Add 1 Table
      </ButtonAccept>

      <p className="text-white text-2xl w-fit">
        You Have
        {loading ? (
          <ImSpinner5 className=" text-2xl animate-spin" />
        ) : (
          <span> {count} </span>
        )}
        tables registered
      </p>
    </div>
  );
}
