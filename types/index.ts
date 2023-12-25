export type SalesRecord = {
    average_spend: number;
    count: number;
    date: string;
    set_rate: number;
    total_amount: number;
    total_number: number;
};

export type WeeklyTarget = {
    target: number;
    start_date: string;
    end_date: string;
};

export type WeeklyReport = {
    content: string;
    start_date: string;
    end_date: string;
};

export type ResisteredDateRange = {
    startDate: string;
    endDate: string;
};

export type ProgressData = {
    progress: number;
    progressPercent: number;
};

export type JobRecord = {
    job: string;
    date: string;
};