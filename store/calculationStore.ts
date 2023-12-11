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
  count: number;
  customers: string[];
  options: Option[];
  customerTypeCounts: Record<string, number>;
  customerLabels: string;
  addToTotal: (params: AddToTotalParams) => void;
  calculateCustomerCounts: (customers: string[]) => Record<string, number>;
  generateCustomerLabels: (customerTypeCounts: Record<string, number>) => string;
};

type CustomerCounts = Record<string, number>;

type AddToTotalParams = {
  amount: number;
  number: number;
  customer: string;
};

const useCalculationStore = create<CalculationState>((set, get) => ({
  totalAmount: 0,
  totalNumber: 0,
  count: 0, // 客数カウンター
  customerTypeCounts: {}, // 各顧客タイプごとの選択回数 { '1': 2, '2': 1 } 
  customers: [], // 選択された客層 ['1', '2', '1'] 
  customerLabels: '', // 表示用に変換 "主婦: 2、 OL: 1"
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
    set((state) => {
      const newCustomers = [...state.customers, customer];
      const newCustomerTypeCounts = get().calculateCustomerCounts(newCustomers); // 集計関数を呼び出し
      const newCustomerLabels = get().generateCustomerLabels(newCustomerTypeCounts); // ラベル付き形式を生成
      return {
        totalAmount: state.totalAmount + Number(amount),
        totalNumber: state.totalNumber + Number(number),
        count: state.count + 1, // 顧客数をカウント
        customers: newCustomers,
        customerTypeCounts: newCustomerTypeCounts,
        customerLabels: newCustomerLabels, // 更新されたラベル付き形式をセット
      };
    });
  },
  // customers配列を集計する関数
  calculateCustomerCounts(customers: string[]): CustomerCounts {
    return customers.reduce((acc: CustomerCounts, cur: string) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {} as CustomerCounts);
  },
  // 集計した結果をラベルで表示する関数
  generateCustomerLabels(customerTypeCounts) {
    const options = get().options; // 現在のオプションを取得
    return Object.entries(customerTypeCounts).map(([key, value]) => {
      const label = options.find(option => option.value.toString() === key)?.label || key;
      return `${label}: ${value}`;
    }).join('、 ');
  },
}));

export default useCalculationStore;