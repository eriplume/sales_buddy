"use client"
import axios from 'axios';
import { Comment } from '@/types';
import { showSuccessNotification, showErrorNotification } from '@/utils/notifications';
import useTaskStore from '@/store/taskStore';
import { fetchTasks } from '../hooks/fetchTask';
import ActionIcons from './ActionIcons';

type CommentActionProps = {
  comment: Comment;
  taskId: number;
  setCurrentEditingComment: (comment: Comment) => void;
}

export default function CommentActions({ comment, setCurrentEditingComment, taskId }: CommentActionProps) {
  const { setTeamTasks, setUserTasks } = useTaskStore(); 

  const handleEditButtonClick = (comment: Comment) => {
    setCurrentEditingComment(comment);
  };
    
  const handleDelete = async(commentId: number) => {
    const isConfirmed = confirm("削除しますか？");
    if (!isConfirmed) {
      return;
    }
    try {
      await axios.delete(`/features/teamTask/api/${taskId}/deleteComment/${commentId}`);
      showSuccessNotification(`削除しました`);
      fetchTasks({setTeamTasks, setUserTasks});
    } catch (error) {
      showErrorNotification('削除に失敗しました。');
    }
  };

  return (
    <div className='flex pr-1 items-center'>
      <ActionIcons editAction={() => handleEditButtonClick(comment)} deleteAction={() => handleDelete(comment.id)}/>
    </div>
  )
}

