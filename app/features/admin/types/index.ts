// admin機能で使うtype

export type UserStatus = {
  id: number;
  name: string;
  groupId: number | null;
  roleValue: number;
};
  
export type CustomerType = {
  id: number;
  name: string;
}

export type DairyRecord = {
  id: number;
  totalAmount: number;
  totalNumber: number;
  count: number;
  setRate: number;
  averageSpend: number;
  date: Date;
  userId: number;
}

export type WeeklyReport = {
  id: number;
  startDate: Date;
  endDate: Date;
  content: string;
  userId: number;
}
