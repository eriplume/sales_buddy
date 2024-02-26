"use client"
import axios from 'axios'
import { useState, useEffect, useCallback } from "react";
import { WeeklyReport } from '@/types';
import useDashboardStore from "@/store/dashboardStore";
import { showErrorNotification, showSuccessNotification } from '@/utils/notifications';
import { Button } from '@mantine/core';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import Loading from "../../../components/ui/Loading";

type CreateInfoProps = {
  reportsList: WeeklyReport[];
  targetMonth: string;
};

type SummaryData = {
  text: string;
};

export default function CreateSummary({reportsList, targetMonth}: CreateInfoProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [summaryData, setSummaryData] = useState<SummaryData | null>(null);
  const fetchMonthlyReport = useDashboardStore((state) => state.fetchMonthlyReport);

  const combinedReportsContent = reportsList.map(report => report.content).join("\n\n");

  const handleSubmit = async () => {
    if (reportsList.length >= 3) {
      setIsLoading(true);
      try {
        const response = await axios.post(`/features/report/api/createSummary`, { prompt: combinedReportsContent });
        setSummaryData(response.data as SummaryData);
        setIsLoading(false);
      } catch (error) {
        showErrorNotification('作成に失敗しました');
      }
    } else {
      showErrorNotification('レポートが３週分以上必要です');
    }
  };

  const saveSummary = useCallback(async () => {
    if (summaryData !== null) {
      try {
        await axios.post(`/features/report/api/createMonthlyReport`, {
          monthly_report: {
            content: summaryData.text,
            month: targetMonth,
          },
        });
        showSuccessNotification(`月間レポートを登録しました`);
        setSummaryData(null);
        fetchMonthlyReport(true);
      } catch(error) {
        showErrorNotification('保存に失敗しました。');
        return;
      }
    };
  }, [summaryData, targetMonth, fetchMonthlyReport]);

  useEffect(() => {
    if (!isLoading && summaryData) {
      saveSummary();
    }
  }, [isLoading, summaryData, saveSummary]);
    
  return (
    <>
      <div className="flex flex-col justify-center items-center px-7 md:px-12">
        {summaryData === null && isLoading == false ? (
          <div className="flex flex-row justify-center items-center px-7 md:px-12">
            <Button 
              variant="outline" 
              color="#9ca3af" 
              className="shadow-md hover:text-sky-700 transition-transform"
              onClick={handleSubmit}
            >
              Create
              <PaperAirplaneIcon className="w-5 h-5 ml-1 text-blue-400" />
            </Button>
          </div>
        ) : (
          null
        )}
        <div className="flex flex-row justify-center items-center px-2 md:px-7 mt-3">
          {isLoading &&
            <div className="flex flex-row items-center">
              <div className="text-gray-500 mr-1">作成中です</div>
              <Loading size="sm" /> 
            </div>
          }
        </div>
      </div>
    </>
  )
}
