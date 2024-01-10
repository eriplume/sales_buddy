"use client"
import { useSession } from "next-auth/react";
import Loading from "../ui/Loading";
import LoginIcon from "../ui/LoginIcon";
import DrawerMenu from "./DrawerMenu";
import { navigationItems } from "./navigationItems";

export default function HeaderRight () {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading size="sm"/>;
  }

  return session ? (
    <>
      <div className="hidden md:block">
        <DrawerMenu navigationItems={navigationItems} dashboardPath='/dashboard' teamsPath='/teams'/>
      </div>
      <div className="md:hidden" style={{ width: 32, height: 32, visibility: 'hidden' }}></div>
    </>
  ) : (
    <div className="flex items-center mr-3 md:mr-1">
      <LoginIcon />
    </div>
  )
}


