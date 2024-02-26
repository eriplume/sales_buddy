"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios'
import useUserStore from '@/store/userStore';
import { showSuccessNotification, showErrorNotification, showCautionNotification } from "@/utils/notifications";
import { TriangleIcon } from "../../../../components/ui/icon/Triangle"
import { BellAlertIcon } from "@heroicons/react/24/outline";
import AlertSelect from "./AlertSelect";
import useFetchUser from '../../hooks/useUser';

export default function Steps() {
  useFetchUser();

  const { notifications, setNotifications } = useUserStore();
  const { taskNotifications, setTaskNotifications } = useUserStore();
  const [checked, setChecked] = useState(false);
  const [checkedTask, setCheckedTask] = useState(false);

  useEffect(() => {
    if (notifications !== undefined) {
      setChecked(notifications);
    }
  }, [notifications]);

  useEffect(() => {
    if (taskNotifications !== undefined) {
      setCheckedTask(taskNotifications);
    }
  }, [taskNotifications]);
  
  const handleUpdate = async () => {
    if (checked !== notifications) {
      try {
        await axios.patch('/features/user/api/updateNotification', {
          user: {
            notifications: checked,
          },
        });
        showSuccessNotification(`更新しました`);
        setNotifications(checked);
      } catch (error) {
        showErrorNotification('更新に失敗しました');
      }
    } else {
      showCautionNotification('設定されています')
    }
  };

  const handleUpdateTask = async () => {
    if (checkedTask !== taskNotifications) {
      try {
        await axios.patch('/features/user/api/updateTaskNotification', {
          user: {
            task_notifications: checkedTask,
          },
        });
        showSuccessNotification(`更新しました`);
        setTaskNotifications(checkedTask);
      } catch (error) {
        showErrorNotification('更新に失敗しました');
      }
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
            <div>レポート：</div>
            <div className='text-gray-700 font-bold mr-2'>{notifications ? 'ON' : 'OFF'}</div>
            <div>タスク：</div>
            <div className='text-gray-700 font-bold'>{taskNotifications ? 'ON' : 'OFF'}</div>
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
                width={100}
                height={31}/>
            </a>
          </div>
          <div className="flex py-5 pl-4">
            <AlertSelect 
              handleUpdate={handleUpdate} 
              checked={checked} 
              setChecked={setChecked} 
              labelTitle="週間レポート登録をリマインド"
              description="毎週日曜日にお知らせします"
              groupName='reportAlert'
              />
          </div>
          <div className="flex py-5 pl-4">
            <AlertSelect 
              handleUpdate={handleUpdateTask} 
              checked={checkedTask} 
              setChecked={setCheckedTask}
              labelTitle="タスク登録通知"
              description="チームタスクが登録されるとお知らせします"
              groupName='taskAlert'
              />
          </div>
        </div>
      </div>  
    </>
  )
}
