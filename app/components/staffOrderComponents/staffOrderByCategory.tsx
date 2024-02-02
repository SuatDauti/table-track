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

const getCategories = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/category", {
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

export default function StaffOrderByCategory(props: any) {
  const [category, SetCategory] = useState("");
  const [allCategories, SetAllCategories] = useState([]);
  const [products, SetProducts] = useState([]);
  const [payload, SetPayload] = useState({
    productName: "",
    productAmmount: 0,
    productPrice: 0,
    size: "",
    toppings: [
      "topping",
      "topping",
      "topping",
      "topping",
      "topping",
      "topping",
      "topping",
      "topping",
    ],
  });

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      SetAllCategories(data.category);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      let filteredData;

      if (category === "") {
        // If category is empty, render all products
        filteredData = data.product;
      } else {
        // If category is not empty, filter products based on category
        filteredData = data.product.filter(
          (product: any) => product.category == category
        );
      }

      SetProducts(filteredData);
    };

    fetchProducts();
  }, [category]);

  useEffect(() => {
    // Use the useEffect hook to trigger the callback when payload changes
    if (payload && Object.keys(payload).length > 0) {
      props.onClick(payload);
    }
  }, [payload, props]);

  return (
    <>
      <h1 className="text-white text-xl -mb-4 text-center">
        {category == "" ? <p>All Categories</p> : category}
      </h1>
      <div className="flex flex-col w-full gap-4 max-w-6xl">
        {/* List Categories */}
        <div className=" mt-8 w-full bg-[#141414] py-4 border-white border-2 max-h-24 rounded-lg overflow-y-scroll">
          <ButtonAction
            className="min-w-[150px] m-2"
            onClick={(e) => SetCategory("")}
          >
            All Products
          </ButtonAction>
          {allCategories.map((t: any) => (
            <ButtonAction
              key={t._id}
              className="min-w-[150px] m-2"
              onClick={(e) => SetCategory(t.category)}
            >
              {t.category}
            </ButtonAction>
          ))}
        </div>

        {/* List products */}
        <div className="flex w-full justify-start items-start">
          <div className=" gap-4 row-gap-4 justify-start bg-[#141414] w-full h-56 flex-wrap overflow-y-scroll p-4 rounded-xl border-white border-2 overflow-x-clip items-start align-content-start">
            {products.map((t: any) => (
              <ButtonAction
                key={t._id}
                className=" min-w-[150px] h-fit mx-1 my-2"
                onClick={() => {
                  SetPayload({
                    productName: t.name,
                    productAmmount: 1,
                    productPrice: t.price,
                    size: "",
                    toppings: t.toppings,
                  });
                }}
              >
                {t.name}
              </ButtonAction>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
