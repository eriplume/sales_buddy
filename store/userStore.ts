import { create } from 'zustand';

type UserState = {
  notifications: boolean | undefined;
  teamId: number | undefined;
  teamName: string | undefined;
  admin: boolean | undefined;
  setNotifications: (force: boolean) => void;
  setTeam: (team: string) => void;
  setAdmin: (force: boolean) => void;
};

const useUserStore = create<UserState>((set) => ({
  notifications: undefined,
  teamId: undefined,
  teamName: undefined,
  admin: undefined,
  setNotifications: (notifications) => set(() => ({ notifications })),
  setTeam: (teamName) => set(() => ({ teamName })),
  setAdmin: (admin) => set(() => ({admin})),
}))

export default useUserStore;