import { Button } from '@mantine/core';
import { XCircleIcon } from "@heroicons/react/24/solid";

type ClearButtonProps = {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  type?: "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ClearButton({ size, type, onClick }: ClearButtonProps) {
  return (
    <Button size={size} type={type} variant="outline" color="#9ca3af" onClick={onClick}>
      クリア
      <XCircleIcon className="w-5 h-5 ml-1" />
    </Button>
  )
}
