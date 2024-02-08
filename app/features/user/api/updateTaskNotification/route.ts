import axios from 'axios';
import { NextRequest } from 'next/server';
import { getJwt } from '@/lib/getJwt';

export async function PATCH(req: NextRequest) {
  const { accessToken } = await getJwt(req);

  if (!accessToken) {
    return new Response(JSON.stringify({ error: '認証が必要です' }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const data = await req.json();
  const user = data.user;
  const apiUrl = process.env.RAILS_API_URL

  try {
    const response = await axios.patch(`${apiUrl}/users/update_task_notifications`, { 
      user
    }, {
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