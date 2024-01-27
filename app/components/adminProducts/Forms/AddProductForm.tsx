"use client";

import ButtonAccept from "@/app/components_global/buttons/ButtonAccept";
import ButtonReject from "@/app/components_global/buttons/ButtonReject";
import ButtonNeutral from "@/app/components_global/buttons/ButtonNeutral";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AddProductForm() {
  const router = useRouter();

  const [ProductName, SetProductName] = useState("");
  const [ProductPrice, SetProductPrice] = useState(0);
  const [Storage, SetStorage] = useState(0);
  const [IsFor, SetIsFor] = useState("All");

  const [Topping1, SetTopping1] = useState("");
  const [Topping2, SetTopping2] = useState("");
  const [Topping3, SetTopping3] = useState("");
  const [Topping4, SetTopping4] = useState("");
  const [Topping5, SetTopping5] = useState("");
  const [Topping6, SetTopping6] = useState("");
  const [Topping7, SetTopping7] = useState("");
  const [Topping8, SetTopping8] = useState("");

  // const [ToppingsArray, SetToppingsArray] = useState<string[]>([]);

  let pathname = usePathname().split("/").pop();
  pathname = pathname?.replace("%20", " ");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const toppingsArray = [
      Topping1,
      Topping2,
      Topping3,
      Topping4,
      Topping5,
      Topping6,
      Topping7,
      Topping8,
    ].filter((topping) => topping !== "");

    // if (Topping1 !== "") {
    //   newToppingsArray.push(Topping1);
    //   SetTopping1("");
    // }
    // if (Topping2 !== "") {
    //   newToppingsArray.push(Topping2);
    //   SetTopping2("");
    // }
    // if (Topping3 !== "") {
    //   newToppingsArray.push(Topping3);
    //   SetTopping3("");
    // }
    // if (Topping4 !== "") {
    //   newToppingsArray.push(Topping4);
    //   SetTopping4("");
    // }
    // if (Topping5 !== "") {
    //   newToppingsArray.push(Topping5);
    //   SetTopping5("");
    // }
    // if (Topping6 !== "") {
    //   newToppingsArray.push(Topping6);
    //   SetTopping6("");
    // }
    // if (Topping7 !== "") {
    //   newToppingsArray.push(Topping7);
    //   SetTopping7("");
    // }
    // if (Topping8 !== "") {
    //   newToppingsArray.push(Topping8);
    //   SetTopping8("");
    // }

    // SetToppingsArray(newToppingsArray);

    try {
      if (!ProductName || !ProductPrice || !IsFor || !pathname) {
        console.log(
          JSON.stringify({
            name: ProductName,
            price: ProductPrice,
            sentTo: IsFor,
            inStorage: Storage,
            category: pathname,
            toppings: toppingsArray,
          })
        );
        console.error("One or more required fields are missing.");
        return;
      }

      const res = await fetch("/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: ProductName,
          price: ProductPrice,
          sentTo: IsFor,
          inStorage: Storage,
          category: pathname,
          toppings: toppingsArray,
        }),
      });

      console.log("Response status:", res.status);

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/adminPanel/productsAdmin");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <>
      {/* Add Product */}
      <div className="w-full flex justify-around">
        <form
          id="productForm"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-[30%]"
        >
          <div className="flex justify-between items-center">
            <p className="text-white">Product Name:</p>
            <input
              type="text"
              className="px-1 py-1"
              onChange={(e) => SetProductName(e.target.value)}
            ></input>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-white">Product Price:</p>
            <input
              type="number"
              className="px-1 py-1"
              onChange={(e) => {
                const value = e.target.value;
                SetProductPrice(value ? parseFloat(value) : 0);
              }}
            ></input>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-white">Will be sent to:</p>
            <select
              className="px-1 py-1"
              onChange={(e) => SetIsFor(e.target.value)}
            >
              <option value={"All"}>select</option>
              <option value={"Shank"}>Shank</option>
              <option value={"Kitchen"}>Kitchen</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-white">In Storage:</p>
            <input
              type="number"
              className="px-1 py-1"
              //   Make into Number
              onChange={(e) => {
                const value = e.target.value;
                SetStorage(value ? parseFloat(value) : 0);
              }}
            ></input>
          </div>

          {/* Toppings */}
          <div className="w-[70vw] flex gap-8 flex-wrap">
            <div className="flex gap-8 border-2 p-2 w-fit">
              <input type="checkbox" className="scale-150"></input>
              <input
                onChange={(e) => SetTopping1(e.target.value)}
                type="text"
                placeholder="Topping 1"
              ></input>
            </div>

            <div className="flex gap-8 border-2 p-2 w-fit">
              <input type="checkbox" className="scale-150"></input>
              <input
                onChange={(e) => SetTopping2(e.target.value)}
                type="text"
                placeholder="Topping 2"
              ></input>
            </div>

            <div className="flex gap-8 border-2 p-2 w-fit">
              <input type="checkbox" className="scale-150"></input>
              <input
                onChange={(e) => SetTopping3(e.target.value)}
                type="text"
                placeholder="Topping 3"
              ></input>
            </div>

            <div className="flex gap-8 border-2 p-2 w-fit">
              <input type="checkbox" className="scale-150"></input>
              <input
                onChange={(e) => SetTopping4(e.target.value)}
                type="text"
                placeholder="Topping 4"
              ></input>
            </div>

            <div className="flex gap-8 border-2 p-2 w-fit">
              <input type="checkbox" className="scale-150"></input>
              <input
                onChange={(e) => SetTopping5(e.target.value)}
                type="text"
                placeholder="Topping 5"
              ></input>
            </div>

            <div className="flex gap-8 border-2 p-2 w-fit">
              <input type="checkbox" className="scale-150"></input>
              <input
                onChange={(e) => SetTopping6(e.target.value)}
                type="text"
                placeholder="Topping 6"
              ></input>
            </div>

            <div className="flex gap-8 border-2 p-2 w-fit">
              <input type="checkbox" className="scale-150"></input>
              <input
                onChange={(e) => SetTopping7(e.target.value)}
                type="text"
                placeholder="Topping 7"
              ></input>
            </div>

            <div className="flex gap-8 border-2 p-2 w-fit">
              <input type="checkbox" className="scale-150"></input>
              <input
                onChange={(e) => SetTopping8(e.target.value)}
                type="text"
                placeholder="Topping 8"
              ></input>
            </div>
          </div>
        </form>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <ButtonAccept form="productForm" className="w-full" type="submit">
            Add 1
          </ButtonAccept>
          <ButtonAccept className="w-full" type="submit">
            Add 1 and next
          </ButtonAccept>
          <div className="flex gap-8">
            <ButtonNeutral className="w-full">Cancel</ButtonNeutral>
            <ButtonReject className="w-full">Delete</ButtonReject>
          </div>
        </div>
      </div>
    </>
  );
}
