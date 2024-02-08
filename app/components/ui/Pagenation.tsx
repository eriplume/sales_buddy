import { Task } from '@/types';
import { ActionIcon } from "@mantine/core"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

type PagenationProps = {
  activePage: number; 
  setActivePage: (page: number | ((prevPage: number) => number)) => void;
  chunkedTasks: Task[][]
  filteredTasks: Task[] 
  tasksPerPage: number;
}

export default function Pagenation({ activePage, setActivePage, chunkedTasks, filteredTasks, tasksPerPage }: PagenationProps) {

  const goToPrevPage = () => {
    setActivePage((prevPage: number) => Math.max(prevPage - 1, 1));
  };
  
  const goToNextPage = () => {
    setActivePage((prevPage: number) => Math.min(prevPage + 1, chunkedTasks.length));
  };

  return (
    <div className="flex items-center border-gray-200">
      <div className="flex flex-row justify-between items-center">

        <div className='flex flex-row'>
          <p className="text-sm text-gray-700">
            <span className="font-medium">{(activePage - 1) * tasksPerPage + 1}</span> ~ 
            <span className="font-medium">{Math.min(activePage * tasksPerPage, filteredTasks.length)}</span> of{' '}
            <span className="font-medium">{filteredTasks.length}</span>
          </p>
        </div>

        <div className="flex flex-row ml-2">
          <ActionIcon 
            variant="outline"
            color="#94a3b8" 
            size="md" 
            className="hover:text-gray-500 transition-transform"
            onClick={goToPrevPage}
          >
            <ChevronLeftIcon className='w-9 h-9 p-1' />
          </ActionIcon>
          <ActionIcon 
            variant="outline"
            color="#94a3b8" 
            size="md" 
            className="hover:text-gray-500 transition-transform ml-2" 
            onClick={goToNextPage}
          >
            <ChevronRightIcon className='w-9 h-9 p-1' />
          </ActionIcon>
        </div>
        
      </div>
    </div>
  )
}
