import { HomeIcon, CalculatorIcon, PencilIcon, ClipboardDocumentListIcon, UserGroupIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export const navigationItems = [
    { label: "Home", icon: HomeIcon, path: "/dashboard" },
    { label: "Dairy Record", icon: CalculatorIcon, path: "/dairyrecord" },
    { label: "Report", icon: PencilIcon, path: "/" },
    { label: "Summary Creation", icon: ClipboardDocumentListIcon , path: "/" },
    { label: "Teams", icon: UserGroupIcon, path: "/" },
    { label: "Help", icon: QuestionMarkCircleIcon, path: "/" },
];
