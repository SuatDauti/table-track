"use client";

import Link from "next/link";
import ButtonReject from "@/app/components_global/buttons/ButtonReject";
import { useState } from "react";
import ButtonAccept from "@/app/components_global/buttons/ButtonAccept";
import ButtonNeutral from "@/app/components_global/buttons/ButtonNeutral";
import WarningText from "@/app/components/adminStaff/addPosition/warningText";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function AddEmployee() {
  const [Name, SetName] = useState("");
  const [LastName, SetLastName] = useState("");
  const [Pin, SetPin] = useState("");
  const [IsEmployeed, SetIsEmployeed] = useState(true);
  const pathname = usePathname().split("/").pop();
  const router = useRouter();

  function changeIsEmployeed() {
    SetIsEmployeed(!IsEmployeed);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (
        !Name ||
        !LastName ||
        !Pin ||
        typeof IsEmployeed === "undefined" ||
        !pathname
      ) {
        console.error("One or more required fields are missing.");
        return;
      }

      console.log(
        "Request Payload:",
        JSON.stringify({
          name: Name,
          LastName: LastName,
          Pin: Pin,
          IsEmployeed: IsEmployeed,
          position: pathname,
        })
      );

      const res = await fetch("/api/staff", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: Name,
          LastName: LastName,
          Pin: Pin,
          IsEmployeed: IsEmployeed,
          position: pathname,
        }),
      });

      console.log("Response status:", res.status);

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/adminPanel/staffAdmin");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <>
      {/* Title + back button */}
      <div className="flex flex-col items-center w-full gap-12 max-h-screen overflow-y-scroll">
        <Link
          href={"/adminPanel/staffAdmin "}
          passHref
          className="self-start text-xl absolute"
        >
          <ButtonReject className="border-none rounded-none ">
            Back
          </ButtonReject>
        </Link>

        {/* Title */}
        <h1 className="text-white text-5xl mt-12">Staff ({pathname})</h1>
        <WarningText />

        {/* Form */}
        <div className="w-full flex justify-around">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[30%]">
            <div className="flex justify-between items-center">
              <p className="text-white">Name:</p>
              <input
                type="text"
                className="px-1 py-1"
                onChange={(e) => SetName(e.target.value)}
              ></input>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-white">Last Name:</p>
              <input
                type="text"
                className="px-1 py-1"
                onChange={(e) => SetLastName(e.target.value)}
              ></input>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-white">PIN (use number):</p>
              <input
                type="text"
                className="px-1 py-1"
                onChange={(e) => SetPin(e.target.value)}
              ></input>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-white">Is employed:</p>
              <input
                type="checkbox"
                checked={IsEmployeed}
                onChange={changeIsEmployeed}
                className=" scale-150"
              ></input>
            </div>
            {/* Buttons */}
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
      </div>
    </>
  );
}
