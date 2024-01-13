import axios from 'axios';
import { getServerSession } from "next-auth/next"
import { options } from '@/lib/options';
import { fetchDataFromApi } from '@/lib/fetchDataFromApi';
import { getJwt } from '@/lib/getJwt';
import { type NextRequest } from 'next/server';

const endpoint = "monthly_reports";

export async function GET(req: NextRequest) {
  const accessToken = await getJwt(req);

  if (!accessToken) {
    return new Response(JSON.stringify({ error: '認証が必要です' }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const data = await fetchDataFromApi(endpoint, accessToken);
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
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
  const monthly_report = data.monthly_report;
  
  if (!monthly_report){
    return new Response(JSON.stringify({ error: 'monthly_reportがありません' }), {
        status: 400,
        headers: {
            "Content-Type": "application/json"
        }
    });
  }

  monthly_report.user_id = session.user.userId;
  const apiUrl = process.env.RAILS_API_URL

  try {
    const response = await axios.post(`${apiUrl}/${endpoint}`, { 
      monthly_report
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
  const monthly_report = data.monthly_report;
  const reportId = data.monthly_report.id;
  const apiUrl = process.env.RAILS_API_URL
  
  if (!monthly_report){
    return new Response(JSON.stringify({ error: 'monthly_reportがありません' }), {
        status: 400,
        headers: {
            "Content-Type": "application/json"
        }
    });
  }

  try {
    const response = await axios.patch(`${apiUrl}/monthly_reports/${reportId}`, { 
      monthly_report
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
