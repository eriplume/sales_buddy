import { CalendarIcon } from "@heroicons/react/24/outline";
import { rem } from "@mantine/core";
import { MonthPickerInput } from '@mantine/dates';

type MonthPickerProps = {
    value: Date | null;
    setValue: (newValue: Date | null) => void;
}

export default function MonthPicker({value, setValue} :MonthPickerProps ) {
  const icon = <CalendarIcon style={{ width: rem(18), height: rem(18) }}/>;

  return (
    <MonthPickerInput
      leftSection={icon}
      leftSectionPointerEvents="none"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  )
}
