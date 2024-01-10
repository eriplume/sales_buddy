"use client"
import { useState } from "react";
import useWeeklyStore from "@/store/weeklyStore";
import { showErrorNotification, showCautionNotification } from "@/utils/notifications";
import StepperIcon from "../StepForm/StepperIcon";
import SkipButton from "../../ui/button/SkipButton";
import BackButton from "../../ui/button/BackButton";
import NextButton from "../../ui/button/NextButton";
import SubmitButton from "../../ui/button/SubmitButton";
import Confirmation from "../StepForm/Confirmation";
import DemoReportStep from "./DemoReportStep";
import DemoTargetStep from "./DemoTargetStep";

export default function DemoStepForm() {
  const { setTarget, validateTarget, validateContent } = useWeeklyStore();
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

  const handleSubmit = () => {
    showErrorNotification('登録にはログインが必要です');
  };

  return (
    <>
      <div>
        <StepperIcon active={active}/>
          <div>
            {active === 0 && (
              <div className='flex flex-col justify-center'>
                <DemoReportStep />
              </div>
            )}
            {active === 1 && (
              <div className='flex flex-col justify-center'>
                <DemoTargetStep />
              </div>
            )}
            {active === 2 && (
              <div className='flex flex-col justify-center'>
                <Confirmation/>
              </div>
            )}
          </div>
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
  
