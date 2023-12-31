"use client"
import { useRouter } from 'next/navigation'
import axios from 'axios'
import useCalculationStore from '@/store/calculationStore';
import useDashboardStore from '@/store/dashboardStore';
import { showErrorNotification, showSuccessNotification } from '@/utils/notifications';
import CurrentData from './CurrentData';
import ClearButton from '../../ui/button/ClearButton';
import SubmitButton from '../../ui/button/SubmitButton';
import CurrentDate from './CurrentDate';
import CustomersList from './CustomersList';
import { Tabs } from '@mantine/core';
import { TriangleIcon } from '../../ui/icon/Triangle';

export default function Submit() {
  const router = useRouter()
  const { clearData, submitData } = useCalculationStore();
  const { fetchSalesRecord } = useDashboardStore((state) => ({fetchSalesRecord: state.fetchSalesRecord,}));

  const handleSubmit = async () => {
    const { dairy_record, customer_counts } = submitData();

    if (Object.keys(customer_counts).length === 0) {
      const isConfirmed = confirm("売上が0です。本当に登録しますか？");
      if (!isConfirmed) {
        return;
      }
    }
    
    try {
      const response = await axios.post(`/api/dairyrecord`, { 
        dairy_record,
        customer_counts
      });

      // response.dataから日付を取得
      const date = response.data.dairy_record.date;
      fetchSalesRecord(true);
      router.push('/dashboard');
      showSuccessNotification(`${date}の売上を登録しました`);
      clearData();
    } catch (error) {
      showErrorNotification('送信に失敗しました。もう一度お試しください。');
      console.error("Failed to fetch", error);
    }
  };

  return (
    <>
      <Tabs variant="outline" defaultValue="sales" className='w-full mt-3 max-w-lg'>
        <Tabs.List>
          <div className="bg-white text-gray-500 rounded-sm">
            <Tabs.Tab value="sales" leftSection={<TriangleIcon className="w-3 h-3 ml-2 text-blue-300"/>}>
              <div className='flex flex-row mt-1 mr-2'>
                <div className="text-xs mr-1">STEP3.</div>
                <div className="text-xs text-gray-800">現在の合計値</div>
              </div>
            </Tabs.Tab>
          </div>
          <div className="bg-white text-gray-500"></div>
        </Tabs.List>
        <Tabs.Panel value="sales">
          <div className="bg-white px-7 pb-3 shadow-md rounded-b-sm border-x flex flex-col">
            <div className="flex flex-col px-2 pb-3 pt-5 space-y-5 w-full">
              <CurrentDate/>
              <CurrentData/>
              {/* md以上のみ表示 */}
              <div className="hidden md:block"> 
                <CustomersList/>
              </div>
              <div className="flex justify-center mt-4 gap-4">
                <ClearButton size="sm" onClick={clearData}/>
                <SubmitButton size="sm" type="submit" onClick={handleSubmit}/>
              </div>
            </div>
          </div>
        </Tabs.Panel>
      </Tabs>
    </>
  )
}
