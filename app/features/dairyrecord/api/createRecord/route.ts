import axios from 'axios';
import { getJwt } from '@/lib/getJwt';
import { NextRequest } from 'next/server';

const endpoint = "dairy_records";
const apiUrl = process.env.RAILS_API_URL

export async function POST(req: NextRequest) {
  const { accessToken, userId } = await getJwt(req);
  
  if (!accessToken) {
    return new Response(JSON.stringify({ error: '認証が必要です' }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  
  const data = await req.json();
  const dairy_record = data.dairy_record;
  const customer_counts = data.customer_counts;
  dairy_record.user_id = userId;

  if (!dairy_record || !customer_counts){
    return new Response(JSON.stringify({ error: 'dairy_recordまたはcustomer_countsがありません' }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  try {
    const response = await axios.post(`${apiUrl}/${endpoint}`, { 
      dairy_record,
      customer_counts
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