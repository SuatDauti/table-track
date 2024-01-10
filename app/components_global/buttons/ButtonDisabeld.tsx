import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonDisabeld extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function ButtonDisabeld({
  children,
  className,
  ...props
}: ButtonDisabeld) {
  return (
    <>
      <button
        className={twMerge(
          "text-grayProd py-2 px-4 bg-white border-highlight border-2 w-fit rounded-md hover:bg-highlight ease-in-out duration-100 shadow-md shadow-[#000000]",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
