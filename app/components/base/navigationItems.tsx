import { CalculatorIcon, ClipboardDocumentListIcon, BookOpenIcon, DocumentCheckIcon } from "@heroicons/react/24/outline";

export const navigationItems = [
    { label: "売上記録", icon: CalculatorIcon, path: "/dairyrecord" },
    { label: "週間レポート", icon: BookOpenIcon, path: "/weekly" },
    { label: "月間レポート", icon: ClipboardDocumentListIcon , path: "/dashboard/report" },
    { label: "チームタスク", icon: DocumentCheckIcon , path: "/team/task" },
];

export const navigationItemsDemo = [
    { label: "売上記録", icon: CalculatorIcon, path: "/sample/dairyrecord" },
    { label: "週間レポート", icon: BookOpenIcon, path: "/sample/weekly" },
    { label: "月間レポート", icon: ClipboardDocumentListIcon , path: "/sample/dashboard/report" },
    { label: "チームタスク", icon: DocumentCheckIcon , path: "/sample/team" },
];
