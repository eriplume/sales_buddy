import { UserImage } from '@/types';
import Image from 'next/image';

const UserImage = ({ image, name }: UserImage) => {
  const imageUrl = image ?? '/default_profile.png'; // デフォルト画像のパス
  const userName = name ?? 'Unknown User';

  return (
    <div className="flex items-center cursor-pointer">
      <Image
        src={imageUrl}
        className="w-8 h-8 rounded-full"
        alt={userName}
        width={32}
        height={32}
      />
    </div>
  );
};

export default UserImage;
