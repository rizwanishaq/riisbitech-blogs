"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";

const Scrapping = () => {
  const [product_search, setProduct_Search] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const columns = [
    {
      name: "Product",
      selector: (row) => row.title,
      wrap: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "imageUrl",
      selector: (row) => (
        <Link href={row.imageUrl} target="_blank">
          {row.imageUrl}
        </Link>
      ),
      maxWidth: "100px",
    },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setIsLoading(true);
      const response = await fetch("/api/projects/data-scrapping", {
        method: "POST",
        body: JSON.stringify({
          product_search: product_search,
        }),
      });
      const { products } = await response.json();
      setData(products);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <section id="scrapping">
      <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        {/* Left Item */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-2xl font-bold text-center  md:text-left">
            Streamlined Web Scraping for Comprehensive Product Information
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Efficiently manage and extract comprehensive information from the
            provided product URL using advanced web scraping techniques. Gather
            diverse details including specifications, pricing, reviews, and
            images for a thorough dataset. This organized extraction process
            aims to enable insightful analysis and well-informed decision-making
            based on the compiled product information.
          </p>
          <div className="flex justify-center md:justify-start">
            <form onSubmit={handleSubmit} className=" text-darkGrayishBlue">
              <div className="flex space-x-3 max-w-2xl w-full">
                <input
                  value={product_search}
                  onChange={(e) => setProduct_Search(e.target.value)}
                  type="text"
                  placeholder="Search product"
                  required
                  className="flex-1 px-6 rounded-full focus:outline-none bg-veryPaleRed"
                />
                <button
                  type="submit"
                  className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
                  disabled={isLoading}
                >
                  {isLoading ? "processing" : "Go"}
                </button>
              </div>
            </form>
            {error && <p className="text-red-500">{error.message}</p>}
          </div>
        </div>

        {/* table */}
        <div className="md:w-1/2 w-full">
          <DataTable
            title="Price Table"
            columns={columns}
            data={data}
            progressPending={isLoading}
          />
        </div>
      </div>
    </section>
  );
};

export default Scrapping;
