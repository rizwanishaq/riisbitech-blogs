"use client";
import { useState } from "react";
import Image from "next/image";

const Translate = () => {
  const [translatedText, setTranslatedText] = useState("");
  const [inputText, setInputText] = useState("");
  const [language, setLanguage] = useState("en-es");
  const [processing, setProcessing] = useState(false);

  const fetchTranslation = async () => {
    setProcessing(true);
    const response = await fetch("/api/projects/translate", {
      method: "post",
      body: JSON.stringify({ text: inputText, lang: language }),
    });

    const { translation_text } = await response.json();
    setTranslatedText(translation_text);
    setProcessing(false);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <section className="flex flex-col items-center space-y-12 max-w-2xl w-full mx-auto">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-brightRed to-light-brightRedLight shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Translate text</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose">Select Language</label>
                  <select
                    onChange={handleLanguageChange}
                    value={language}
                    className="p-4 border bg-veryPaleRed border-brightRedSupLight rounded text-gray-700 focus:outline-none focus:border-brightRed"
                  >
                    <option value="en-es">English to Spanish</option>
                    <option value="en-de">English to German</option>
                    <option value="en-fr">English to French</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Input Text</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={inputText}
                    className="p-4 border bg-veryPaleRed border-brightRedSupLight rounded text-gray-700 focus:outline-none focus:border-brightRed"
                  />
                </div>
                <button
                  onClick={fetchTranslation}
                  className="mt-6 px-10 py-3 bg-gradient-to-r from-brightRed to-brightRedLight text-white rounded shadow-md hover:shadow-lg transition duration-300"
                  disabled={processing}
                >
                  Translate
                </button>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p className="text-lg text-gray-700">
                  {processing ? (
                    <Image
                      src="/assets/icons/loader.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                  ) : (
                    translatedText
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Translate;
