import { create } from 'zustand';
import { z, ZodError } from 'zod';
import { getReportDateRange } from '@/utils/dateUtils';
import { getTargetDateRange } from '@/utils/dateUtils';
import { formatDate } from '@/utils/dateUtils';

const targetSchema = z.object({
  target: z.number().min(1).max(200),
});
const contentSchema = z.object({
  content: z.string().min(1).max(300) .refine(content => content.trim().length > 0),
});

const initialReportDateRange = getReportDateRange();
const initialTargetDateRange = getTargetDateRange();

type WeeklyReportData = {
  weekly_report: {
    content: string;
    start_date: string;
    end_date: string;
  }
};

type WeeklyTargetData = {
  weekly_target : {
    target: number;
    start_date: string;
    end_date: string;
  };
};

type WeeklyState = {
  content: string;
  target: number;
  contentDateRange: [Date, Date];
  targetDateRange: [Date, Date];
  setContent: (content: string) => void;
  setTarget: (target: number) => void;
  setContentDateRange: (range: [Date , Date]) => void;
  setTargetDateRange: (range: [Date, Date]) => void;
  validateContent: () => { success: boolean; data?: any; error?: ZodError };
  validateTarget: () => { success: boolean; data?: any; error?: ZodError };
  getWeeklyReportData: () => WeeklyReportData;
  getWeeklyTargetData: () => WeeklyTargetData;
};
  
const useWeeklyStore = create<WeeklyState>((set, get) => ({
  content: '',
  target: 0,
  contentDateRange: initialReportDateRange,
  targetDateRange: initialTargetDateRange,
  setContent: (content) => set({ content }),
  setTarget: (target) => set({ target }),
  setContentDateRange: (range) => set({ contentDateRange: range }),
  setTargetDateRange: (range) => set({ targetDateRange: range }),
  validateContent: () => contentSchema.safeParse({ content: get().content }),
  validateTarget: () => targetSchema.safeParse({ target: get().target }),
  getWeeklyReportData: () => {
    const { content, contentDateRange } = get();
    const weekly_report = {
      content,
      start_date: formatDate(contentDateRange[0]),
      end_date: formatDate(contentDateRange[1]),
    }
    return { weekly_report };
  },
  getWeeklyTargetData: () => {
    const { target, targetDateRange } = get();
    const weekly_target = {
      target: target * 10000, // 万単位に変換
      start_date: formatDate(targetDateRange[0]),
      end_date: formatDate(targetDateRange[1]),
    };
    return { weekly_target };
  },
}));
  
export default useWeeklyStore ;