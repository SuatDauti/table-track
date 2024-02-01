"use client";

import StaffCompleteForm from "@/app/components/staffOrderComponents/staffCompleteTab";
import StaffOrderByCategory from "@/app/components/staffOrderComponents/staffOrderByCategory";
import StaffOrderBySearch from "@/app/components/staffOrderComponents/staffOrderBySearch";
import ButtonAccept from "@/app/components_global/buttons/ButtonAccept";
import ButtonAction from "@/app/components_global/buttons/ButtonAction";
import ButtonReject from "@/app/components_global/buttons/ButtonReject";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function TableOrder() {
  const [selectedProduct, SetSelectedProduct] = useState({
    productName: "",
    productAmmount: 0,
    size: "",
    Toppings: [],
    Price: 0,
  });

  const [selectedProductFromSearch, SetSelectedProductFromSearch] = useState({
    productName: "",
    productAmmount: 0,
    size: "",
    Toppings: [],
    Price: 0,
  });

  const [selectedProductFromCategory, SetSelectedProductFromCategory] =
    useState({
      productName: "",
      productAmmount: 0,
      size: "",
      Toppings: [],
      Price: 0,
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
                    defaultValue={selectedProduct.productAmmount}
                  ></input>
                  <ButtonAccept>ADD</ButtonAccept>
                  <ButtonReject>CLE</ButtonReject>
                </div>

                {/* Toppings */}
                <div className="text-white grid grid-cols-4 gap-4 w-full">
                  {selectedProduct.Toppings.map((t: any, index: number) => (
                    <div className="flex" key={index}>
                      <input
                        type="checkbox"
                        value={t}
                        // id={t}
                        className=""
                        defaultChecked
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
                        <input type="radio" id="S" name="contact" value="S" />
                        <label htmlFor="S">S</label>
                      </div>
                      <div>
                        <input type="radio" id="M" name="contact" value="M" />
                        <label htmlFor="M">M</label>
                      </div>

                      <div>
                        <input type="radio" id="L" name="contact" value="L" />
                        <label htmlFor="L">L</label>
                      </div>

                      <div>
                        <input type="radio" id="XL" name="contact" value="XL" />
                        <label htmlFor="XL">XL</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <h1 className="text-white text-center">
                  Price: {selectedProduct.Price} $
                </h1>
              </form>
            </div>
          </div>

          {/* Search By Category */}
          <StaffOrderByCategory onClick={CategoryDataFromCategory} />
        </div>
        {/* Main Tab */}
        <StaffCompleteForm />
      </div>
    </>
  );
}
