import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function ButtonAction({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <>
      <button
        className={twMerge(
          " text-white border-2 w-fit mt-5 ml-5 hover:text-redProd border-md rounded-md",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
