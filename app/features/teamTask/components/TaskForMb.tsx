"use client"
import { Task } from '@/types';
import { Accordion } from '@mantine/core';
import { CheckIcon } from '@heroicons/react/24/outline';
import CompleteCheckBox from './CompleteCheckBox';
import MemberIcon from '../../teamJoin/components/MemberIcon';
import TaskRate from './TaskRate';
import TaskDeadline from './TaskDeadline';
import CommentIcon from './CommentIcon';
import TaskActions from './TaskActions';
import TaskBadge from './TaskBadge';

type TaskProps = {
  chunkedTasks: Task[][];
  activePage: number;
  editableTaskIds: number[];
  setCurrentEditingTask: (task: Task) => void;
  open: () => void;
  close: () => void;
}

export default function TaskForMb({chunkedTasks, activePage, editableTaskIds, setCurrentEditingTask, open, close }: TaskProps) {

  return (
    <div className="p-1">
      <Accordion variant="contained" className='bg-white rounded-md'>
        {chunkedTasks.length > 0 && chunkedTasks[activePage - 1].map((task) => (
          <Accordion.Item key={task.id} value={task.title}>
            <Accordion.Control className='bg-white'>
              <div className='flex flex-row items-center'>
                <CompleteCheckBox task={task} />
                <TaskBadge task={task}/>
                <div className="text-gray-600 text-sm font-bold ml-2">{task.title}</div>
              </div>
            </Accordion.Control>
            <Accordion.Panel className='bg-white'>
              <div className="flex-grow p-1">
                <div className='flex flex-row items-center pt-3'>
                  <MemberIcon imageUrl={task.userImageUrl} userName={task.userName}/>
                  {task.isCompleted ? 
                    <>
                      <CheckIcon className='w-5 h-5 text-sky-700 ml-3 mr-1' />
                      <div className="text-gray-600 text-sm mr-2">{task.completedByName}</div>
                    </>
                  :
                    <TaskDeadline task={task}/>
                  }
                  <TaskRate task={task}/>
                </div>
                <div className='flex flex-row justify-end items-center pt-1 mt-1'> 
                  <CommentIcon taskId={task.id} comments={task.comments}/>
                  {editableTaskIds.includes(task.id) && 
                    <TaskActions task={task} setCurrentEditingTask={setCurrentEditingTask} open={open} close={close}/>
                  }
                </div>
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
        {chunkedTasks.length === 0 && (
          <div className="text-center text-gray-500 py-5">タスクがありません</div>
        )}
      </Accordion>
    </div>
  )
}