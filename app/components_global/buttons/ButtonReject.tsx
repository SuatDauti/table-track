import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonReject extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function ButtonReject({
  children,
  className,
  ...props
}: ButtonReject) {
  return (
    <>
      <button
        className={twMerge(
          "text-[#000000] py-2 px-4 bg-redProd border-highlight border-2 w-fit rounded-md hover:bg-highlight ease-in-out duration-100 shadow-md shadow-[#000000] focus:outline-none focus:ring-1 focus:ring-highlight active:bg-darkHiglight",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
