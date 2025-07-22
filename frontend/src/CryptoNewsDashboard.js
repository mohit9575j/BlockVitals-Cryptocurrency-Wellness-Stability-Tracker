import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NewsPreview() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(" http://13.203.231.177:5000/api/news?page=1&limit=6");
        const data = await response.json();

        setArticles(data.articles || []);
      } catch (err) {
        setError("Kuch galat ho gaya hai. Try again later.");
      }

      setLoading(false);
    };

    fetchNews();
  }, []);

  if (loading) return <p className="text-center text-white">Loading news...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Latest Crypto News (24hr)</h2>

      {/* News Cards in Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Image */}
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

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{article.title}</h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
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

      {/* See All Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/news")}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md"
        >
          Read See All
        </button>
      </div>
    </div>
  );
}

export default NewsPreview;
