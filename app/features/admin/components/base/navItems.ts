import { BookOpenIcon, UsersIcon, CurrencyYenIcon, ChartPieIcon } from "@heroicons/react/24/outline";

export const adminNavItems = [
  { label: "ユーザー", icon: UsersIcon, path: "/admin/users" },
  { label: "売上記録", icon: CurrencyYenIcon, path: "/admin/records" },
  { label: "レポート", icon: BookOpenIcon , path: "/admin/reports" },
  { label: "客層タイプ", icon: ChartPieIcon , path: "/admin/customers" },
];
