import { formatCurrency } from "@/utils/currencyUtils";

type MonthlyRecordProps = {
  amount: number;
  number: number; 
  count: number;
  setRate: number;
  average: number;
};

export default function MonthlyRecord({amount, number, count, setRate, average} :MonthlyRecordProps) {
  return (
    <>
      <div>トータル金額: {formatCurrency(amount)}</div>
      <div>トータル点数: {number}</div>
      <div>トータル客数: {count}</div>
      <div>セット率: {setRate.toFixed(1)}</div>
      <div>客単価: {formatCurrency(average)}</div>
    </>
  )
}
