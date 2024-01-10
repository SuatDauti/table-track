import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

//Change interface name when creating other buttons

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function ButtonScaffholding({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <>
      <button className={twMerge("", className)} {...props}>
        {children}
      </button>
    </>
  );
}
