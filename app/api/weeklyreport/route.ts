import axios from 'axios';
import { getServerSession } from "next-auth/next"
import { options } from '@/lib/options';

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
  const weekly_report = data.weekly_report;

  if (!weekly_report){
    return new Response(JSON.stringify({ error: 'weekly_reportがありません' }), {
        status: 400,
        headers: {
            "Content-Type": "application/json"
        }
    });
  }

  weekly_report.user_id = session.user.railsId;
  const apiUrl = process.env.RAILS_API_URL

  try {
    const response = await axios.post(`${apiUrl}/weekly_reports`, { 
      weekly_report
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