import { create } from 'zustand';

type UserState = {
  notifications: boolean | undefined;
  team: string | undefined;
  setNotifications: (force: boolean) => void;
  setTeam: (team: string) => void;
};

const useUserStore = create<UserState>((set, get) => ({
  notifications: undefined,
  team: undefined,
  setNotifications: (notifications) => set(() => ({ notifications })),
  setTeam: (team) => set(() => ({ team })),
}))

export default useUserStore;