"use client"
import { ActionIcon } from "@mantine/core"
import { TrashIcon } from "@heroicons/react/24/outline"

type DeleteIconProps = {
  id: number;
  handleDelete: (id: number) => Promise<void>
}

export default function DeleteIcon({ id, handleDelete }: DeleteIconProps) {
  return (
    <ActionIcon 
      variant="outline" 
      color="#f87171" 
      size="md" 
      className="shadow-md hover:text-red-600 transition-transform"
      onClick={()=>handleDelete(id)}
    >
      <TrashIcon className='w-8 h-8 p-1' />
    </ActionIcon>
  )
}
