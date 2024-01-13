import axios from 'axios';
import { getServerSession } from "next-auth/next"
import { options } from '@/lib/options';

export async function GET() {

  const session = await getServerSession(options);
    
  if (!session) {
    return new Response(JSON.stringify({ error: '認証が必要です' }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const userId = session.user.userId;
  const apiUrl = process.env.RAILS_API_URL

  try {
    const response = await axios.get(`${apiUrl}/users/${userId}/notifications`);
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error:'予期せぬエラーが発生しました' }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export async function PATCH(request: Request) {

  const session = await getServerSession(options);
    
  if (!session) {
    return new Response(JSON.stringify({ error: '認証が必要です' }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const data = await request.json();
  const user = data.user;
  const userId = session.user.userId; 
  const apiUrl = process.env.RAILS_API_URL

  try {
    const response = await axios.patch(`${apiUrl}/users/${userId}/update_notifications`, { 
      user
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
