import { create } from 'zustand';
import { z, ZodError } from 'zod';

// バリデーションスキーマ定義
const targetSchema = z.object({
  target: z.number().min(1),
});
const contentSchema = z.object({
  content: z.string().min(1).max(200),
});

type WeeklyState = {
  content: string;
  target: number;
  setContent: (content: string) => void;
  setTarget: (target: number) => void;
  validateContent: () => { success: boolean; data?: any; error?: ZodError };
  validateTarget: () => { success: boolean; data?: any; error?: ZodError };
};
  
const useWeeklyStore = create<WeeklyState>((set, get) => ({
  content: '',
  target: 0,
  setContent: (content) => set({ content }),
  setTarget: (target) => set({ target }),
  validateContent: () => contentSchema.safeParse({ content: get().content }),
  validateTarget: () => targetSchema.safeParse({ target: get().target }),
}))
  
export default useWeeklyStore ;