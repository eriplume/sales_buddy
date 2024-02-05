"use client"
import { useState } from "react"
import useTeamStore from "@/store/teamStore"
import useUserStore from "@/store/userStore"
import { Comment } from '@/types'
import { formatDateLayoutMMDD } from "@/utils/dateUtils"
import { ActionIcon } from "@mantine/core"
import MemberIcon from "../../teamJoin/components/MemberIcon"
import CommentActions from "./CommentActions"
import CommentForm from "./CommentForm"
import { XMarkIcon, PlusCircleIcon, ArrowPathIcon } from "@heroicons/react/24/outline"

type CommentsProps = {
  comments: Comment[];
  taskId: number;
}

export default function Comments({comments, taskId}: CommentsProps) {
  const { members } = useTeamStore();
  const { id } = useUserStore();
  const [currentEditingComment, setCurrentEditingComment] =  useState<Comment | null>(null);
  const sortedComments = comments.sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  const icon = <ArrowPathIcon className="w-5 h-5 text-sky-700" />;

  return (
    <>
      {comments.length > 0 ? (
        sortedComments.map((comment) =>{
          const user = members.find((member) => member.id === comment.user_id)
          
          return (
            <div className="p-1 w-full mt-5" key={comment.id}>
              <div className="h-full flex items-center p-4 rounded-lg bg-white border">
                <div className="flex-grow">
                  { comment === currentEditingComment ?
                    <div className="p-2 mb-2">
                      <CommentForm
                        endpoint='updateComment'
                        initialValues={{
                          content: currentEditingComment?.content ?? '',
                        }}
                        taskId={taskId}
                        commentId={currentEditingComment?.id}
                        label="更新する"
                        icon={icon}
                      />
                    </div>
                  :  
                    <div className="text-gray-600 text-md ml-2 lg:ml-4 mb-2">{comment.content}</div>
                  }
                  <div className='flex flex-row items-center justify-between border-t pt-3'>
                    <div className="flex flex-row items-center">
                      <MemberIcon imageUrl={user?.imageUrl} userName={user?.name}/>
                      <div className="text-gray-400 text-sm ml-2">{formatDateLayoutMMDD(comment.created_at)}</div>
                    </div>

                    <div className="flex flex-row items-center">
                      {comment === currentEditingComment && 
                        <ActionIcon 
                          variant="outline" 
                          color="#94a3b8" 
                          size="md" 
                          className="shadow-md hover:text-gray-500 transition-transform mr-2"
                          onClick={() => setCurrentEditingComment(null)}
                        >
                          <XMarkIcon className='w-8 h-8 p-1' />
                        </ActionIcon>
                      }

                      {comment.user_id === id && 
                        <CommentActions comment={comment} setCurrentEditingComment={setCurrentEditingComment} taskId={taskId}/> 
                      }
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center text-gray-500 py-5">コメントがありません</div>
      )}
    </>
  )
}
