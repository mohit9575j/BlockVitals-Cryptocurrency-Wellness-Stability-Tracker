

 import React, { useEffect, useState } from "react";

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const url = `http://13.203.231.177:5000/api/market-prices?page=${page}&limit=${limit}`;
      const response = await fetch(url);
      const data = await response.json();
      setCoins(data.data);
      setTotalPages(Math.ceil(data.total / limit));
    } catch (err) {
      setError("Something went wrong.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const getHealthStatus = (change) => {
    if (change > 3) return "🟢 Healthy";
    if (change > -2) return "🟡 Neutral";
    return "🔴 Risky";
  };

  if (loading) return <p className="text-center text-white mt-10">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-4 text-white font-sans">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-10">
        Top Crypto Coins With Detailed Stats
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="bg-[#1e1e2f] border border-gray-700 rounded-lg p-4 shadow-lg relative"
          >
            {/* Health Status Badge - TOP */}
            <div className="absolute -top right-4 bg-gradient-to-r from-green-400 to-blue-500 px-5 py-2 rounded-full text-xl font-extrabold text-black shadow-md z-10">
              {getHealthStatus(coin.price_change_percentage_24h)}
            </div>

            {/* Header */}
            <div className="flex items-center gap-4 mb-4 mt-6">
              <img src={coin.image} alt={coin.name} className="w-16 h-16 rounded-full" />
              <div>
                <h2 className="text-xl font-semibold">
                  {coin.name} ({coin.symbol.toUpperCase()})
                </h2>
                <p className="text-sm text-gray-400">Rank: #{coin.market_cap_rank}</p>
              </div>
            </div>

            {/* Price and Volume */}
            <div className="grid grid-cols-2 gap-3 text-sm mb-4">
              <p>💰 Price: ₹{coin.current_price.toLocaleString()}</p>
              <p>📊 Market Cap: ₹{coin.market_cap.toLocaleString()}</p>
              <p>💹 Volume (24h): ₹{coin.total_volume.toLocaleString()}</p>
              <p>🔁 Circulating Supply: {coin.circulating_supply.toLocaleString()}</p>
              <p>📈 High (24h): ₹{coin.high_24h.toLocaleString()}</p>
              <p>📉 Low (24h): ₹{coin.low_24h.toLocaleString()}</p>
            </div>

            {/* Change, ROI, ATH/ATL */}
            <div className="grid grid-cols-2 gap-3 text-sm mb-4">
              <p>📉 Price Change (24h): ₹{coin.price_change_24h.toFixed(2)}</p>
              <p>📉 Change % (24h): {coin.price_change_percentage_24h.toFixed(2)}%</p>
              <p>📉 MCap Change: ₹{coin.market_cap_change_24h.toFixed(2)}</p>
              <p>📉 MCap % Change: {coin.market_cap_change_percentage_24h.toFixed(2)}%</p>

              <p>📈 ATH: ₹{coin.ath.toLocaleString()}</p>
              <p>📉 ATL: ₹{coin.atl.toLocaleString()}</p>

              <p>📉 From ATH: {coin.ath_change_percentage.toFixed(2)}%</p>
              <p>📈 From ATL: {coin.atl_change_percentage.toFixed(2)}%</p>
            </div>

            {/* ROI */}
            {coin.roi && (
              <div className="text-sm text-green-300 mb-4">
                ROI: {coin.roi.percentage.toFixed(2)}% ({coin.roi.currency.toUpperCase()})
              </div>
            )}

            {/* Last Updated */}
            <p className="text-xs text-gray-400 mt-2">
              🕒 Last Updated: {new Date(coin.last_updated).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className={`px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white ${
            page === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Prev
        </button>
        <span className="text-lg font-semibold px-4 py-2 bg-gray-800 rounded">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white ${
            page === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
