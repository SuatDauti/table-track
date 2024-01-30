"use client";

import ButtonReject from "../../components_global/buttons/ButtonReject";
import { signOut } from "next-auth/react";
export default function StaffNavbar() {
  return (
    <div>
      <ButtonReject
        onClick={() => signOut({ callbackUrl: "/" })}
        className="absolute top-0 right-0 rounded-none px-8 py-1 w-fit border-white"
      >
        Log Out
      </ButtonReject>
    </div>
  );
}
