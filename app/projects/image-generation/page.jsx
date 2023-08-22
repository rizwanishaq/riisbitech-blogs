"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ImageGeneration = () => {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [processing, setProcessing] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setImage("");
      setProcessing(true);
      const response = await fetch("/api/projects/generate-image", {
        method: "POST",
        body: JSON.stringify({
          prompt: prompt,
        }),
      });
      const { imageUrl } = await response.json();
      setImage(imageUrl);
      setProcessing(false);
      setPrompt("");
    } catch (error) {
      console.log(error);
    } finally {
      setProcessing(false);
      setPrompt("");
      router.refresh();
    }
  };

  return (
    <section className="flex items-center justify-center min-w-screen p-4">
      <div className="flex flex-col items-center space-y-12 max-w-2xl w-full mx-auto">
        <Image
          src={
            !processing
              ? `data:image/jpg;base64,${image}`
              : "/assets/icons/loader.svg"
          }
          width={512}
          height={512}
          alt="generated image"
          className="shadow-2xl rounded-lg"
        />

        <form onSubmit={handleSubmit} className=" text-darkGrayishBlue">
          <div className="flex space-x-3 max-w-2xl w-full">
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              type="text"
              placeholder="Write a prompt to generate image"
              required
              className="flex-1 px-3 rounded-full focus:outline-none bg-veryPaleRed"
            />
            <button
              type="submit"
              className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
              disabled={processing}
            >
              {processing ? "Generating..." : "Generate"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ImageGeneration;
