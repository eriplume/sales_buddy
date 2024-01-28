"use client"
import { ActionIcon } from "@mantine/core"
import { PencilSquareIcon, TrashIcon, XMarkIcon, ArrowPathIcon } from "@heroicons/react/24/outline"

type EditIconProps = {
  userId: number;
  editingId: number | null;
  value: string;
  setEditingId: (id: number | null ) => void;
  handleUpdate: (value: string) => Promise<void>
}

export default function EditIcon({userId, editingId, setEditingId, handleUpdate, value }: EditIconProps) {

  const handleEdit = (userId: number) => {
    setEditingId(userId);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <div className='flex pr-1 items-center'>

    {editingId ? 
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
          onClick={()=>handleEdit(userId)}
        >
          <PencilSquareIcon className='w-8 h-8 p-1' />
        </ActionIcon>
        <ActionIcon 
          variant="outline" 
          color="#f87171" 
          size="md" 
          className="shadow-md hover:text-red-600 transition-transform ml-2"
        >
          <TrashIcon className='w-8 h-8 p-1' />
        </ActionIcon>
      </>
    }
  </div>
  )
}
