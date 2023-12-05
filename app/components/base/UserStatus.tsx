"use client"
import { useSession } from "next-auth/react";
import { LoginButton } from "../LoginButton";
import Image from 'next/image'

const UserStatus = () => {
  const { data: session } = useSession();

  const imageUrl = session?.user?.image ?? '../../public/btn_login_base.png'; // デフォルトのプロフィール画像へのパス
  const userName = session?.user?.name ?? 'Unknown User';

  return session ? (
    <div className="flex items-center">
      <Image
        src={imageUrl}
        className="w-8 h-8 rounded-full"
        alt={userName}
        width={32} // Image コンポーネントに必要な width
        height={32} // Image コンポーネントに必要な height
      />
    </div>
  ) : (
    <LoginButton />
  );
};

export default UserStatus;
