import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonNeutral extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function ButtonNeutral({
  children,
  className,
  ...props
}: ButtonNeutral) {
  return (
    <>
      <button
        className={twMerge(
          "text-[#000000] py-2 px-4 bg-yellowProd border-highlight border-2 w-fit rounded-md hover:bg-highlight ease-in-out duration-100 shadow-md shadow-[#000000]",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
