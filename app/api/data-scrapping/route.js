import { JSDOM } from "jsdom";
import { NextResponse } from "next/server";

// import { sendSMS } from "@/utils/twilio-config";

export async function POST(req) {
  try {
    const { product_url } = await req.json();

    const response = await fetch(product_url);
    const html = await response.text();

    const dom = new JSDOM(html);

    const document = dom.window.document;

    const product_id = document
      .querySelector("#productTitle")
      .textContent.trim();

    const price = document.querySelector(".a-price .a-offscreen").textContent;

    // const message = sendSMS({ body: `Price of ${product_id} is ${price}` });
    // console.log(message);

    const product_info = { price, product_id, product_url };

    return NextResponse.json({ product_info: product_info });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
