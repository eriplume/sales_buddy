export type SalesRecord = {
  average_spend: number;
  count: number;
  date: string;
  set_rate: number;
  total_amount: number;
  total_number: number;
};

export type WeeklyTarget = {
  target: number;
  start_date: string;
  end_date: string;
};

export type WeeklyReport = {
  content: string;
  start_date: string;
  end_date: string;
};

export type MonthlyReport = {
  id: number;
  content: string;
  month: string;
};

export type WeeklyRecord = {
  amount: number;
  number: number;
  count: number;
  setRate: number;
  average: number;
  weekEnd: string;
};

export type ResisteredDateRange = {
  startDate: string;
  endDate: string;
};

export type ProgressData = {
  progress: number;
  progressPercent: number;
};

export type JobRecord = {
  job: string;
  date: string;
};

export type CustomersRecord = Record<number, number>;

export type Option = {
  value: number;
  label: string;
};

export type UserImage = {
  image?: string;
  name?: string;
};

export type TeamInfo = {
  name: string;
  keyword: string;
};

export type Task = {
  id: number;
  title: string;
  isGroupTask: boolean;
  importance: number;
  deadline: Date;
  userId: number;
  teamId: number;
  userName: string;
  userImageUrl: string;
  isCompleted: boolean;
  completedByName: string | null;
  comments: Comment[];
};

export type Comment = {
  id: number;
  content: string;
  user_id: number;
  created_at: Date;
}

export type Member = {
  id: number;
  name: string;
  imageUrl: string;
};