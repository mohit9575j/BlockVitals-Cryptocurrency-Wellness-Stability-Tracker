
import React, { useState, useEffect } from "react";

function NewsGrid() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const limit = 9; // 3x3 grid = 9 items per page

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(`http://localhost:5000/api/news?page=${currentPage}&limit=${limit}`);
        const data = await res.json();

        setArticles(data.articles || []);
        setTotalPages(data.totalPages || 1);
      } catch (err) {
        setError("Kuch galat ho gaya hai. Try again.");
      }

      setLoading(false);
    };

    fetchNews();
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl text-white font-bold text-center mb-6">Latest Crypto News</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            {article.urlToImage ? (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-[300px] object-cover"
              />
            ) : (
              <div className="w-full h-[300px] flex items-center justify-center bg-gray-300 text-gray-700">
                No Image
              </div>
            )}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{article.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-3">
                {article.description || "No description available."}
              </p>
              <button
                onClick={() => window.open(article.url, "_blank")}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded bg-gray-800 text-white ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"}`}
        >
          Prev
        </button>
        <span className="text-white text-lg pt-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded bg-gray-800 text-white ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default NewsGrid;

