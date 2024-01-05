"use client"
import { useState, useEffect, useCallback } from "react";
import axios from 'axios'
import { WeeklyReport } from '@/types';
import { Button } from '@mantine/core';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { showErrorNotification, showSuccessNotification } from '@/utils/notifications';
import Loading from "../../ui/Loading";

type CreateInfoProps = {
  reportsList: WeeklyReport[];
  targetMonth: string;
};

type SummaryData = {
  text: string;
}

export default function CreateInfo({reportsList, targetMonth}: CreateInfoProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [summaryData, setSummaryData] = useState<SummaryData | null>(null);

  const combinedReportsContent = reportsList.map(report => report.content).join("\n\n");

  const handleSubmit = async () => {
    if (reportsList.length >= 3) {
      setIsLoading(true);
      try {
        const response = await axios.post(`/api/summary`, { prompt: combinedReportsContent });
        console.log((response.data))
        setSummaryData(response.data as SummaryData);
        setIsLoading(false); 

      } catch (error) {
        showErrorNotification('作成に失敗しました');
        console.error("Failed", error);
      }
    } else {
      showErrorNotification('レポートが３週以上必要です');
    }
  };

  const saveSummary = useCallback(async () => {
    if (summaryData !== null) {
      try {
        await axios.post(`/api/monthlyreport`, {
          monthly_report: {
            content: summaryData.text,
            month: targetMonth,
          },
        });
        showSuccessNotification(`月間レポートを登録しました`);
      } catch(error) {
        showErrorNotification('保存に失敗しました。');
        console.error("Failed to send weekly report", error);
        return;
      }
    };
  }, [summaryData, targetMonth]);

  useEffect(() => {
    if (!isLoading && summaryData) {
      saveSummary();
    }
  }, [isLoading, summaryData, saveSummary]);

  return (
    <>
      <div className="flex flex-col justify-center items-center px-7 md:px-12">
        <div className="flex flex-row justify-center items-center px-7 md:px-12">
          <Button 
            variant="outline" 
            color="#9ca3af" 
            className="shadow-md hover:translate-y-1 hover:text-sky-700 transition-transform"
            onClick={handleSubmit}
          >
            Create
            <PaperAirplaneIcon className="w-5 h-5 ml-1 text-blue-400" />
          </Button>
        </div>
        <div className="flex flex-row justify-center items-center px-7 md:px-12 mt-3">
          {isLoading ? (
            <Loading size="xs" /> // ローディングコンポーネントを表示
          ) : (
            summaryData && <div>{summaryData.text}</div>
          )}
        </div>
      </div>
    </>
  )
}
