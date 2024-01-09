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
]

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
]

// 登録された業務内容の一覧
export const jobsDatesDemo = jobsRecordsDemo.map(record => record.date);

// 登録された業務付付の一覧
export const jobsListDemo = jobsRecordsDemo.map(record => record.job);