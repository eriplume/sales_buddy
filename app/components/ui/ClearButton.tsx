import { Button } from '@mantine/core';
import { XCircleIcon } from "@heroicons/react/24/solid";

export default function ClearButton() {
  return (
    <Button type="submit" variant="outline" color="gray" size="xs">
      クリア
      <XCircleIcon className="w-5 h-5 ml-1 text-red-400" />
    </Button>
  )
}
