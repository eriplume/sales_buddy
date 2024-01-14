"use client"
import { useState} from 'react';
import Image from 'next/image';
import { showErrorNotification, showCautionNotification } from "@/utils/notifications";
import { TriangleIcon } from "../../ui/icon/Triangle"
import { BellAlertIcon } from "@heroicons/react/24/outline";
import AlertSelect from '../Setting/AlertSelect';

export default function DemoSetting() {
  const [checked, setChecked] = useState(false);
  const [currentSetting, setCurrentSetting] = useState(false);

  const handleUpdate = async () => {
    if (checked !== currentSetting) {
      showErrorNotification('ログインが必要です');
    } else {
      showCautionNotification('設定されています')
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center w-full max-w-lg">
        <div className='flex justify-end pr-5 pb-2 pt-4'>
          <div className='flex flex-row text-gray-600 text-sm items-center'>
            <BellAlertIcon className="w-4 h-4 mr-1" />
            <div>現在の設定：</div>
            <div className='text-gray-700 font-bold'>{currentSetting ? 'ON' : 'OFF'}</div>
          </div>
        </div>
        <div className="bg-white rounded-md py-7 pl-7">
          <div className="flex flex-row justify-start pt-3">
            <TriangleIcon className="w-5 h-5 mr-2 ml-4 text-gray-400" />
            <div className='text-sm text-gray-800'>通知には友達追加が必要です</div>
            <div className='text-sm text-red-400'>＊</div>
          </div>
          <div className="flex py-3 pl-4">
            <a href="https://lin.ee/iumtxW9" >
              <Image
                src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" 
                alt="友だち追加"
                height="100"
                width="100" />
            </a>
          </div>
          <div className="flex py-5 pl-4">
            <AlertSelect handleUpdate={handleUpdate} checked={checked} setChecked={setChecked}/>
          </div>
        </div>
      </div>  
    </>
  )
}
