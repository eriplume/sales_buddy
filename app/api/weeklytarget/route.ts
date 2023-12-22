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

  const railsUserId = session.user.railsId;
  const apiUrl = process.env.RAILS_API_URL

  try {
    const response = await axios.get(`${apiUrl}/weekly_targets`, {
      headers: {
        'user': `${railsUserId}`,
        'Content-Type': 'application/json',
      },
    });
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

export async function POST(request: Request) {

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
  const weekly_target = data.weekly_target;

  if (!weekly_target){
    return new Response(JSON.stringify({ error: 'weekly_targetがありません' }), {
        status: 400,
        headers: {
            "Content-Type": "application/json"
        }
    });
  }

  weekly_target.user_id = session.user.railsId;
  const apiUrl = process.env.RAILS_API_URL

  try {
    const response = await axios.post(`${apiUrl}/weekly_targets`, { 
      weekly_target
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
