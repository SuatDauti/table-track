"use client";

import { signOut } from "next-auth/react";

import ButtonReject from "../components_global/buttons/ButtonReject";

export default function AdminPanel() {
  return (
    <>
      <h1 className="text-white text-5xl">Admin Panel</h1>
      <ButtonReject onClick={() => signOut()}>Log Out</ButtonReject>
    </>
  );
}
