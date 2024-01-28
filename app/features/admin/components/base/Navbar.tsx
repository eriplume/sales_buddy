"use client"
import { useRouter } from "next/navigation";
import { NavLink } from "@mantine/core";
import { adminNavItems } from "./navItems";

export default function Navbar() {
  const router = useRouter();
    
  const handleNavLinkClick = (index: number, path: string) => {
    router.push(path);
  };

  return (
    <>
      {adminNavItems.map((item, index) => (
        <NavLink
          key={item.label}
          label={item.label}
          color="gray"
          leftSection={item.icon && <item.icon className="w-5 h-5 ml-4 text-gray-500" />}
          onClick={() => handleNavLinkClick(index, item.path)} 
        />
      ))}
    </>
  );
}