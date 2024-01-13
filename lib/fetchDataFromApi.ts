import axios from 'axios';

export async function fetchDataFromApi(endpoint: string, accessToken: string) {
  try {
    const apiUrl = process.env.RAILS_API_URL;
    const response = await axios.get(`${apiUrl}/${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('APIからデータを取得できませんでした。');
  }
}
