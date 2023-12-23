import { formatDateLayout } from '@/utils/dateUtils';
import { SalesRecord } from '@/types';
import { Modal } from '@mantine/core';
import DayRecord from './DayRecord';
import NotDayRecord from './NotDayRecord';

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
          <div className='flex flex-row items-start w-full py-4 pr-20 mr-16 mb-1 pl-1 text-xl font-bold text-gray-700 border-b-8'>
            <div className='flex w-full mr-12 ml-4'>{formatDateLayout(selectedDate)}</div>
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
