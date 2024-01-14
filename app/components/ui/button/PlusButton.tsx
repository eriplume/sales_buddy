import { Button } from '@mantine/core';
import { PlusCircleIcon } from "@heroicons/react/24/solid";

type PlusButtonProps = {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  children: string;
  type?: "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function PlusButton({ size, type, onClick, children }: PlusButtonProps) {
  return (
    <Button size={size} type={type} variant="outline" color="#9ca3af" onClick={onClick}>
      {children}
      <PlusCircleIcon className="w-5 h-5 ml-1 text-blue-400" />
    </Button>
  )
}
