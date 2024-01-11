import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonAccept extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function ButtonAccept({
  children,
  className,
  ...props
}: ButtonAccept) {
  return (
    <>
      <button
        className={twMerge(
          "text-[#000000] py-2 px-4 bg-greenProd border-highlight border-2 w-fit rounded-md hover:bg-highlight ease-in-out duration-100 shadow-md shadow-[#000000] focus:outline-none focus:ring-1 focus:ring-highlight active:bg-darkHiglight",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
