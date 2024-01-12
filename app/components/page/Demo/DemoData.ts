// 売上記録の一覧
export const salesRecordsDemo = [
    {
        "total_amount": 10000,
        "total_number": 1,
        "count": 1,
        "set_rate": 1,
        "average_spend": 10000,
        "date": "2023-09-01"
    },
    {
        "total_amount": 10000,
        "total_number": 1,
        "count": 1,
        "set_rate": 1,
        "average_spend": 10000,
        "date": "2023-09-04"
    },
    {
        "total_amount": 25000,
        "total_number": 1,
        "count": 1,
        "set_rate": 1,
        "average_spend": 25000,
        "date": "2023-11-01"
    },
    {
        "total_amount": 0,
        "total_number": 0,
        "count": 0,
        "set_rate": 0,
        "average_spend": 0,
        "date": "2023-12-02"
    },
    {
        "total_amount": 44000,
        "total_number": 3,
        "count": 2,
        "set_rate": 1.5,
        "average_spend": 14666.666666666666,
        "date": "2023-12-03"
    },
    {
        "total_amount": 24000,
        "total_number": 2,
        "count": 1,
        "set_rate": 2,
        "average_spend": 12000,
        "date": "2023-12-04"
    },
    {
        "total_amount": 59000,
        "total_number": 5,
        "count": 2,
        "set_rate": 2.5,
        "average_spend": 11800,
        "date": "2023-12-06"
    },
    {
        "total_amount": 15000,
        "total_number": 1,
        "count": 1,
        "set_rate": 1,
        "average_spend": 15000,
        "date": "2023-12-10"
    },
    {
        "total_amount": 59000,
        "total_number": 3,
        "count": 2,
        "set_rate": 1.5,
        "average_spend": 19666.666666666668,
        "date": "2023-12-11"
    },
    {
        "total_amount": 69900,
        "total_number": 5,
        "count": 4,
        "set_rate": 1.25,
        "average_spend": 13980,
        "date": "2023-12-12"
    },
    {
        "total_amount": 105000,
        "total_number": 6,
        "count": 4,
        "set_rate": 1.5,
        "average_spend": 17500,
        "date": "2023-12-13"
    },
    {
        "total_amount": 90600,
        "total_number": 7,
        "count": 4,
        "set_rate": 1.75,
        "average_spend": 12942.857142857143,
        "date": "2023-12-14"
    },
    {
        "total_amount": 161999,
        "total_number": 8,
        "count": 5,
        "set_rate": 1.6,
        "average_spend": 20249.875,
        "date": "2023-12-18"
    },
    {
        "total_amount": 146009,
        "total_number": 8,
        "count": 4,
        "set_rate": 2,
        "average_spend": 18251.125,
        "date": "2023-12-25"
    },
    {
        "total_amount": 99919,
        "total_number": 5,
        "count": 3,
        "set_rate": 1.6666666666666667,
        "average_spend": 19983.8,
        "date": "2023-12-27"
    }
];

// 売上記録日付の一覧
export const salesDatesDemo = salesRecordsDemo.map(record => record.date);

// 業務記録の一覧
export const jobsRecordsDemo = [
    {
        "job": "ストック整理",
        "date": "2023-12-25"
    },
    {
        "job": "店内レイアウト",
        "date": "2023-12-25"
    },
    {
        "job": "商品説明会",
        "date": "2023-12-26"
    },
    {
        "job": "DM作成",
        "date": "2023-12-26"
    },
    {
        "job": "スタイリング撮影",
        "date": "2023-12-27"
    },
    {
        "job": "MT",
        "date": "2023-12-12"
    },
    {
        "job": "コスメ説明会",
        "date": "2023-12-12"
    },
    {
        "job": "商品検討会",
        "date": "2023-12-12"
    }
];

// 登録された業務内容の一覧
export const jobsDatesDemo = jobsRecordsDemo.map(record => record.date);

// 登録された業務付付の一覧
export const jobsListDemo = jobsRecordsDemo.map(record => record.job);

