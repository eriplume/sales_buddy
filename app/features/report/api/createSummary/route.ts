import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const maxDuration = 60;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const promptText = data.prompt;

    if (!promptText) {
      return new Response(JSON.stringify({ text: 'Prompt is required' }), { status: 400 });
    }
  
    const completion = await openai.chat.completions.create({
      model: "gpt-4-0613",
      messages: [
        {"role": "system", "content": "次の週間レポートの内容を基に、日本語で300字以内で、月間レポートとして要約してください。"},
        {"role": "user", "content": promptText}
    ],
      max_tokens: 400,
    });
  
    const response = completion.choices[0].message.content|| 'Sorry, there was an error.';
    return new Response(JSON.stringify({ text: response }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ text: 'Server error' }), { status: 500 });
  }
}
