"use client";

import ButtonAction from "@/app/components_global/buttons/ButtonAction";
import { useState, useEffect } from "react";

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/product", {
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

export default function StaffOrderBySearch() {
  const [productData, setProductData] = useState<any[]>([]);
  const [searchbar, SetSearchbar] = useState("");
  useEffect(() => {
    const fetchTables = async () => {
      const data = await getProducts();
      const regex = new RegExp(searchbar, "i"); // 'i' for case insensitive
      const filteredData = data.product.filter((product: any) =>
        regex.test(product.name)
      );
      console.log("Fetched data:", filteredData);
      setProductData(filteredData);
    };

    fetchTables();
  }, [searchbar]);

  console.log(searchbar);

  return (
    <div className="flex flex-col border-2 rounded-xl border-white p-2 w-96 h-72 bg-[#ffffffc5]">
      <form>
        <input
          type="text"
          placeholder="Search"
          className="px-2 py-1 border-2 mb-4"
          onChange={(e) => SetSearchbar(e.target.value)}
        ></input>
      </form>

      {/* List Products With Reggix */}
      <div className="flex w-full flex-col gap-2 max-h-56 overflow-y-scroll border-2 p-2 border-white rounded-md">
        {productData.map((t: any) => (
          <ButtonAction
            key={t._id}
            className="w-full text-left shadow-none text-base px-2 py-2"
          >
            {t.name}
          </ButtonAction>
        ))}
      </div>
    </div>
  );
}
