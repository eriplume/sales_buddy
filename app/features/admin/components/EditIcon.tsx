"use client"
import { ActionIcon } from "@mantine/core"
import { PencilSquareIcon, TrashIcon, XMarkIcon, ArrowPathIcon } from "@heroicons/react/24/outline"

type EditIconProps = {
  id: number;
  editingId: number | null;
  value: string;
  setEditingId: (id: number | null ) => void;
  setValue: ( value: string ) => void;
  handleUpdate: (value: string) => Promise<void>
  handleDelete: (id: number) => Promise<void>
  handleEdit: (id: number) => void;
}

export default function EditIcon({id, editingId, setEditingId, handleUpdate, handleDelete, handleEdit, value }: EditIconProps) {

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <div className='flex pr-1 items-center'>

      {editingId === id ? 
        <>
          <ActionIcon 
            variant="outline"
            color="#94a3b8" 
            size="md" 
            className="shadow-md hover:text-gray-600 transition-transform"
            onClick={()=>handleCancel()}
          >
            <XMarkIcon className='w-8 h-8 p-1' />
          </ActionIcon>
          <ActionIcon 
            variant="outline" 
            color="#60a5fa" 
            size="md" 
            className="shadow-md hover:text-blue-600 transition-transform ml-2"
            onClick={()=> handleUpdate(value)}
          >
            <ArrowPathIcon className='w-8 h-8 p-1' />
          </ActionIcon>
        </>
      :
        <>
          <ActionIcon 
            variant="outline"
            color="#60a5fa" 
            size="md" 
            className="shadow-md hover:text-blue-600 transition-transform"
            onClick={()=>handleEdit(id)}
          >
            <PencilSquareIcon className='w-8 h-8 p-1' />
          </ActionIcon>
          <ActionIcon 
            variant="outline" 
            color="#f87171" 
            size="md" 
            className="shadow-md hover:text-red-600 transition-transform ml-2"
            onClick={()=>handleDelete(id)}
          >
            <TrashIcon className='w-8 h-8 p-1' />
          </ActionIcon>
        </>
      }
    </div>
  )
}
