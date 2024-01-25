import { create } from 'zustand';
import { Task } from '@/types';

type TaskState = {
  userTasks: Task[];
  setUserTasks:(tasks: Task[]) => void;
  teamTasks: Task[];
  setTeamTasks: (tasks: Task[]) => void;
};

const useTaskStore = create<TaskState>((set) => ({
  teamTasks: [],
  setTeamTasks: (teamTasks) => set(() => ({ teamTasks })),
  userTasks: [],
  setUserTasks:(userTasks) => set(() => ({ userTasks })),
}))

export default useTaskStore;