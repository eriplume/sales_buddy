import { Button } from '@mantine/core';
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function SubmitButton() {
  return (
    <Button type="submit" variant="outline" color="gray" size="xs">
      登録
      <PaperAirplaneIcon className="w-5 h-5 ml-1 text-blue-400" />
    </Button>
  )
}
