"use client"
import { Stepper, rem } from '@mantine/core';
import { useState } from 'react';
import { Button } from '@mantine/core';

import Target from './Target';
import Report from './Report';
import Confirmation from './Confirmation';
import { PencilIcon, FireIcon, CheckCircleIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function StepForm() {

  //アクティブなステップの管理
  const [active, setActive] = useState(0);

  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  // ステップ１フォームの入力値を管理するstate
  const [content, setContent] = useState('');

  // ステップ2フォームの入力値を管理するstate
  const [target, setTarget] = useState(0);

    //入力内容の送信状態
    const [isSubmitted, setIsSubmitted] = useState(false);

  const [highestStepVisited, setHighestStepVisited] = useState(active);

  const handleStepChange = (nextStep :any) => {
    const isOutOfBounds = nextStep > 3 || nextStep < 0;

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };

  return (
    <>
      <div>
        {/* ステッパー */}
        <div className="pb-5 px-5 md:hidden">
          <Stepper active={active} onStepClick={setActive} size="xs" color='#60a5fa'>
            <Stepper.Step  />
            <Stepper.Step  />
            <Stepper.Step  />
          </Stepper>
        </div>

        <div className="p-4 mb-2 hidden md:block">
          <Stepper
            active={active}
            onStepClick={setActive}
            color='#60a5fa'
            size="md"
          >
            <Stepper.Step
              icon={<PencilIcon style={{ width: rem(18), height: rem(18) }} />}
              label="Step 1"
              description="今週の振り返り"
            />
            <Stepper.Step
              icon={<FireIcon style={{ width: rem(24), height: rem(24) }} />}
              label="Step 2"
              description="次週の目標"
            />
            <Stepper.Step
              icon={<CheckCircleIcon style={{ width: rem(24), height: rem(24) }} />}
              label="Step 3"
              description="確認して登録"
            />
          </Stepper>
        </div>


        {/* コンテンツ */}
        <div>
          {active === 0 && (
            <div className='flex flex-col justify-center'>
              <Report/>
            </div>
          )}
          {active === 1 && (
            <div className='flex flex-col justify-center'>
              <Target/>
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
            <Button size="sm" variant="outline" color="gray" onClick={nextStep}>
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
