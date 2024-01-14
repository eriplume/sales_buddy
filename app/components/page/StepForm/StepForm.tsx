"use client"
import axios from 'axios'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { useFetchForWeekly } from '@/lib/useFetch';
import useWeeklyStore from '@/store/weeklyStore';
import useDashboardStore from '@/store/dashboardStore';
import { showErrorNotification, showSuccessNotification, showCautionNotification } from '@/utils/notifications';
import Target from './Target';
import Report from './Report';
import Confirmation from './Confirmation';
import StepperIcon from './StepperIcon';
import BackButton from '../../ui/button/BackButton';
import NextButton from '../../ui/button/NextButton';
import SkipButton from '../../ui/button/SkipButton';
import SubmitButton from '../../ui/button/SubmitButton';

export default function StepForm() {
  useFetchForWeekly();
  const router = useRouter()
  const { target, setTarget, clearData, validateTarget, validateContent, getWeeklyReportData, getWeeklyTargetData } = useWeeklyStore();
  const { fetchWeeklyTarget } = useDashboardStore((state) => ({fetchWeeklyTarget: state.fetchWeeklyTarget}));
  const { fetchWeeklyReport } = useDashboardStore((state) => ({fetchWeeklyReport: state.fetchWeeklyReport}));
  const [active, setActive] = useState(0);

  function validateStep(step :number) {
    let validationResult;
    let errorMessage = '';

    switch (step) {
      case 0:
        validationResult = validateContent();
        if (!validationResult.success) {
          errorMessage = validationResult.error?.issues[0].message || '正しく入力してください';
        }
        break;
      case 1:
        validationResult = validateTarget();
        if (!validationResult.success) {
          errorMessage = validationResult.error?.issues[0].message || '正しく入力してください';
        }
        break;
      default:
        errorMessage = '';
    }
    return { success: validationResult ? validationResult.success : false, errorMessage };
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
    showCautionNotification('目標の入力をスキップしました');
  }

  const handleSubmit = async () => {
    const { weekly_report } = getWeeklyReportData();
    const { weekly_target } = getWeeklyTargetData();
    
    try {
      await axios.post(`/api/weeklyreport`, { weekly_report });
    } catch(error) {
      showErrorNotification('レポートの登録に失敗しました。もう一度お試しください。');
      return;
    }

    if (target !== 0) {
      try {
        await axios.post(`/api/weeklytarget`, { weekly_target });
        showSuccessNotification(`登録しました`);
      } catch (error) {
        showSuccessNotification(`レポートを登録しました`);  
        showErrorNotification('お手数ですが目標設定ページより再度登録してください', '目標の登録に失敗しました');
      }
    } else {
      showSuccessNotification(`登録しました`);
    }

    fetchWeeklyReport(true);
    fetchWeeklyTarget(true);
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
              <SkipButton size='sm' onClick={handleSkip}>
                目標設定をスキップする
              </SkipButton>
            </div>
          )}
          <div className="flex flex-row justify-center mt-4 gap-3 md:px-4">
            { active > 0 && (
              <BackButton size='sm' onClick={prevStep}/>
            )}
            {active < 2 ? (
              <NextButton size='sm' onClick={nextStep}/>
            ) : (
              <SubmitButton size='sm' onClick={handleSubmit}/>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
