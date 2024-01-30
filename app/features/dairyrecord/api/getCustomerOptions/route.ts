import axios from 'axios';

export async function GET()  {

  const apiUrl = process.env.RAILS_API_URL

  try {
    const response = await axios.get(`${apiUrl}/customer_types`, {
      headers: {
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
