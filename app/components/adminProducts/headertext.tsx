"use client";
import { usePathname } from "next/navigation";

export default function HeaderTextProducts() {
  let pathname = usePathname().split("/").pop();
  pathname = pathname?.replace("%20", " ");

  return (
    <div>
      <h1 className="text-white text-5xl mt-12">{pathname}</h1>
    </div>
  );
}
