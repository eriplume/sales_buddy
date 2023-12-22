import { Button } from '@mantine/core';
import { ForwardIcon } from "@heroicons/react/24/solid";

type SkipButtonProps = {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  children: string;
  type?: "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function SkipButton({ size, type, onClick, children }: SkipButtonProps) {
  return (
    <Button size={size} type={type} variant="outline" color="#9ca3af" onClick={onClick}>
      {children}
      <ForwardIcon className="w-5 h-5 ml-2 text-yellow-300" />
    </Button>
  )
}
