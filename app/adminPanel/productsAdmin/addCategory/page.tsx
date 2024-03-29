"use client";

import Link from "next/link";
import ButtonReject from "@/app/components_global/buttons/ButtonReject";
import HeaderTextProducts from "@/app/components/adminProducts/headertext";
import WarningText from "@/app/components/adminStaff/addPosition/warningText";
import { useState } from "react";
import ButtonAccept from "@/app/components_global/buttons/ButtonAccept";
import ButtonNeutral from "@/app/components_global/buttons/ButtonNeutral";
import DisplayProductsCategory from "@/app/components/adminProducts/Tables/displayProductsCategory";
import { useRouter } from "next/navigation";

export default function AddCategory() {
  const [Category, SetCategory] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: Category,
        }),
      });

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
    <div className="relative flex flex-col items-center w-full gap-12 max-h-screen overflow-y-scroll">
      {/* Go back button */}
      <Link
        href={"/adminPanel/productsAdmin "}
        passHref
        className="self-start text-xl absolute"
      >
        <ButtonReject className="border-none rounded-none ">Back</ButtonReject>
      </Link>

      {/* Title */}
      <HeaderTextProducts />
      <WarningText />

      {/* Form */}
      <div className="w-full">
        <form className="flex justify-around" onSubmit={handleSubmit}>
          <input
            onChange={(e) => SetCategory(e.target.value)}
            type="text"
            placeholder="Category Name"
            className="px-4 py-2 h-fit "
          ></input>
          <div className="flex flex-col gap-4">
            <ButtonAccept className="w-full" type="submit">
              Add
            </ButtonAccept>
            <div className="flex gap-8">
              <ButtonNeutral className="w-full">Cancel</ButtonNeutral>
              <ButtonReject className="w-full">Delete</ButtonReject>
            </div>
          </div>
        </form>
      </div>

      <DisplayProductsCategory />
    </div>
  );
}
