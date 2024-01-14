"use client"
import { CopyButton, ActionIcon, Tooltip} from '@mantine/core';
import { DocumentDuplicateIcon, CheckIcon } from "@heroicons/react/24/outline";

type CopyProps = {
  value: string;
};

export default function CopyActionButton({value}: CopyProps) {
  return (
    <CopyButton value={value} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
            {copied ? (
              <CheckIcon className='w-6 h-6' />
            ) : (
              <DocumentDuplicateIcon className='w-6 h-6' />
            )}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}