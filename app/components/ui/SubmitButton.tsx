import { Button } from '@mantine/core';
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

type SubmitButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function SubmitButton({ onClick }: SubmitButtonProps) {
  return (
    <Button type="submit" variant="outline" color="gray" size="xs" onClick={onClick}>
      登録
      <PaperAirplaneIcon className="w-5 h-5 ml-1 text-blue-400" />
    </Button>
  )
}
