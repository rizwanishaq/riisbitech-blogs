import { HfInference } from "@huggingface/inference";
import { NextResponse } from "next/server";

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export async function POST(req) {
  try {
    const { text, lang } = await req.json();

    // Map the languages to the correct models
    const languageModels = {
      "en-es": "Helsinki-NLP/opus-mt-en-es",
      "en-de": "Helsinki-NLP/opus-mt-en-de",
      "en-fr": "Helsinki-NLP/opus-mt-en-fr",
      // Add more models as needed
    };

    const translationResponse = await hf.translation({
      model: languageModels[lang], // Select the model based on the language
      inputs: text,
    });

    return NextResponse.json({
      translation_text: translationResponse.translation_text,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
