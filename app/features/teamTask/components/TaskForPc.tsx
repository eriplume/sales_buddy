import { Task } from '@/types';
import TaskCard from './TaskCard';

type TaskProps = {
  chunkedTasks: Task[][];
  activePage: number;
  editableTaskIds: number[];
  setCurrentEditingTask: (task: Task) => void;
  open: () => void;
  close: () => void;
}

export default function TaskForPc({chunkedTasks, activePage, editableTaskIds, setCurrentEditingTask, open, close }: TaskProps) {
  return (
    <div className="flex flex-wrap">
      {chunkedTasks.length > 0 && chunkedTasks[activePage - 1].map((task) => (
        <div className="p-1 md:w-1/2 w-full" key={task.id}>
          <TaskCard 
            task={task} 
            editableTaskIds={editableTaskIds} 
            setCurrentEditingTask={setCurrentEditingTask} 
            open={open} 
            close={close}
          />
        </div>
      ))}
      {chunkedTasks.length === 0 && (
        <div className="text-center text-gray-500 py-5">タスクがありません</div>
      )}
    </div>
  )
}
