"use client";

import ButtonAccept from "@/app/components_global/buttons/ButtonAccept";
import ButtonReject from "@/app/components_global/buttons/ButtonReject";
import ButtonNeutral from "@/app/components_global/buttons/ButtonNeutral";
import { useState } from "react";

export default function AddProductForm() {
  const [ProductName, SetProductName] = useState("");
  const [ProductPrice, SetProductPrice] = useState("");
  const [Category, SetCategory] = useState("");
  const [Storage, SetStorage] = useState("");

  return (
    <>
      {/* Add Product */}
      <div className="w-full flex justify-around">
        <form className="flex flex-col gap-4 w-[30%]">
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
              type="text"
              className="px-1 py-1"
              onChange={(e) => SetProductPrice(e.target.value)}
            ></input>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-white">Category (use number):</p>
            <input
              type="text"
              className="px-1 py-1"
              onChange={(e) => SetCategory(e.target.value)}
            ></input>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-white">In Storage:</p>
            <input
              type="number"
              className="px-1 py-1"
              //   Make into Number
              onChange={(e) => SetStorage(e.target.value)}
            ></input>
          </div>

          {/* Toppings */}
          <div className="w-[70vw] flex gap-8 flex-wrap">
            <div className="flex gap-8 border-2 p-2 w-fit">
              <input type="checkbox" className="scale-150"></input>
              <input type="text" placeholder="Topping 1"></input>
            </div>

            <div className="flex gap-8 border-2 p-2 w-fit">
              <input type="checkbox" className="scale-150"></input>
              <input type="text" placeholder="Topping 2"></input>
            </div>

            <div className="flex gap-8 border-2 p-2 w-fit">
              <input type="checkbox" className="scale-150"></input>
              <input type="text" placeholder="Topping 3"></input>
            </div>

            <div className="flex gap-8 border-2 p-2 w-fit">
              <input type="checkbox" className="scale-150"></input>
              <input type="text" placeholder="Topping 4"></input>
            </div>

            <div className="flex gap-8 border-2 p-2 w-fit">
              <input type="checkbox" className="scale-150"></input>
              <input type="text" placeholder="Topping 5"></input>
            </div>

            <div className="flex gap-8 border-2 p-2 w-fit">
              <input type="checkbox" className="scale-150"></input>
              <input type="text" placeholder="Topping 6"></input>
            </div>

            <div className="flex gap-8 border-2 p-2 w-fit">
              <input type="checkbox" className="scale-150"></input>
              <input type="text" placeholder="Topping 7"></input>
            </div>

            <div className="flex gap-8 border-2 p-2 w-fit">
              <input type="checkbox" className="scale-150"></input>
              <input type="text" placeholder="Topping 8"></input>
            </div>
          </div>
        </form>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <ButtonAccept className="w-full" type="submit">
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
