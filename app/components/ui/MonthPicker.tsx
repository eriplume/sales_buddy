import { rem } from "@mantine/core";
import { MonthPickerInput } from '@mantine/dates';
import { CalendarIcon } from "@heroicons/react/24/outline";

type MonthPickerProps = {
  value: Date | null;
  setValue: (newValue: Date | null) => void;
};

export default function MonthPicker({value, setValue} :MonthPickerProps ) {
  const icon = <CalendarIcon style={{ width: rem(18), height: rem(18) }}/>;

  return (
    <MonthPickerInput
      leftSection={icon}
      leftSectionPointerEvents="none"
      placeholder="Pick date"
      valueFormat= "YYYY年 MM月"
      value={value}
      onChange={setValue}
    />
  )
}
