import { CalculatorIcon, ClipboardDocumentListIcon, BookOpenIcon } from "@heroicons/react/24/outline";

export const navigationItems = [
    { label: "売上記録", icon: CalculatorIcon, path: "/dairyrecord" },
    { label: "週間レポート", icon: BookOpenIcon, path: "/weekly" },
    { label: "月間レポート", icon: ClipboardDocumentListIcon , path: "/report" },
];

export const navigationItemsDemo = [
    { label: "売上記録", icon: CalculatorIcon, path: "/dairyrecord_s" },
    { label: "週間レポート", icon: BookOpenIcon, path: "/weekly_s" },
    { label: "月間レポート", icon: ClipboardDocumentListIcon , path: "/report_s" },
];
