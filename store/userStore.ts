import { create } from 'zustand';

type UserState = {
  notifications: boolean | undefined;
  teamId: number | undefined;
  teamName: string | undefined;
  setNotifications: (force: boolean) => void;
  setTeam: (team: string) => void;
};

const useUserStore = create<UserState>((set, get) => ({
  notifications: undefined,
  teamId: undefined,
  teamName: undefined,
  setNotifications: (notifications) => set(() => ({ notifications })),
  setTeam: (teamName) => set(() => ({ teamName })),
}))

export default useUserStore;