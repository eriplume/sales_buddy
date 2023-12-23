'use client'
import useDashboardStore from "@/store/dashboardStore";

export default function ThisWeek() {

  const { thisWeekTarget, thisWeekAmount } = useDashboardStore();
  const thisWeekProgress = useDashboardStore((state) => state.getThisWeekProgress());
    return (
      <>
        <div className="flex flex-col justify-center items-center w-fll h-20 px-6">
          <p>ダッシュボードです。アンニョン</p>
          <h2>
            今週の目標: {thisWeekTarget !== null ? thisWeekTarget : "まだ登録されていません"}
          </h2>
          <h2>現在の売上: {thisWeekAmount}</h2>
          <h2>目標まであと: {thisWeekProgress}</h2>
        </div>
      </>
    );
  }