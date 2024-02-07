"use client"
import { Task } from '@/types';
import { CheckIcon } from '@heroicons/react/24/outline';
import TaskActions from './TaskActions';
import MemberIcon from '../../teamJoin/components/MemberIcon';
import CommentIcon from './CommentIcon';
import CompleteCheckBox from './CompleteCheckBox';
import TaskRate from './TaskRate';
import TaskDeadline from './TaskDeadline';

type TaskCardProps = {
  task: Task;
  editableTaskIds: number[];
  setCurrentEditingTask: (task: Task) => void;
  open: () => void;
  close: () => void;
}

export default function TaskCard({ task, editableTaskIds, setCurrentEditingTask, open, close }: TaskCardProps) {
  const taskCardBorder = task.isGroupTask ? 'border-blue-100' : 'border-blue-50';

  return (
    <>
      <div className={`h-full flex items-center p-4 rounded-lg bg-white shadow-md border-4 ${taskCardBorder}`}>
        <div className='flex mr-4'>
          <CompleteCheckBox task={task} />
        </div>
        <div className="flex-grow">
          <div className="text-gray-600 text-md font-bold ml-2 lg:ml-4 mb-2">{task.title}</div>
          <div className='flex flex-row items-center border-t pt-3'>
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
      </div>
    </>
  )
}
