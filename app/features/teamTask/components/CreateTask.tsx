"use client"
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
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

  const initialValues = {
    isTeamTask: '',
    title: '',
    importance: 0,
    deadline: new Date(),
  }

  return (
    <>
      <div className='flex flex-row items-center bg-white'>
        <Button size="sm" variant="outline" color="#9ca3af" onClick={open}>
          NEW
          <PlusIcon className="w-5 h-5 ml-1 text-sky-700" />
        </Button>
      </div>

      <Modal
        opened={opened}
        onClose={close}
        centered
        size="md"
        title={renderModalTitle()}
      >
        <div className="flex w-full px-6 py-4">
          <InputForm endpoint='createTask' initialValues={initialValues} close={close} label="追加する"/>
        </div>
      </Modal>
    </>
  )
}
