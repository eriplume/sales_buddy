import { TeamInfo } from "@/types";

const createCopyText = (TeamInfo: TeamInfo) => {
  return `
  以下のステップで、${TeamInfo.name}に参加しましょう！

  ▼ Step.1 アプリにログイン
  下記にアクセスし、LINEログイン
  https://www.sbuddy-apparel.com

  ▼Step.2 チームメニュー > チームに参加するをタップ
  以下の情報を入力してください！
  チーム名：${TeamInfo.name}
  キーワード：${TeamInfo.keyword}
  `;
};

export default createCopyText;