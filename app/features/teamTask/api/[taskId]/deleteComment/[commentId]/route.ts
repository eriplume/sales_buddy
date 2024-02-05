import axios from 'axios';
import { getJwt } from '@/lib/getJwt';
import { NextRequest } from 'next/server';

const apiUrl = process.env.RAILS_API_URL

export async function DELETE(req: NextRequest, { params }: { params: { taskId: string, commentId: string } } ) {
  const { accessToken } = await getJwt(req);
  const taskId = params.taskId
  const commentId = params.commentId
      
  if (!accessToken) {
    return new Response(JSON.stringify({ error: '認証が必要です' }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  
  if (!commentId){
    return new Response(JSON.stringify({ error: 'commentがありません' }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  
  try {
    const response = await axios.delete(`${apiUrl}/tasks/${taskId}/comments/${commentId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }
    });
      return new Response(JSON.stringify(response.data), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error); 
    return new Response(JSON.stringify({ error: '予期せぬエラーが発生しました'  }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
