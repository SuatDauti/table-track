"use client";

import DisplayStaffPosition from "@/app/components/adminStaff/addPosition/displayStaffPosition";
import WarningText from "../../../components/adminStaff/addPosition/warningText";
import ButtonAccept from "@/app/components_global/buttons/ButtonAccept";
import ButtonNeutral from "@/app/components_global/buttons/ButtonNeutral";
import ButtonReject from "@/app/components_global/buttons/ButtonReject";
import Link from "next/link";
import { useState } from "react";

export default function AddPosition() {
  const [Position, SetPosition] = useState("");

  return (
    <>
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
        <h1 className="text-white text-5xl mt-12">Staff</h1>

        {/* Warning */}
        <WarningText />

        {/* Form */}
        <div className="w-full">
          <form className="flex justify-around">
            <input
              onChange={(e) => SetPosition(e.target.value)}
              type="text"
              placeholder="Position Name"
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

        {/* Show table */}
        <DisplayStaffPosition />
      </div>
    </>
  );
}
