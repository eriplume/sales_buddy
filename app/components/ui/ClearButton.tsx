import { Button } from '@mantine/core';
import { XCircleIcon } from "@heroicons/react/24/solid";

type ClearButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ClearButton({ onClick }: ClearButtonProps) {
  return (
    <Button type="button" variant="outline" color="gray" size="xs" onClick={onClick}>
      クリア
      <XCircleIcon className="w-5 h-5 ml-1 text-red-400" />
    </Button>
  )
}
