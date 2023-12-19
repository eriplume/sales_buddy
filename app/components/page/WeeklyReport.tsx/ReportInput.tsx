import { Textarea } from '@mantine/core';
import useWeeklyStore from '@/store/weeklyStore';

export default function ReportInputForm() {

  const { content, setContent } = useWeeklyStore();

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <form className='w-full'>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.currentTarget.value)}
            placeholder="今週の振り返りを200字以内で入力してください"
            label="週間レポート"
            size="xs"
            withAsterisk
            autosize
            minRows={6}
            maxRows={7}
          />
        </form>
      </div>
    </>
  );
}