import { JSDOM } from "jsdom";
import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

// import { sendSMS } from "@/utils/twilio-config";

export async function POST(req) {
  let browser;

  try {
    const { product_search } = await req.json();

    browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto("https://www.amazon.com");
    await page.type("#twotabsearchtextbox", product_search);
    await page.keyboard.press("Enter");
    await page.waitForNavigation();

    const html = await page.content();
    const $ = cheerio.load(html);

    const prices = $("span.a-offscreen")
      .map((index, element) => {
        return $(element).text();
      })
      .get();

    const titles = $("span.a-size-base-plus.a-color-base.a-text-normal")
      .map((index, element) => {
        return $(element).text();
      })
      .get();

    const reviews = $("span.a-size-base.s-underline-text")
      .map((index, element) => {
        return $(element).text();
      })
      .get();

    const imageUrls = $("img.s-image")
      .map((index, element) => {
        return $(element).attr("src");
      })
      .get();

    const products = [];

    for (let i = 0; i < titles.length; i++) {
      const item = {
        price: prices[i],
        title: titles[i],
        review: reviews[i],
        imageUrl: imageUrls[i],
      };
      products.push(item);
    }

    return NextResponse.json({ products });
  } catch (error) {
    return new NextResponse(`Internal error  - ${error.message}`, {
      status: 500,
    });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
