
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [coinsData, setCoinsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10; // coins per page
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const url = ` http://13.203.231.177:5000/api/market-prices?page=${page}&limit=${limit}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch coins");

      const data = await response.json();
      setCoinsData(data.data);
      setTotalPages(Math.ceil(data.total / limit));
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const getHealthStatus = (change) => {
    if (change > 3) return "🟢 Healthy";
    if (change > -2) return "🟡 Neutral";
    return "🔴 Risky";
  };

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-4 font-sans">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
        Top Crypto Coins With Live Health Status (INR)
      </h2>

      <div className="grid gap-6">
        {coinsData.map((coin) => (
          <div
            key={coin.id}
            className="grid grid-cols-5 items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-md bg-white"
          >
            <img
              src={coin.image}
              alt={coin.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold">
                {coin.name} ({coin.symbol.toUpperCase()})
              </h3>
            </div>
            <div>
              <p>Price: ₹{coin.current_price.toLocaleString()}</p>
            </div>
            <div>
              <p>24h Change: {coin.price_change_percentage_24h?.toFixed(2)}%</p>
              <p className="font-bold">{getHealthStatus(coin.price_change_percentage_24h)}</p>
            </div>
            <div>
              <p>Market Cap: ₹{coin.market_cap.toLocaleString()}</p>
              <p>Volume: ₹{coin.total_volume.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className={`px-4 py-2 bg-blue-600 text-white rounded ${
            page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          Prev
        </button>

        <span className="text-lg font-medium text-white px-4 py-2 bg-gray-800 rounded">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className={`px-4 py-2 bg-blue-600 text-white rounded ${
            page === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Dashboard;







 
