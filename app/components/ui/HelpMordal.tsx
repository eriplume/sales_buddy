"use client"
import { useDisclosure } from '@mantine/hooks';
import { Modal, ActionIcon } from '@mantine/core';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export default function HelpMordal({children}: any) {
  const [opened, { open, close }] = useDisclosure(false);

  const renderModalTitle = () => {
      return (
        <>
          <div className='flex flex-row items-start w-full pt-4 pr-22 mr-16 mb-1 text-md font-bold text-gray-600'>
            <div className='flex w-full mr-12 ml-2 items-center'>
              <QuestionMarkCircleIcon  className="w-8 h-8 text-gray-500 mr-2" />
              使い方
            </div>
          </div>
        </>
      );
  };

  return (
    <>
      <ActionIcon
        variant="transparent"
        size="md"
        radius="lg"
        color="#e2e8f0"
        aria-label="Settings" 
        className="shadow-md hover:translate-y-1 hover:text-sky-700 transition-transform"
        onClick={open}
      >
        <QuestionMarkCircleIcon className="w-7 h-7 text-gray-400 hover:text-sky-700"/>
      </ActionIcon>
      <Modal opened={opened} onClose={close} title={renderModalTitle()} centered size="auto">
        {children}
      </Modal>
    </>
  )
}
