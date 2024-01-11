import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonPad extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function ButtonPad({
  children,
  className,
  ...props
}: ButtonPad) {
  return (
    <>
      <button
        className={twMerge(
          "text-[#000000] py-4 px-4 bg-white border-[#000000] border-2 hover:bg-highlight ease-in-out duration-100 shadow-md shadow-[#000000] focus:outline-none focus:ring-1 focus:ring-highlight active:bg-darkHiglight",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
