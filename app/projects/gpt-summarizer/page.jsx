"use client";
import { Upload, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const page = () => {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Initialize with page 1
  const [width, setWidth] = useState(400);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];

    // console.log(file.type);
    setFile(file);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    // Set the number of pages when the PDF is loaded
    setNumPages(numPages);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section>
      <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <form onSubmit={handleSubmit} className=" text-darkGrayishBlue">
            <div className="flex space-x-3 max-w-2xl w-full">
              <label>
                <span>
                  <Upload className="hover:cursor-pointer" />
                </span>

                <input
                  id="file-upload"
                  type="file"
                  accept="application/pdf"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
            </div>
            <div>{file && <span>{file.name}</span>}</div>
          </form>
        </div>

        {file && (
          <div className="flex items-center mt-1 mb-1 shadow-2xl">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="px-0 py-0 text-black rounded-full bg-gray-light hover:bg-gray-100 focus:outline-none bg-transparent"
            >
              <ChevronLeft size={20} />
            </button>
            <div style={{ width: "100%", height: "100%" }}>
              <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                options={options}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Page
                    pageNumber={currentPage}
                    width={width}
                    className="transition ease-in-out delay-150"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 999, // Higher z-index to make the icon clickable
                    }}
                  >
                    <Maximize2
                      className="cursor-pointer text-brightRedSupLight hover:text-brightRedLight"
                      onClick={() => {
                        if (width === 400) {
                          setWidth(800);
                        } else setWidth(400);
                      }}
                    />
                  </div>
                </div>
              </Document>
            </div>
            <button
              onClick={goToNextPage}
              disabled={currentPage === numPages}
              className="px-0 py-0 text-black rounded-full bg-gray-light hover:bg-gray-100 focus:outline-none bg-transparent"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default page;
