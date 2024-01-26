import { create } from 'zustand';
import { Member } from '@/types';

type TeamState = {
  members: Member[];
  setMembers: (members: Member[]) => void;
}

const useTeamStore = create<TeamState>(set => ({
  members: [],
  setMembers: (members) => set({ members }),
}));

export default useTeamStore;
