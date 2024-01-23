"use client"
import { useDisclosure } from '@mantine/hooks';
import { ActionIcon, Modal } from '@mantine/core';
import { PlusIcon, PencilIcon } from "@heroicons/react/24/outline"
import InputForm from './InputForm';

export default function CreateTask() {
  const [opened, { open, close }] = useDisclosure(false);

  const renderModalTitle = () => {
    return (
      <>
        <div className='flex flex-row items-start w-full pt-4 pr-22 mr-16 mb-1 text-md font-bold text-gray-600'>
          <div className='flex w-full ml-2 items-center'>
            <PencilIcon className="w-8 h-8 text-gray-500 mr-2" />
            タスクを作成する
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className='flex flex-row items-center pb-3'>
        <div className='text-sm text-gray-600 mr-2'>タスクを追加する</div>
        <ActionIcon variant="outline" color="#94a3b8" size="md" onClick={open} className="shadow-md hover:text-sky-700 transition-transform">
          <PlusIcon className='w-12 h-12 p-1' />
        </ActionIcon>
      </div>

      <Modal
        opened={opened}
        onClose={close}
        centered
        size="md"
        title={renderModalTitle()}
      >
        <div className="flex w-full px-6 py-4">
          <InputForm endpoint='createTask'/>
        </div>
      </Modal>
    </>
  )
}
