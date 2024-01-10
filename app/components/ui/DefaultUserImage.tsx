import Image from 'next/image';
import defaultImage from "@/public/default_user.png";

export default function DefaultUserImage() {
  return (
    <div className="flex items-center cursor-pointer">
      <Image
        src={defaultImage}
        className="w-8 h-8 rounded-full"
        alt="default"
        width={35}
        height={35}
      />
   </div>
  )
}
