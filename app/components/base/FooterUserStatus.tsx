"use client"
import { useSession } from "next-auth/react";
import ProfileDropdown from "./ProfileDropdown";
import Loading from "../ui/Loading";

export default function FooterUserStatus() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading size="sm"/>;
  }

  return session ? (
    <div className="flex items-center md:mr-4 mr-1">
      <ProfileDropdown
        image={session.user.image} 
        name={session.user.name} 
      />
    </div>
  ) : (
    null
  )
}