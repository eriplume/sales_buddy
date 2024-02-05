"use client"
import { Comment } from '@/types';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { ChatBubbleOvalLeftIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline"
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Comments from './Comments';
import CommentForm from './CommentForm';

type CommentProps = {
  taskId: number;
  comments: Comment[];
}

export default function CommentIcon({taskId, comments}: CommentProps) {
  const [opened, { open, close }] = useDisclosure(false);

  const initialValues = {
    content: '',
  }

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

  const icon = <PlusCircleIcon className="w-5 h-5 text-blue-400" />;

  return (
    <>
      <div className='flex mr-2 items-center'>

      <button 
        onClick={open}
        className="inline-flex bg-white border border-gray-400 px-2 shadow-md hover:text-gray-500 transition-transform focus:outline-none hover:bg-gray-50 rounded-md text-sm items-center cursor-pointer"
      >
        <ChatBubbleOvalLeftEllipsisIcon className='w-5 h-5 text-gray-400 my-1' />
        <div className="text-md text-gray-500">({comments.length})</div>
      </button>



        {/* <ChatBubbleOvalLeftEllipsisIcon className='w-6 h-6 text-gray-400' />
        <div className="text-lg text-gray-500 underline cursor-pointer" onClick={open}>({comments.length})</div> */}
      </div>

      <Modal
        opened={opened}
        onClose={close}
        centered
        size="md"
        title={renderModalTitle()}
      >
        <div className="flex flex-col p-2 ">
          <CommentForm 
            taskId={taskId} 
            initialValues={initialValues} 
            endpoint='createComment' 
            label="追加する"
            icon={icon}
          />
          <Comments comments={comments} taskId={taskId}/>
        </div>
      </Modal>
    </>
  )
}