// 客層タイプ集計
export const customersRecordsDemo = {"1":10,"2":6,"3":4,"4":5,"7":2,"8":8};

// 週間目標の一覧
export const weeklyTargetsDemo = [
    {
        "target": 1000000,
        "start_date": "2023-12-18",
        "end_date": "2023-12-24"
    },
    {
        "target": 1000000,
        "start_date": "2023-12-25",
        "end_date": "2023-12-31"
    },
    {
        "target": 500000,
        "start_date": "2024-01-01",
        "end_date": "2024-01-07"
    }
];

// 週間目標の登録週の一覧
export const registeredTargetRangesDemo =  weeklyTargetsDemo.map(target => ({
    startDate: target.start_date,
    endDate: target.end_date
}));

// 週間レポートの一覧
export const weeklyReportsDemo = [
    {
        "content": "今週はアウターのプラス提案を意識して接客を行なった。ニットを中心にトップスをお求めの方、またはノーニーズの回遊客が多かったが、試着の際には必ずコーディネートとして一緒に提案した。また店頭での接客の際にもアウターとの組み合わせで見せるようにしたところ試着回数も増えた。3〜40代ぐらいの比較的ファッション好きなお客様は特に提案からアウターを気に入ってもらえることが多く実売に繋げられた。事前にメリットピックしセールストークを用意していたことから会話の中でスムーズに提案ができたのもよかった。",
        "start_date": "2023-12-11",
        "end_date": "2023-12-17"
    },
    {
        "content": "今週は会員優待のご連絡DMをしていた顧客様が多く来店され、店舗予算にも貢献することができたと思う。既存のVIP会員様はランクをキープしていただけており、PREMIREの方１名を今週でランクアップさせることができた。顧客様売上は店舗でトップなので引き続き伸ばしていきたい。またライト層で顔を覚えてくださっていそうな方も何名か見られたので次回積極的に話し込みに行きたいと思う。オンラインで気になる商品を見てのご来店も目立ったので、そちらもチェックしておき接客に生かせるようにしたいと思った。",
        "start_date": "2023-12-18",
        "end_date": "2023-12-24"
    },
    {
        "content": "アウターの接客を積極的に行い客単価アップに注力した。しかしバタバタと忙しい日が多く、じっくり提案をするのが難しく逃してしまうことが多かったと感じる。素材のこだわり、機能性などのメリット頭に入れていたことで迷わずアピールはできていたものの、袖を通さなくとも惹きつけられるような魅せ方や会話がより必要だと思った。また可愛さが伝わっても気温が高いことがストッパーになる方がやはり多いので、そこもコーディネートや言い回しの工夫で買上に繋げられるような力が必要だと感じた。",
        "start_date": "2023-12-25",
        "end_date": "2023-12-31"
    }
];

// 週間レポートの登録週の一覧
export const registeredReportRangesDemo = weeklyReportsDemo.map(report => ({
    startDate: report.start_date,
    endDate: report.end_date
}));

// 月間レポートの一覧
export const monthlyReportsDemo = [
    {
        "content": "今月はVIP会員様の来店が増加、ランクアップも見られ、またライト層で話し込む人がいたなど店舗への集客、購買も取れた。アウターのプラス提案を意識した接客を行ない客単価アップを図り、会話もケースバイケースで工夫を凝らした。しかし提案の内容の伝達や可愛さを伝えられるような言い回し術などのフォローは引き続きスキルアップが必要なことを強く感じた。",
        "month": "2023-12",
        "id":-100
    }
];

// 今週の目標
export const targetDemo = 50;
// 進捗
export const progressPercentDemo = 65;

// 目標との差分
export const progressDemo = 175000;

// 今週の現在の売上高
export const thisWeekAmountDemo = 325000;
export const thisWeekNumberDemo = 10;
export const thisWeekCountDemo = 15;
export const thisWeekSetDemo= 1.5;
export const thisWeekAverageDemo = 32500;

