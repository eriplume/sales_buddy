"use client"
import { useState } from 'react';
import { Button } from '@mantine/core';
import axios from 'axios'
import Target from './Target';
import Report from './Report';
import Confirmation from './Confirmation';
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import StepperIcon from './StepperIcon';
import useWeeklyStore from '@/store/weeklyStore';
import { showErrorNotification } from '@/utils/notifications';

export default function StepForm() {

  const { validateTarget, validateContent } = useWeeklyStore();

  //アクティブなステップの管理
  const [active, setActive] = useState(0);

  function validateStep(step :number) {
    switch (step) {
      case 0:
        return {
          success: validateContent().success,
          errorMessage: '1〜200文字で週間レポートを入力してください'
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

  //入力内容の送信状態
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        <div className="flex justify-center md:justify-end mt-4 gap-3 md:px-4">
          { active > 0 && active < 3 && (
            <Button size="sm" variant="outline" color="#9ca3af" onClick={prevStep}>
              <ArrowUturnLeftIcon className="w-4 h-4 mr-1 text-gray-400" />
              戻る
            </Button>
          )}

          {!isSubmitted && (active < 2 ? (
            <Button size="sm" variant="outline" color="gray" onClick={nextStep}>
              次へ
              <PaperAirplaneIcon className="w-5 h-5 ml-1 text-blue-400" />
            </Button>
          ) : (
            <Button size="sm" variant="outline" color="gray" >
              登録
              <PaperAirplaneIcon className="w-5 h-5 ml-1 text-blue-400" />
            </Button>
          ))}

          {isSubmitted && (
            <Button size="sm" variant="outline" color="#9ca3af" onClick={prevStep}>
              <ArrowUturnLeftIcon className="w-4 h-4 mr-1 text-gray-400" />
              ダッシュボードに戻る
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
