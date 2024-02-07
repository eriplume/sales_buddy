import { create } from 'zustand';

type UserState = {
  id: number | undefined;
  notifications: boolean | undefined;
  teamId: number | undefined;
  teamName: string | undefined;
  admin: boolean | undefined;
  setId: (id: number) => void;
  setNotifications: (force: boolean) => void;
  setTeamId: (teamId: number) => void;
  setTeamName: (teamName: string) => void;
  setAdmin: (force: boolean) => void;
};

const useUserStore = create<UserState>((set) => ({
  id: undefined,
  notifications: undefined,
  teamId: undefined,
  teamName: undefined,
  admin: undefined,
  setId: (id) => set(() => ({ id })),
  setNotifications: (notifications) => set(() => ({ notifications })),
  setTeamId: (teamId) => set(() => ({ teamId })),
  setTeamName: (teamName) => set(() => ({ teamName })),
  setAdmin: (admin) => set(() => ({admin})),
}))

export default useUserStore;