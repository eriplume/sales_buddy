import { create } from 'zustand';
import { formatDate } from '@/utils/dateUtils';
import { Option } from '@/types';
import { showErrorNotification } from '@/utils/notifications';

type CustomerCounts = Record<string, number>;

type AddToTotalParams = {
  amount: number;
  number: number;
  customer: string;
};

type SubmitDataType = {
  dairy_record: {
    total_amount: number;
    total_number: number;
    count: number;
    date: string;
  };
  customer_counts: CustomerCounts;
};

type CalculationState = {
  totalAmount: number;
  totalNumber: number;
  count: number;
  customers: string[];
  options: Option[];
  customerTypeCounts: Record<string, number>;
  customerLabels: string;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  addToTotal: (params: AddToTotalParams) => void;
  submitData: () => SubmitDataType;
  fetchOptions: () => Promise<void>;
  clearData: () => void;
  calculateCustomerCounts: (customers: string[]) => Record<string, number>;
  generateCustomerLabels: (customerTypeCounts: Record<string, number>) => string;
};

const useCalculationStore = create<CalculationState>((set, get) => ({
  totalAmount: 0,
  totalNumber: 0,
  count: 0,
  customerTypeCounts: {}, // 各顧客タイプごとの選択回数 { '1': 2, '2': 1 } 
  customers: [], // 選択された客層 ['1', '2', '1'] 
  customerLabels: '', // 表示用に変換 "主婦: 2、 OL: 1"
  selectedDate: new Date(),
  options: [],

  // 日付の更新
  setSelectedDate: (date: Date) => {
    set({ selectedDate: date });
  },

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

  // クリアアクション
  clearData: () => set({ totalAmount: 0, totalNumber: 0, count: 0, customers: [], customerLabels: '', customerTypeCounts: {} }),

  // 送信アクション
  submitData: () => {
    const { totalAmount, totalNumber, count, customerTypeCounts, selectedDate } = get();
    const formattedDate = formatDate(selectedDate)
    const dairy_record = {
      total_amount: totalAmount,
      total_number: totalNumber,
      count,
      date: formattedDate,
    };
    const customer_counts = customerTypeCounts;
    return { dairy_record, customer_counts };
  },

  fetchOptions: async () => {
    if (get().options.length === 0) {
      try {
        const response = await fetch(`/api/customer_types`);
        if (!response.ok) { throw new Error('サーバーエラー'); }
        const optionsData = await response.json();
        set({ options: optionsData });
      } catch (error) {
        showErrorNotification('データの取得に失敗しました');
      }
    }
  },

  // customers配列を集計
  calculateCustomerCounts(customers: string[]): CustomerCounts {
    return customers.reduce((acc: CustomerCounts, cur: string) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {} as CustomerCounts);
  },

  // 集計した結果をラベル表示に変換
  generateCustomerLabels(customerTypeCounts) {
    const options = get().options; // 現在のオプションを取得
    return Object.entries(customerTypeCounts).map(([key, value]) => {
      const label = options.find(option => option.value.toString() === key)?.label || key;
      return `${label}: ${value}`;
    }).join('、 ');
  },
}));

export default useCalculationStore;