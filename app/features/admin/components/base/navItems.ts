import { UsersIcon, CurrencyYenIcon, ChartPieIcon } from "@heroicons/react/24/outline";

export const adminNavItems = [
  { label: "ユーザー", icon: UsersIcon, path: "/admin/users" },
  { label: "売上レコード", icon: CurrencyYenIcon, path: "/admin/dairyrecords" },
  { label: "客層タイプ", icon: ChartPieIcon , path: "/admin/customers" },
];
