"use client"
import { Tooltip } from "@mantine/core";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

type EditActionProps = {
  edit: boolean;
  setEdit: (edit: boolean) => void;
};

export default function EditActionIcon({edit, setEdit}: EditActionProps) {
  return (
    <Tooltip label="編集" arrowOffset={50} position="right" arrowSize={5} withArrow>
      <button onClick={() => setEdit(!edit)} className='p-1 hover:bg-gray-200'>
        <PencilSquareIcon className="w-6 h-6 text-gray-500"/>
      </button>
    </Tooltip>
  )
}
