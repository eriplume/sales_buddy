"use client"
import { useSession } from "next-auth/react";
import Loading from "../ui/Loading";
import UserImage from "../ui/UserImage";
import DefaultUserImage from "../ui/DefaultUserImage";

export default function UserStatus() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading size="sm"/>;
  }

  return session ? (
    <div className="flex items-center mr-1">
      <UserImage
        image={session.user.image} 
        name={session.user.name} 
      />
    </div>
  ) : (
    <div className="flex items-center mr-1">
      <DefaultUserImage />
  </div>
  )
}