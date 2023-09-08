import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

import { NextResponse } from "next/server";

const model = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.9,
});

const memory = new BufferMemory();

const chain = new ConversationChain({ llm: model, memory: memory });

const run = async (input) => {
  try {
    const response = await chain.run({ input: input });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const askFirstQuestion = async (category) => {
  const input = `Can you ask any question about ${category}`;
  const firstQuestion = await run(input);
  return firstQuestion;
};

export async function POST(req) {
  try {
    const { input, category } = await req.json();
    if (category?.length) {
      const response = await askFirstQuestion(category);
      return NextResponse.json({
        response: response,
      });
    }

    const response = await run(input);

    return NextResponse.json({
      response: response,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
