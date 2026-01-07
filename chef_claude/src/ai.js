import { InferenceClient } from "@huggingface/inference";

const HF_API_KEY = import.meta.env.VITE_HF_API_KEY;
const client = new InferenceClient(HF_API_KEY);

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients.
Format your response in markdown.
`;

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  try {
    const response = await client.chatCompletion({
      model: "openai/gpt-oss-120b", 
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });

    return response.choices[0].message.content;
  } catch (err) {
    console.error("Failed to perform inference:", err.message);
    return null;
  }
}
