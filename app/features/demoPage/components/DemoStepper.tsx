import { Stepper, rem } from '@mantine/core';
import { PencilIcon, FireIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import DemoReportStep from './DemoReportStep';
import DemoTargetStep from './DemoTargetStep';
import ConfirmationStep from '@/app/features/weekly/components/ConfirmationStep';

export default function DemoStepper({ active }: any) {
  const steps = [
    { 
      icon: <PencilIcon style={{ width: rem(18), height: rem(18) }} />, 
      label: "Step 1", 
      description: "今週の振り返り" 
    },
    { 
      icon: <FireIcon style={{ width: rem(24), height: rem(24) }} />, 
      label: "Step 2", 
      description: "次週の目標" 
    },
    { 
      icon: <CheckBadgeIcon style={{ width: rem(24), height: rem(24) }} />, 
      label: "Step 3", 
      description: "確認して登録" 
    }
  ];
    
  return (
    <>
      <div className="pb-5 px-5 md:hidden">
        <Stepper active={active} size="xs" color='#93c5fd'>
          <Stepper.Step />
          <Stepper.Step />
          <Stepper.Step />
          </Stepper>
      </div>
    
      <div className="p-4 mb-2 hidden md:block">
        <Stepper
          active={active}
          color='#93c5fd'
          size="md"
        >
          {steps.map((step, index) => (
            <Stepper.Step
              key={index}
              icon={step.icon}
              label={step.label}
              description={step.description}
            />
          ))}
        </Stepper>
      </div>
    
      <div className='flex flex-col justify-center'>
        {active === 0 && <DemoReportStep />}
        {active === 1 && <DemoTargetStep />}
        {active === 2 && <ConfirmationStep />}
      </div>
    </>
  )
}