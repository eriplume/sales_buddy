import { fetchDataFromApi } from '@/lib/fetchDataFromApi';
import { getJwt } from '@/lib/getJwt';
import { type NextRequest } from 'next/server';

const endpoint = "customer_records";

export async function GET(req: NextRequest) {
  const accessToken = await getJwt(req); // JWTトークンの取得

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
