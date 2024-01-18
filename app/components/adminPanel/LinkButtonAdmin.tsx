import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

//Change interface name when creating other buttons

interface LinkButtonAdmin extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function LinkButtonAdmin({
  children,
  className,
  ...props
}: LinkButtonAdmin) {
  return (
    <>
      <button
        className={twMerge(
          "bg-white px-8 py-1 w-full text-center hover:bg-highlight hover:text-white ease-in-out duration-300 rounded-l-md shadow-md shadow-[#000000]",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
