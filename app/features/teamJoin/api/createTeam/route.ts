import axios,  { AxiosError }  from 'axios';
import { getJwt } from '@/lib/getJwt';
import { NextRequest } from 'next/server';

const endpoint = "groups";
const apiUrl = process.env.RAILS_API_URL

export async function POST(req: NextRequest) {
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
  const group = data.group;
  
  if (!group){
    return new Response(JSON.stringify({ error: 'job_recordがありません' }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  try {
    const response = await axios.post(`${apiUrl}/${endpoint}`, { 
      group
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
    if (axios.isAxiosError(error)) {
      console.error(error);
      // バックエンドからのエラーメッセージを取得
      const errorMessage = error.response && error.response.data ? error.response.data.error : '予期せぬエラーが発生しました';
      const status = error.response ? error.response.status : 500;
  
      return new Response(JSON.stringify({ error: errorMessage }), {
        status: status,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      // その他のエラー
      console.error('非Axiosエラー', error);
      return new Response(JSON.stringify({ error: '予期せぬエラーが発生しました' }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
}
