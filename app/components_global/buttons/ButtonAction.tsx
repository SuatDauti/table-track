import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonAction extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function ButtonAction({
  children,
  className,
  ...props
}: ButtonAction) {
  return (
    <>
      <button
        className={twMerge(
          "text-white py-2 px-4 bg-blueProd border-highlight border-2 w-fit rounded-md hover:bg-highlight ease-in-out duration-100 shadow-md shadow-[#000000] focus:outline-none focus:ring-1 focus:ring-highlight active:bg-darkHiglight",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
