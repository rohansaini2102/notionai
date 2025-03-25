import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateImagePrompt(name: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You are an creative and helpful AI assistance capable of generating interesting thumbnail descriptions for my notes. Your output will be fed into the DALLE API to generate a thumbnail. The description should be minimalistic and flat styled",
        },
        {
          role: "user",
          content: `Please generate a thumbnail description for my notebook titles ${name}`,
        },
      ],
    });
    
    return completion.choices[0].message.content;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function generateImage(image_description: string) {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: image_description,
      n: 1,
      size: "1024x1024",
    });
    
    return response.data[0].url;
  } catch (error) {
    console.error(error);
    throw error;
  }
}