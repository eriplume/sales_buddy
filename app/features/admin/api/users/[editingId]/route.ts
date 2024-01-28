import axios from 'axios';
import { getJwt } from '@/lib/getJwt';
import { NextRequest } from 'next/server';

const endpoint = "admin/users";
const apiUrl = process.env.RAILS_API_URL

export async function PATCH(req: NextRequest, { params }: { params: { editingId: string } }) {
  const { accessToken } = await getJwt(req);
  const id = params.editingId
      
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
    
  if (!user){
    return new Response(JSON.stringify({ error: 'taskがありません' }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  
  try {
    const response = await axios.patch(`${apiUrl}/${endpoint}/${id}`, { 
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

export async function DELETE(req: NextRequest, { params }: { params: { editingId: string } } ) {
  const { accessToken } = await getJwt(req);
  const id = params.editingId
      
  if (!accessToken) {
    return new Response(JSON.stringify({ error: '認証が必要です' }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  
  if (!id){
    return new Response(JSON.stringify({ error: 'taskがありません' }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  
  try {
    const response = await axios.delete(`${apiUrl}/${endpoint}/${id}`, {
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
