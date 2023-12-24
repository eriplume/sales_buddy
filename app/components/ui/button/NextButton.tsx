import { Button } from '@mantine/core';
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

type NextButtonProps = {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function NextButton({ size, onClick }: NextButtonProps) {
  return (
    <Button size={size} variant="filled" color="rgba(147, 197, 253, 1)" onClick={onClick} className='hover:shadow-md'>
      次へ
      <ChevronDoubleRightIcon className="w-5 h-5 ml-2" />
    </Button>
  )
}
