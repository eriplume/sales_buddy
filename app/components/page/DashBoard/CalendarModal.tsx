import { formatDateLayout } from '@/utils/dateUtils';
import { Modal } from '@mantine/core';

type CalendarModalProps = {
    opened: boolean;
    close: () => void;
    selectedDate: Date | null;
    renderModalContent: () => React.ReactNode;
    size: "xs" | "sm" | "md" | "lg" | "xl" | "auto";
};

export default function CalendarModal({ opened, close, size, selectedDate, renderModalContent }: CalendarModalProps) {

  const renderModalTitle = () => {
    if (selectedDate) {
      return (
        <>
          <div className='flex flex-row items-start w-full pt-4 pr-22 mr-16 mb-1 pl-1 text-xl font-bold text-gray-700'>
            <div className='flex w-full mr-12 ml-4'>{formatDateLayout(selectedDate)}</div>
          </div>
        </>
      );
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      title={renderModalTitle()}
      centered
      size={size}
    >
      {renderModalContent()}
    </Modal>
  )
}
