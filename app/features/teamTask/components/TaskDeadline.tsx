import { Task } from '@/types';
import { formatDateLayoutMMDD, isDeadlineSoon } from '@/utils/dateUtils';
import { ClockIcon } from '@heroicons/react/24/outline';

type TaskDeadlineProps = {
  task: Task;
};

export default function TaskDeadline({ task }: TaskDeadlineProps) {
    
  const deadlineColorClass = isDeadlineSoon(task.deadline) ? 'text-red-400' : 'text-gray-600';

  return (
    <>
      <ClockIcon className='w-5 h-5 text-gray-500 ml-3 mr-1' />
      <div className={`text-sm mr-3 lg:mr-5 ${deadlineColorClass}`}>{formatDateLayoutMMDD(task.deadline)}</div>
    </>
  )
}
