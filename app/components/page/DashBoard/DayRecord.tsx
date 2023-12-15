type SalesRecord = {
  average_spend: number
  count: number
  date: Date
  set_rate: number
  total_amount: number
  total_number: number
};

type DayRecordProps = {
  record: SalesRecord;
};

export default function DayRecord({ record }: DayRecordProps) {

  const formatCurrency = (amount :number) => {
    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(amount);
  }
    return (
      <>
      <div className="p-4">
        <div className="mb-2">売上金額：{formatCurrency(record.total_amount)}</div>
        <div className="mb-2">セット率：{record.set_rate}</div>
        <div className="mb-2">客単価：{formatCurrency(record.average_spend)}</div>
      </div>
      </>
    )
  }
