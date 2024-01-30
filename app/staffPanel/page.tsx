"use client";

import StaffDisplayTables from "../components/staffTables/staffDisplayTables";
import { useSession } from "next-auth/react";
export default function StaffPanel() {
  const { data: session } = useSession();

  return (
    <>
      <div className="flex w-full items-center justify-center">
        <h1 className="text-white text-2xl mt-2">
          User: {session?.user?.name}
        </h1>
      </div>
      <div className="flex gap-12 w-full h-full items-center justify-center mt-8 flex-wrap mb-12">
        <StaffDisplayTables />
      </div>
    </>
  );
}
