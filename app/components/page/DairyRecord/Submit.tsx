"use client"
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react';
import axios from 'axios'
import useCalculationStore from '@/store/calculationStore';
import useDashboardStore from '@/store/dashboardStore';
import CurrentData from './CurrentData';
import ClearButton from '../../ui/ClearButton';
import SubmitButton from '../../ui/SubmitButton';
import CurrentDate from './CurrentDate';
import CustomersList from './CustomersList';
import { Fieldset } from '@mantine/core';
import { showErrorNotification } from '@/utils/notifications';
import { showSuccessNotification } from '@/utils/notifications';

export default function Submit() {
  const router = useRouter()
  const { data: session } = useSession();
  const railsUserId = session?.user?.railsId;
  const { clearData, submitData } = useCalculationStore();
  const { fetchData } = useDashboardStore((state) => ({fetchData: state.fetchData,}));

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
      showSuccessNotification(`${date}の売上を登録しました`);
      clearData();
      if (railsUserId !== undefined) {
        fetchData(railsUserId, true);
      }
      router.push('/dashboard');
    } catch (error) {
      showErrorNotification('送信に失敗しました。もう一度お試しください。');
      console.error("Failed to fetch", error);
    }
  };

  return (
    <>
      <Fieldset legend="現在の合計" className='w-full mt-3 max-w-lg' style={{ overflowX: 'auto' }}>
        <div className="flex flex-col space-y-4 w-full">
          <CurrentDate/>
          <CurrentData/>

          {/* md以上のみ表示 */}
          <div className="hidden md:block"> 
            <CustomersList/>
          </div>

          <div className="flex justify-end mt-4 gap-3">
            <ClearButton onClick={clearData}/>
            <SubmitButton onClick={handleSubmit}/>
          </div>
        </div>
      </Fieldset>
    </>
  )
}
