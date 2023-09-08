import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Personal Blogs Page",
  description: "This is the description of the blog page",
  keywords: "blog, page, personal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/ort.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@ricky0123/vad-web@0.0.7/dist/bundle.min.js"></script>
      </Head>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
