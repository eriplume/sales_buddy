import axios from 'axios'
import { getThisWeekRange, formatDateMD } from "@/utils/dateUtils";
import { showSuccessNotification, showErrorNotification } from "@/utils/notifications";
import useWeeklyStore from '@/store/weeklyStore';
import useDashboardStore from "@/store/dashboardStore";
import { CalendarIcon } from "@heroicons/react/24/outline";
import SubmitButton from "../../ui/button/SubmitButton"
import TargetInputForm from "../WeeklyTarget/TargetInputForm"

type TargetInputProps = {
  close: () => void;
};

export default function TargetInput({close} :TargetInputProps) {
  const { target, clearData } = useWeeklyStore();
  const { fetchWeeklyTarget } = useDashboardStore((state) => ({fetchWeeklyTarget: state.fetchWeeklyTarget}));
  const { start, end } = getThisWeekRange();

  const handleSubmit = async () => {

    if (target !== 0) {
      try {
        await axios.post(`/api/weeklytarget`, {
          weekly_target: {
            target: target * 10000,
            start_date: start,
            end_date: end,
          },
        });
        showSuccessNotification(`登録しました`);
        fetchWeeklyTarget(true);
        close();
        clearData();
      } catch (error) {
        showErrorNotification('目標の登録に失敗しました');
        console.error("Failed to send weekly target", error);
      }
    } else {
      showErrorNotification('目標を入力してください');
    }
  };

  return (
    <div className="px-2">
      <div className='flex flex-row justify-center items-start w-full text-lg pb-2 font-bold text-gray-700 border-b-2'>
        <div className='flex w-full justify-center items-center'>
          <CalendarIcon className="w-8 h-8 text-sky-800 mr-2" />
          {formatDateMD(start)} 〜 {formatDateMD(end)}の目標
        </div>
      </div>
      <div className="flex p-2 mx-5 justify-center">
        <TargetInputForm />
      </div>
      <div className="flex p-2 mr-5 justify-end mt-2">
        <SubmitButton size="sm" type="submit" onClick={handleSubmit} />
      </div>
    </div>
  )
}
