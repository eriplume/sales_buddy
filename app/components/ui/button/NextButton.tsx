import { Button } from '@mantine/core';
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

type NextButtonProps = {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  type?: "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function NextButton({ size, type, onClick }: NextButtonProps) {
  return (
    <Button size={size} type={type} variant="filled" color="#93c5fd" onClick={onClick} className='hover:shadow-md'>
      次へ
      <ChevronDoubleRightIcon className="w-5 h-5 ml-2" />
    </Button>
  )
}
