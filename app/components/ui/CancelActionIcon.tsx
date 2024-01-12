"use client"
import { Tooltip } from "@mantine/core";
import { XMarkIcon } from "@heroicons/react/24/outline";

type EditActionProps = {
  edit: boolean;
  setEdit: any
}

export default function CancelActionIcon({edit, setEdit}: EditActionProps) {
  return (
    <Tooltip label="キャンセル" arrowOffset={50} position="right" arrowSize={5} withArrow>
      <button onClick={() => setEdit(!edit)} className='p-1 hover:bg-gray-200'>
        <XMarkIcon className="w-6 h-6 text-gray-500"/>
      </button>
    </Tooltip>
  )
}
