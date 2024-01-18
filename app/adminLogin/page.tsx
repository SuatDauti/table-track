"use client";

import Link from "next/link";
import ButtonAction from "../components_global/buttons/ButtonAction";
import ButtonAccept from "../components_global/buttons/ButtonAccept";
import ButtonNeutral from "../components_global/buttons/ButtonNeutral";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res: any = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("adminPanel");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Back Button */}
      <div className="absolute left-10 top-10">
        <Link href={"/"} passHref>
          <ButtonAction>Back</ButtonAction>
        </Link>
      </div>
      <div className="flex h-screen justify-center items-center">
        <form
          id="LoginForm"
          onSubmit={handleSubmit}
          className="flex h-fit flex-col gap-4"
        >
          {error && (
            <h1 className="bg-redProd text-white w-fill rounded-md px-1 py-2 text-center">
              {error}
            </h1>
          )}
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
            className=" px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight"
            required
          ></input>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight"
            required
          ></input>
          <div className="flex gap-2">
            <ButtonNeutral className="w-full" type="submit">
              Forgot
            </ButtonNeutral>
            <ButtonAccept className="w-full" type="submit">
              Submit
            </ButtonAccept>
          </div>
        </form>
      </div>
    </div>
  );
}
