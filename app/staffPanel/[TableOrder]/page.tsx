"use client";

import StaffCompleteForm from "@/app/components/staffOrderComponents/staffCompleteTab";
import StaffOrderByCategory from "@/app/components/staffOrderComponents/staffOrderByCategory";
import StaffOrderBySearch from "@/app/components/staffOrderComponents/staffOrderBySearch";
import ButtonAccept from "@/app/components_global/buttons/ButtonAccept";
import ButtonAction from "@/app/components_global/buttons/ButtonAction";
import ButtonReject from "@/app/components_global/buttons/ButtonReject";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { PUT } from "@/app/api/updateTable/[id]/route";

export default function TableOrder() {
  const [RefreshValue, SetRefreshValue] = useState(0);
  const { data: session } = useSession();
  const pathname = usePathname().split("/").pop();
  const [checkedToppings, setCheckedToppings] = useState<string[]>([]);

  const [selectedProduct, SetSelectedProduct] = useState<{
    productName: string;
    productAmount: number;
    productPrice: number;
    size: string;
    toppings: string[];
  }>({
    productName: "",
    productAmount: 0,
    productPrice: 0,
    size: "",
    toppings: [],
  });

  const [selectedProductFromSearch, SetSelectedProductFromSearch] = useState<{
    productName: string;
    productAmount: number;
    productPrice: number;
    size: string;
    toppings: string[];
  }>({
    productName: "",
    productAmount: 0,
    productPrice: 0,
    size: "",
    toppings: [],
  });

  const [selectedProductFromCategory, SetSelectedProductFromCategory] =
    useState<{
      productName: string;
      productAmount: number;
      productPrice: number;
      size: string;
      toppings: string[];
    }>({
      productName: "",
      productAmount: 0,
      productPrice: 0,
      size: "",
      toppings: [],
    });

  const CategoryDataFromCategory = (data: any) => {
    SetSelectedProductFromCategory(data);
  };
  const CategoryDataFromSearch = (data: any) => {
    SetSelectedProductFromSearch(data);
  };

  useEffect(() => {
    SetSelectedProduct(selectedProductFromSearch);
  }, [selectedProductFromSearch]);

  useEffect(() => {
    SetSelectedProduct(selectedProductFromCategory);
  }, [selectedProductFromCategory]);

  const handleAmmountChange = (e: any) => {
    const ammount = parseInt(e.target.value);
    SetSelectedProduct((prevProduct) => ({
      ...prevProduct,
      productAmmount: ammount,
    }));
  };

  const handleSizeChange = (e: any) => {
    const size = e.target.value;
    SetSelectedProduct((prevProduct) => ({
      ...prevProduct,
      size: size,
    }));
  };

  const handleToppingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (checked) {
      setCheckedToppings((prevToppings) => [...prevToppings, value]);
    } else {
      setCheckedToppings((prevToppings) =>
        prevToppings.filter((topping) => topping !== value)
      );
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const id = pathname;
    const nameOfUser = session?.user?.name;

    const updatedProduct = {
      ...selectedProduct,
      toppings: checkedToppings,
    };

    try {
      const res = await fetch(`http://localhost:3000/api/updateTable/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ selectedProduct: updatedProduct, nameOfUser }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }
    } catch (error) {
      console.log(error);
    }
    SetRefreshValue(RefreshValue + 1);
  };
  return (
    <>
      <Link href="/staffPanel" className=" absolute top-0 left-0" passHref>
        <ButtonAction>Back</ButtonAction>
      </Link>
      <div className="flex w-full h-full items-center justify-center mt-14 ">
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-around w-full h-full">
            {/* Find Product By Search */}
            <StaffOrderBySearch onClick={CategoryDataFromSearch} />
            {/* Main Form / Add 1*/}
            <div className="flex flex-col items-center  w-96 h-72 bg-[#141414] border-2 rounded-xl border-white">
              <h1 className="text-white">{selectedProduct.productName}</h1>
              <form className="flex flex-col justify-around w-full h-full">
                {/* Add Ammount */}
                <div className="flex w-full justify-around">
                  <input
                    type="number"
                    className="[&::-webkit-inner-spin-button]:appearance-none w-12 text-center py-2"
                    defaultValue={selectedProduct.productAmount}
                    onChange={handleAmmountChange}
                  ></input>
                  <ButtonAccept onClick={handleSubmit}>ADD</ButtonAccept>
                  <ButtonReject>CLE</ButtonReject>
                </div>

                {/* Toppings */}
                <div className="text-white grid grid-cols-4 gap-4 w-full">
                  {selectedProduct.toppings.map((t: any, index: number) => (
                    <div className="flex" key={index}>
                      <input
                        type="checkbox"
                        defaultValue={t}
                        className=""
                        checked={checkedToppings.includes(t)}
                        onChange={handleToppingChange}
                      />
                      <p>{t}</p>
                    </div>
                  ))}
                </div>

                {/* Size */}
                <div>
                  <fieldset className="text-white text-center">
                    <legend>Size</legend>
                    <div className="flex justify-around">
                      <div>
                        <input
                          type="radio"
                          id="S"
                          name="size"
                          value="S"
                          onChange={handleSizeChange}
                        />
                        <label htmlFor="S">S</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="M"
                          name="size"
                          value="M"
                          onChange={handleSizeChange}
                        />
                        <label htmlFor="M">M</label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="L"
                          name="size"
                          value="L"
                          onChange={handleSizeChange}
                        />
                        <label htmlFor="L">L</label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="XL"
                          name="size"
                          value="XL"
                          onChange={handleSizeChange}
                        />
                        <label htmlFor="XL">XL</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <h1 className="text-white text-center">
                  Price: {selectedProduct.productPrice} $
                </h1>
              </form>
            </div>
          </div>

          {/* Search By Category */}
          <StaffOrderByCategory onClick={CategoryDataFromCategory} />
        </div>
        {/* Main Tab */}
        <StaffCompleteForm parentValue={RefreshValue} />
      </div>
    </>
  );
}
