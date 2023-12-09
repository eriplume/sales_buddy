import { create } from 'zustand';
import axios from 'axios'
import dayjs from 'dayjs';

type Option = {
  value: number;
  label: string;
};

type CalculationState = {
  totalAmount: number;
  totalNumber: number;
  customerCount: number;
  customers: string[];
  options: Option[];
  addToTotal: (params: AddToTotalParams) => void;
};

type AddToTotalParams = {
  amount: number;
  number: number;
  customer: string;
};

const useCalculationStore = create<CalculationState>((set, get) => ({
  totalAmount: 0,
  totalNumber: 0,
  customerCount: 0,
  customers: [],
  selectedDate: new Date(),
  options: [
    { value: 1, label: "主婦" },
    { value: 2, label: "OL" },
    { value: 3, label: "若ママ" },
    { value: 4, label: "マダム" },
    { value: 5, label: "アッパー" },
    { value: 6, label: "学生" },
    { value: 7, label: "観光客" },
    { value: 8, label: "ギフト" },
    { value: 9, label: "その他" },
  ],

  // 加算アクション
  addToTotal: ({ amount, number, customer }: AddToTotalParams) => {
    set((state) => ({
      totalAmount: state.totalAmount + Number(amount),
      totalNumber: state.totalNumber + Number(number),
      customers: [...state.customers, customer],
      customerCount: state.customerCount+ 1
    }));
  },
}));

export default useCalculationStore;