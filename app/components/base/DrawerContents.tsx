"use client"
import { useRouter } from 'next/navigation';
import { NavLink } from '@mantine/core';
import { HomeIcon, CalculatorIcon, PencilIcon, ClipboardDocumentListIcon, UserGroupIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const navigationItems = [
  { label: "Home", icon: HomeIcon, path: "/dashboard" },
  { label: "Dairy Record", icon: CalculatorIcon, path: "/dairyrecord" },
  { label: "Report", icon: PencilIcon, path: "/" },
  { label: "Summary Creation", icon: ClipboardDocumentListIcon , path: "/" },
  { label: "Teams", icon: UserGroupIcon, path: "/" },
  { label: "Help", icon: QuestionMarkCircleIcon, path: "/" },
];

type DrawerContentsProps = {
  active: number;
  setActive: (index: number) => void;
  onClose: () => void;
};

export default function DrawerContents({ active, setActive, onClose }: DrawerContentsProps) {
  const router = useRouter()

  const handleNavLinkClick = (index: number, path: string) => {
    setActive(index);
    onClose(); // ドロワーを閉じる
    router.push(path);
  };

  return (
    <>
      {navigationItems.map((item, index) => (
        <NavLink
          key={item.label}
          active={index === active}
          label={item.label}
          color="gray"
          leftSection={item.icon && <item.icon className="w-4 h-4" />}
          onClick={() => handleNavLinkClick(index, item.path)}
        />
      ))}
    </>
  );
}