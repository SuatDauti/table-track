import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

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
      <button {...props} className={twMerge("text-white", className)}>
        {children}
      </button>
    </>
  );
}
