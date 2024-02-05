"use client"
import { ActionIcon } from "@mantine/core"
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline"

type TaskActionsIconProps = {
  editAction: () => void;
  deleteAction: () => Promise<void>
}

export default function ActionIcons({editAction, deleteAction}: TaskActionsIconProps) {
  return (
    <>
      <ActionIcon 
        variant="outline"
        color="#94a3b8" 
        size="md" 
        className="shadow-md hover:text-gray-500 transition-transform"
        onClick={editAction}
      >
        <PencilSquareIcon className='w-8 h-8 p-1' />
      </ActionIcon>

      <ActionIcon 
        variant="outline" 
        color="#94a3b8" 
        size="md" 
        className="shadow-md hover:text-gray-500 transition-transform ml-2"
        onClick={deleteAction}
      >
        <TrashIcon className='w-8 h-8 p-1' />
      </ActionIcon>
    </>
  )
}
