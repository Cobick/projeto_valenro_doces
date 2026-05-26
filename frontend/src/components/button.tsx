import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  children?: ReactNode;
};

export function Button({ title, ...rest }: Props) {
  return (
    <button
      className="
        bg-[var(--primary)]
        hover:bg-[var(--primary-hover)]
        text-white
        font-medium
        px-6
        py-3
        rounded-2xl
        transition-all
        duration-300
        shadow-lg
        hover:scale-105
      "
      {...rest}
    >
      {title}
    </button>
  );
}