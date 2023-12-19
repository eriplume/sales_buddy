import { Stepper, rem } from '@mantine/core';
import { PencilIcon, FireIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export default function StepperIcon({ active } :any) {
  return (
    <>
      <div className="pb-5 px-5 md:hidden">
        <Stepper active={active} size="xs" color='#60a5fa'>
          <Stepper.Step  />
          <Stepper.Step  />
          <Stepper.Step  />
        </Stepper>
      </div>

      <div className="p-4 mb-2 hidden md:block">
        <Stepper
          active={active}
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
    </>
  )
}
