import { Button } from '@mantine/core';
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

type SubmitButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size: "xs" | "sm" | "md" | "lg" | "xl";
  type?: "submit";
};

export default function SubmitButton({ size, type, onClick }: SubmitButtonProps) {
  return (
    <Button type={type} size={size} variant="outline" color="#9ca3af" onClick={onClick} className="shadow-md hover:translate-y-1 hover:text-sky-700 transition-transform" >
      登録
      <PaperAirplaneIcon className="w-5 h-5 ml-1 text-blue-400" />
    </Button>
  )
}
