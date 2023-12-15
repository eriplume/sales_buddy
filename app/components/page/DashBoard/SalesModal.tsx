import { SalesRecord } from '@/types/SalesRecord';
import { Modal } from '@mantine/core';
import DayRecord from './DayRecord';
import NotDayRecord from './NotDayRecord';
import { formatDateLayout } from '@/utils/dateUtils';

type SalesModalProps = {
    opened: boolean;
    close: () => void;
    selectedSalesRecord: SalesRecord | null;
    selectedDate: Date | null;
};

export default function SalesModal({ opened, close, selectedSalesRecord, selectedDate }: SalesModalProps) {

  const renderModalTitle = () => {
    if (selectedDate) {
      return (
        <>
          <div className='flex flex-row items-center w-full px-4 py-1 font-bold text-gray-500'>
            {formatDateLayout(selectedDate)}
          </div>
        </>
      );
    }
  };

  const renderModalContent = () => {
    if (selectedSalesRecord) {
      return <DayRecord record={selectedSalesRecord} />;
    } else {
      return <NotDayRecord />;
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      title={renderModalTitle()}
      centered
    >
      {renderModalContent()}
    </Modal>
  )
}
