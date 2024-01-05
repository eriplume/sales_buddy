import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const promptText = data.prompt;

    if (!promptText) {
      return new Response(JSON.stringify({ text: 'Prompt is required' }), { status: 400 });
    }
  
    const completion = await openai.completions.create({
      model: "text-davinci-003",
      prompt: `次の週間レポートの内容を基に、300字以内の日本語で月間レポートとして要約してください：\n\n${promptText}`,
      max_tokens: 2048
    });
  
    const response = completion.choices[0].text?.trim() || 'Sorry, there was an error.';
    return new Response(JSON.stringify({ text: response }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ text: 'Server error' }), { status: 500 });
  }
}
