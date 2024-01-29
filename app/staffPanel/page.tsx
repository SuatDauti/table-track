"use client";

import { signOut, useSession } from "next-auth/react";
import ButtonReject from "@/app/components_global/buttons/ButtonReject";
export default function StaffPanel() {
  const { data: session } = useSession();
  return (
    <>
      <ButtonReject
        onClick={() => signOut({ callbackUrl: "/" })}
        className="rounded-none px-8 py-1 w-fit border-white"
      >
        Log Out
      </ButtonReject>

      {/* Session Testing */}
      <div className="text-white">
        <h1>Staff Name: {session?.user?.name}</h1>
      </div>

      <h1 className="text-white">Staff Panel</h1>
    </>
  );
}
