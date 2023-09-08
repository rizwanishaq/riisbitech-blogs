"use client";

import { useState, useEffect } from "react";

const AIQuiz = () => {
  const categories = [
    { label: "Sport", value: "sport" },
    { label: "Hollywood", value: "hollywood" },
    { label: "Biology", value: "biology" },
    { label: "Geography", value: "geography" },
  ];

  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const askFirstQuestion = async () => {
      const result = await fetch("/api/projects/ai-quiz", {
        method: "post",
        body: JSON.stringify({ category: category }),
      });
      const { response } = await result.json();
      setResponse(response);
    };

    if (category !== "") {
      askFirstQuestion();
    }
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetch("/api/projects/ai-quiz", {
      method: "post",
      body: JSON.stringify({
        input: `AI : ${response}\n: ${input}\nAI: Evaluate the answer and ask another trivia question`,
      }),
    });

    const response_ = await result.json();
    setResponse(response_.response);
    setInput("");
  };

  return (
    <div className="container mx-auto p-4 w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
      <h1 className="text-2xl font-bold mb-4">Quiz Bot Game Show</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your answer"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border border-gray:300 rounded"
        >
          {/* <opttion selected>Select a category</opttion> */}
          {categories.map((catg) => (
            <option key={catg.value} value={catg.value}>
              {catg.label}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full p-2 border border-gray-300 rounded"
        >
          Submit
        </button>
      </form>
      {response && (
        <div className=" mt-4 p-4 bg-gray-100 border border-gray-300 rounded">
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default AIQuiz;
