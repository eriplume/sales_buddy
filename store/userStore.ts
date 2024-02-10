import { create } from 'zustand';

type UserState = {
  id: number | undefined;
  notifications: boolean | undefined;
  taskNotifications: boolean | undefined;
  teamId: number | null | undefined;
  teamName: string | null | undefined;
  admin: boolean | undefined;
  setId: (id: number) => void;
  setNotifications: (force: boolean) => void;
  setTaskNotifications: (force: boolean) => void;
  setTeamId: (teamId: number | null) => void;
  setTeamName: (teamName: string | null) => void;
  setAdmin: (force: boolean) => void;
};

const useUserStore = create<UserState>((set) => ({
  id: undefined,
  notifications: undefined,
  taskNotifications: undefined,
  teamId: undefined,
  teamName: undefined,
  admin: undefined,
  setId: (id) => set(() => ({ id })),
  setNotifications: (notifications) => set(() => ({ notifications })),
  setTaskNotifications: (taskNotifications) => set(() => ({ taskNotifications })),
  setTeamId: (teamId) => set(() => ({ teamId })),
  setTeamName: (teamName) => set(() => ({ teamName })),
  setAdmin: (admin) => set(() => ({admin})),
}))

export default useUserStore;