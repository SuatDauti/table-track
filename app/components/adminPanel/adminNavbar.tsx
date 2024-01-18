"use client";

import { signOut } from "next-auth/react";
import ButtonReject from "@/app/components_global/buttons/ButtonReject";
import Link from "next/link";
import LinkButtonAdmin from "./LinkButtonAdmin";
import { usePathname } from "next/navigation";

export default function AdminNavbar() {
  const pathname = usePathname();
  return (
    <>
      <div className="flex h-screen items-center border-r-2 border-white">
        <ul className="flex flex-col gap-6 pl-24">
          <li>
            <Link href={"/adminPanel"} passHref>
              <LinkButtonAdmin
                className={
                  pathname === "/adminPanel"
                    ? "bg-blueProd text-white hover:bg-blueProd"
                    : ""
                }
              >
                Home
              </LinkButtonAdmin>
            </Link>
          </li>
          <li>
            <Link href={"/adminPanel/staffAdmin"} passHref>
              <LinkButtonAdmin
                className={
                  pathname === "/adminPanel/staffAdmin"
                    ? "bg-blueProd text-white hover:bg-blueProd"
                    : ""
                }
              >
                Staff
              </LinkButtonAdmin>
            </Link>
          </li>
          <li>
            <Link href={"/adminPanel/productsAdmin"} passHref>
              <LinkButtonAdmin
                className={
                  pathname === "/adminPanel/productsAdmin"
                    ? "bg-blueProd text-white hover:bg-blueProd"
                    : ""
                }
              >
                Products
              </LinkButtonAdmin>
            </Link>
          </li>
          <li>
            <Link href={"/adminPanel/tablesAdmin"} passHref>
              <LinkButtonAdmin
                className={
                  pathname === "/adminPanel/tablesAdmin"
                    ? "bg-blueProd text-white hover:bg-blueProd"
                    : ""
                }
              >
                Tables
              </LinkButtonAdmin>
            </Link>
          </li>
          <li>
            <ButtonReject
              onClick={() => signOut({ callbackUrl: "/" })}
              className="rounded-r-none px-8 py-1 w-full border-white mt-8"
            >
              Log Out
            </ButtonReject>
          </li>
        </ul>
      </div>
    </>
  );
}
