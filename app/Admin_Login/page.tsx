"use client";

import Link from "next/link";
import ButtonAction from "../components_global/buttons/ButtonAction";
import ButtonAccept from "../components_global/buttons/ButtonAccept";
import ButtonNeutral from "../components_global/buttons/ButtonNeutral";
import { useState } from "react";

export default function AdminLiginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("user registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
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
        <form onSubmit={handleSubmit} className="flex h-fit flex-col gap-4">
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
