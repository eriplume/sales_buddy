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

  // リクエストボディの解析, dairy_recordが存在するか検証のちバックエンドに送信
  const data = await request.json();
  const dairy_record = data.dairy_record;
  const customer_counts = data.customer_counts;

  if (!dairy_record || !customer_counts){
    return new Response(JSON.stringify({ error: 'dairy_recordまたはcustomer_countsがありません' }), {
        status: 400,
        headers: {
            "Content-Type": "application/json"
        }
    });
  }

  dairy_record.user_id = session.user.railsId;
  const apiUrl = process.env.RAILS_API_URL

  try {
    const response = await axios.post(`${apiUrl}/dairy_records`, { 
      dairy_record,
      customer_counts
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
