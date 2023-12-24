'use client'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import TargetInput from './TargetInput';
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function CreateTarget() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button size="xs" variant="outline" color="#64748b" onClick={open}>
        登録する
        <CursorArrowRaysIcon className="w-5 h-5 ml-1 text-blue-400" />
      </Button>
      <Modal opened={opened} onClose={close} centered size="xs">
        <TargetInput close={close} />
      </Modal>
    </>
  )
}
