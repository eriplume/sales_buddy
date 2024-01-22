'use client'
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import Form from './Form';
import JoinHelp from './JoinHelp';
import HelpMordal from '@/app/components/ui/HelpMordal';

export default function JoinButton() {
  const [opened, { open, close }] = useDisclosure(false);
  const [isCreationSuccess, setIsCreationSuccess] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={open} 
        className="inline-flex text-gray-700 bg-blue-200 border-0 py-3 px-7 focus:outline-none hover:bg-blue-300 rounded-lg text-sm items-center shadow-md"
      >
        参加する
      </button>

      <Modal
        opened={opened}
        onClose={close}
        centered
        size="auto"
        withCloseButton={false}
      >
        <div className="flex flex-col w-full px-6 pb-5">
          <div className="flex flex-row items-center w-full mb-5 pb-1">
            <span className="ml-1 mr-3 text-lg text-gray-700 mt-1">招待されたチームに参加する</span>
            <HelpMordal>
              <JoinHelp />
            </HelpMordal>
          </div>
          <Form apiEndpoint="joinTeam" buttonLabel="チームに参加する" isCreatingGroup={false} isCreationSuccess={isCreationSuccess} setIsCreationSuccess={setIsCreationSuccess}/>
        </div>
      </Modal>
    </>
  )
}
