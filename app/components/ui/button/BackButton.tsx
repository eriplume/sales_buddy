import { Button } from '@mantine/core';
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";

type BackButtonProps = {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  type?: "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function BackButton({ size, type, onClick }: BackButtonProps) {
  return (
    <Button size={size} type={type} variant="outline" color="#9ca3af" onClick={onClick}>
      <ChevronDoubleLeftIcon className="w-5 h-5 mr-2 text-gray-600" />
      戻る
    </Button>
  )
}
