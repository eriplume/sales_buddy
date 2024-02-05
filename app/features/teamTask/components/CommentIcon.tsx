"use client"
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { ChatBubbleOvalLeftIcon, PencilIcon } from "@heroicons/react/24/outline"
import Comments from './Comments';
import CommentForm from './CommentForm';
import { Comment } from '@/types';

type CommentProps = {
  taskId: number;
  comments: Comment[];
}

export default function CommentIcon({taskId, comments}: CommentProps) {
  const [opened, { open, close }] = useDisclosure(false);

  const renderModalTitle = () => {
    return (
      <>
        <div className='flex flex-row items-start w-full pt-4 pr-22 mr-16 mb-1 text-md font-bold text-gray-600'>
          <div className='flex w-full ml-2 items-center'>
            <ChatBubbleOvalLeftIcon className="w-8 h-8 text-gray-500 mr-2" />
            コメント
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className='flex mr-2 items-center'>
        <ChatBubbleOvalLeftIcon className='w-7 h-7 text-gray-400' />
        <div className="text-md text-sky-800 underline cursor-pointer" onClick={open}>({comments.length})</div>
      </div>

      <Modal
        opened={opened}
        onClose={close}
        centered
        size="md"
        title={renderModalTitle()}
      >
        <div className="flex flex-col p-2 ">
          <CommentForm taskId={taskId}/>
          <Comments comments={comments}/>
        </div>
      </Modal>
    </>
  )
}
