import { ChatOpenAI } from "langchain/chat_models/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

import { NextResponse } from "next/server";

const llm = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.9,
});

// const memory = new BufferMemory();

const chain = new ConversationChain({ llm: llm });

const run = async (input) => {
  try {
    const { response } = await chain.call({ input: input });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const askFirstQuestion = async (category) => {
  const input = `Ask a trivia question about ${category} category `;

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
    console.log(response);

    return NextResponse.json({
      response: response,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
