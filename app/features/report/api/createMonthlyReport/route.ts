import axios from 'axios';
import { getJwt } from '@/lib/getJwt';
import { NextRequest } from 'next/server';

const endpoint = "monthly_reports";
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
  const monthly_report = data.monthly_report;
  monthly_report.user_id = userId;
    
  if (!monthly_report){
    return new Response(JSON.stringify({ error: 'monthly_reportがありません' }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  try {
    const response = await axios.post(`${apiUrl}/${endpoint}`, { 
      monthly_report
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