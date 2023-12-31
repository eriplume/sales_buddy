"use client"
import { useDisclosure } from '@mantine/hooks';
import { Modal, ActionIcon } from '@mantine/core';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export default function HelpMordal({children}: any) {
  const [opened, { open, close }] = useDisclosure(false);
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
      <Modal opened={opened} onClose={close} centered size="auto">
        {children}
      </Modal>
    </>
  )
}
