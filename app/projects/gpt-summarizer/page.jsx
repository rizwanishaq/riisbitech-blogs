"use client";
import UploadIcon from "@/components/UploadIcon";
import { useState } from "react";
const page = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];

    setFile(file);
  };

  return (
    <section>
      <div className="flex items-center justify-center min-w-screen p-4">
        <div className="flex flex-col items-center space-y-12 max-w-2xl w-full mx-auto">
          <div className="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              {file ? <span>{file.name}</span> : <UploadIcon />}
              <input
                id="dropzone-file"
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
