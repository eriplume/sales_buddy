"use client"
import useTeamStore from "@/store/teamStore"
import { Comment } from '@/types'
import { formatDateLayout } from "@/utils/dateUtils"
import MemberIcon from "../../teamJoin/components/MemberIcon"
import { PencilIcon } from "@heroicons/react/24/outline"

type CommentsProps = {
  comments: Comment[];
}

export default function Comments({comments}: CommentsProps) {
  const { members } = useTeamStore();
  const sortedComments = comments.sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return (
    <>
      {comments.length > 0 ? (
        sortedComments.map((comment) =>{
          const user = members.find((member) => member.id === comment.user_id)
          
          return (
            <div className="p-1 w-full mt-5" key={comment.id}>
              <div className="h-full flex items-center p-4 rounded-lg bg-white border">
                <div className="flex-grow">
                  <div className="text-gray-600 text-md ml-2 lg:ml-4 mb-2">{comment.content}</div>
                  <div className='flex flex-row items-center border-t pt-3'>
                    <MemberIcon imageUrl={user?.imageUrl} userName={user?.name}/>
                    <PencilIcon className='w-5 h-5 text-gray-500 ml-3 mr-1' />
                    <div className="text-gray-400 text-sm mr-3 lg:mr-5">{formatDateLayout(comment.created_at)}</div>
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
