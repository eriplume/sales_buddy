import { CalculatorIcon, ClipboardDocumentListIcon, BookOpenIcon } from "@heroicons/react/24/outline";

export const navigationItems = [
    { label: "売上記録", icon: CalculatorIcon, path: "/dairyrecord" },
    { label: "週間レポート", icon: BookOpenIcon, path: "/weekly" },
    { label: "月間レポート", icon: ClipboardDocumentListIcon , path: "/dashboard/report" },
];

export const navigationItemsDemo = [
    { label: "売上記録", icon: CalculatorIcon, path: "/sample/dairyrecord" },
    { label: "週間レポート", icon: BookOpenIcon, path: "/sample/weekly" },
    { label: "月間レポート", icon: ClipboardDocumentListIcon , path: "/sample/dashboard/report" },
];
