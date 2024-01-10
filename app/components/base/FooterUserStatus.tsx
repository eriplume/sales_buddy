"use client"
import { useSession } from "next-auth/react";
import Loading from "../ui/Loading";
import UserImage from "../ui/UserImage";
import DefaultUserImage from "../ui/DefaultUserImage";

export default function FooterUserStatus() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading size="sm"/>;
  }

  return session ? (
    <div className="flex items-center md:mr-4 mr-1">
      <UserImage
        image={session.user.image} 
        name={session.user.name} 
      />
    </div>
  ) : (
    <div className="flex items-center md:mr-4 mr-1">
      <DefaultUserImage />
  </div>
  )
}