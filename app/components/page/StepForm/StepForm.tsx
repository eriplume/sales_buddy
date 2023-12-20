"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Button } from '@mantine/core';
import axios from 'axios'
import Target from './Target';
import Report from './Report';
import Confirmation from './Confirmation';
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { ForwardIcon } from "@heroicons/react/24/solid";
import StepperIcon from './StepperIcon';
import useWeeklyStore from '@/store/weeklyStore';
import { showErrorNotification } from '@/utils/notifications';
import { showSuccessNotification } from '@/utils/notifications';

export default function StepForm() {
  const router = useRouter()
  const { target, setTarget, clearData, validateTarget, validateContent, getWeeklyReportData, getWeeklyTargetData } = useWeeklyStore();

  //アクティブなステップの管理
  const [active, setActive] = useState(0);

  function validateStep(step :number) {
    switch (step) {
      case 0:
        return {
          success: validateContent().success,
          errorMessage: '1〜300文字で週間レポートを入力してください'
        };
      case 1:
        return {
          success: validateTarget().success,
          errorMessage: '目標金額に0は設定できません'
        };
      default:
        return { success: true, errorMessage: '' };
    }
  }

  const nextStep = () => {
    const validationResult = validateStep(active);
    if (!validationResult.success) {
      showErrorNotification(validationResult.errorMessage, '入力内容を確認してください');
      return;
    }
    setActive((current) => (current < 3 ? current + 1 : current));
  };

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const handleSkip = () => {
    setActive(2);
    setTarget(0);
    showErrorNotification('目標の入力をスキップしました');
  }

  const handleSubmit = async () => {
    const { weekly_report } = getWeeklyReportData();
    const { weekly_target } = getWeeklyTargetData();
    
    try {
      await axios.post(`/api/weeklyreport`, { weekly_report });
    } catch(error) {
      showErrorNotification('レポートの登録に失敗しました。もう一度お試しください。');
      console.error("Failed to send weekly report", error);
      return;
    }

    try {
      if (target !== 0) {
        await axios.post(`/api/weeklytarget`, { weekly_target });
      }
    } catch (error) {
      showSuccessNotification(`レポートを登録しました`);
      showErrorNotification('お手数ですが目標設定ページより再度登録してください', '目標の登録に失敗しました');
      console.error("Failed to send weekly target", error);
      router.push('/dashboard');
      clearData();
      return; 
    }
    showSuccessNotification(`登録しました`);
    router.push('/dashboard');
    clearData();
  };

  return (
    <>
      <div>
        {/* ステッパー */}
          <StepperIcon active={active}/>

        {/* コンテンツ */}
        <div>
          {active === 0 && (
            <div className='flex flex-col justify-center'>
              <Report/>
            </div>
          )}
          {active === 1 && (
            <div className='flex flex-col justify-center'>
              <Target />
            </div>
          )}
          {active === 2 && (
            <div className='flex flex-col justify-center'>
              <Confirmation/>
            </div>
          )}
        </div>

        {/* ボタン */}
        <div className='flex flex-col md:flex-row justify-center pt-2'>

          { active == 1 && (
            <div className="flex justify-center md:justify-end mt-4">
              <Button size="sm" variant="outline" color="#9ca3af" onClick={handleSkip}>
                <ForwardIcon className="w-4 h-4 mr-1 text-gray-400" />
                目標設定をスキップする
              </Button>
            </div>
          )}

          <div className="flex flex-row justify-center mt-4 gap-3 md:px-4">
          { active > 0 && (
            <Button size="sm" variant="outline" color="#9ca3af" onClick={prevStep}>
              <ArrowUturnLeftIcon className="w-4 h-4 mr-1 text-gray-400" />
              戻る
            </Button>
          )}

          {active < 2 ? (
            <Button size="sm" variant="outline" color="gray" onClick={nextStep}>
              次へ
              <PaperAirplaneIcon className="w-5 h-5 ml-1 text-blue-400" />
            </Button>
          ) : (
            <Button size="sm" variant="outline" color="gray" onClick={handleSubmit}>
              登録
              <PaperAirplaneIcon className="w-5 h-5 ml-1 text-blue-400" />
            </Button>
          )}
        </div>
        </div>
      </div>
    </>
  );
}
