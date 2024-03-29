"use client";

import { useState } from "react";
import ButtonReject from "./components_global/buttons/ButtonReject";
import ButtonAccept from "./components_global/buttons/ButtonAccept";
import ButtonPad from "./components_global/buttons/ButtonPad";
import ButtonAction from "./components_global/buttons/ButtonAction";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Home() {
  const [error, setError] = useState("");
  const [Pin, SetPin] = useState("");

  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res: any = await signIn("staffCredentials", {
        Pin: Pin,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }
      router.push("staffPanel");
    } catch (error) {
      console.log(error);
    }
  };

  const Add1 = () => {
    SetPin(Pin + "1");
  };
  const Add2 = () => {
    SetPin(Pin + "2");
  };
  const Add3 = () => {
    SetPin(Pin + "3");
  };
  const Add4 = () => {
    SetPin(Pin + "4");
  };
  const Add5 = () => {
    SetPin(Pin + "5");
  };
  const Add6 = () => {
    SetPin(Pin + "6");
  };
  const Add7 = () => {
    SetPin(Pin + "7");
  };
  const Add8 = () => {
    SetPin(Pin + "8");
  };
  const Add9 = () => {
    SetPin(Pin + "9");
  };
  const Add0 = () => {
    SetPin(Pin + "0");
  };
  const ClearInput = () => {
    SetPin("");
  };

  return (
    <div>
      {/* Login Button */}
      <div className="absolute right-10 top-10">
        <Link href={"adminLogin"} passHref>
          <ButtonAction>Admin Login</ButtonAction>
        </Link>
      </div>

      {/* Numpad input */}
      <div className="flex items-center justify-center h-screen">
        <div>
          {error && (
            <p className="bg-redProd text-white w-fill px-1 py-2 text-center">
              Invalid PIN
            </p>
          )}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-3 grid-rows-5 gap-4 max-w-xs "
          >
            <input
              type="text"
              defaultValue={Pin}
              placeholder="PIN"
              className="col-span-3 text-center focus:outline-none focus:ring-2 focus:ring-highlight"
            ></input>
            <ButtonPad type="button" id="1" onClick={Add1}>
              1
            </ButtonPad>
            <ButtonPad id="2" type="button" onClick={Add2}>
              2
            </ButtonPad>
            <ButtonPad id="3" type="button" onClick={Add3}>
              3
            </ButtonPad>
            <ButtonPad id="4" type="button" onClick={Add4}>
              4
            </ButtonPad>
            <ButtonPad id="5" type="button" onClick={Add5}>
              5
            </ButtonPad>
            <ButtonPad id="6" type="button" onClick={Add6}>
              6
            </ButtonPad>
            <ButtonPad id="7" type="button" onClick={Add7}>
              7
            </ButtonPad>
            <ButtonPad id="8" type="button" onClick={Add8}>
              8
            </ButtonPad>
            <ButtonPad id="9" type="button" onClick={Add9}>
              9
            </ButtonPad>
            <ButtonReject
              type="button"
              id="clear"
              className="w-[100%] border-[#000000]"
              onClick={ClearInput}
            >
              clear
            </ButtonReject>
            <ButtonPad id="0" type="button" onClick={Add0}>
              0
            </ButtonPad>
            <ButtonAccept type="submit" className="w-[100%] border-[#000000]">
              submit
            </ButtonAccept>
          </form>
        </div>
      </div>
    </div>
  );
}
