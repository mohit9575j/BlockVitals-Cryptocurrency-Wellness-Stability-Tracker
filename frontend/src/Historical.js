 

import React, { useEffect, useState, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  zoomPlugin
);

const coinsList = [
  { id: "bitcoin", name: "Bitcoin" },
  { id: "ethereum", name: "Ethereum" },
  { id: "binancecoin", name: "Binance Coin" },
  { id: "ripple", name: "Ripple" },
  { id: "cardano", name: "Cardano" },
  { id: "solana", name: "Solana" },
  { id: "dogecoin", name: "Dogecoin" },
  { id: "polkadot", name: "Polkadot" },
  { id: "litecoin", name: "Litecoin" },
  { id: "chainlink", name: "Chainlink" },
];

function HistoricalPriceChart() {
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [days, setDays] = useState(7);
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Cache last fetch timestamp and data per coin+days
  const cacheRef = useRef({});

  useEffect(() => {
    const cacheKey = `${selectedCoin}-${days}`;
    const now = Date.now();

    // Check if cache exists and is fresh (within 10 minutes)
    if (
      cacheRef.current[cacheKey] &&
      now - cacheRef.current[cacheKey].timestamp < 600000 // 600000 ms = 10 minutes
    ) {
      // Use cached data
      setChartData(cacheRef.current[cacheKey].data);
      setError("");
      setLoading(false);
      return;
    }

    // Else fetch new data
    const fetchHistoricalData = async () => {
      setLoading(true);
      setError("");
      setChartData(null);

      try {
 const url = ` http://13.203.231.177:5000/api/coin-chart?coinId=${selectedCoin}&days=${days}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch historical data");

        const data = await response.json();

        const labels = data.prices.map((p) =>
          new Date(p[0]).toLocaleDateString()
        );
        const prices = data.prices.map((p) => p[1]);

        const formattedData = {
          labels,
          datasets: [
            {
              label: `${selectedCoin.toUpperCase()} Price (INR)`,
              data: prices,
              fill: true,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 2,
              pointRadius: 3,
              pointHoverRadius: 6,
              tension: 0.3,
              hoverBorderWidth: 3,
              hoverBorderColor: "rgba(0, 123, 255, 0.8)",
            },
          ],
        };

        setChartData(formattedData);
        // Cache data + timestamp
        cacheRef.current[cacheKey] = { data: formattedData, timestamp: now };
      } catch (err) {
        setError(err.message || "Kuch galti ho gayi");
      }
      setLoading(false);
    };

    fetchHistoricalData();
  }, [selectedCoin, days]);

  // ... rest of your component (UI part) unchanged
  // return (...) same as before

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "40px auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: 30,
        background: "linear-gradient(135deg, #f0f9ff 0%, #cbebff 100%)",
        borderRadius: 16,
        boxShadow: "0 20px 40px rgba(0, 123, 255, 0.15), 0 10px 20px rgba(0,0,0,0.05)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#004d99",
          fontWeight: "700",
          fontSize: 28,
          marginBottom: 30,
          textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        Historical Price Chart
      </h2>

      <div
        style={{
          marginBottom: 25,
          textAlign: "center",
          fontSize: 18,
          color: "#333",
          display: "flex",
          justifyContent: "center",
          gap: 30,
          flexWrap: "wrap",
        }}
      >
        <label>
          <span style={{ fontWeight: "600", marginRight: 10 }}>Select Coin:</span>
          <select
            value={selectedCoin}
            onChange={(e) => setSelectedCoin(e.target.value)}
            style={{
              padding: "8px 12px",
              fontSize: 16,
              borderRadius: 8,
              border: "1.5px solid #007bff",
              outline: "none",
              cursor: "pointer",
              minWidth: 140,
            }}
          >
            {coinsList.map((coin) => (
              <option key={coin.id} value={coin.id}>
                {coin.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span style={{ fontWeight: "600", marginRight: 10 }}>Select Days:</span>
          <select
            value={days}
            onChange={(e) => setDays(e.target.value)}
            style={{
              padding: "8px 12px",
              fontSize: 16,
              borderRadius: 8,
              border: "1.5px solid #007bff",
              outline: "none",
              cursor: "pointer",
              minWidth: 140,
            }}
          >
            <option value={7}>7 Days</option>
            <option value={30}>30 Days</option>
            <option value={90}>90 Days</option>
            <option value={180}>180 Days</option>
            <option value={365}>1 Year</option>
          </select>
        </label>
      </div>

      {loading && <p style={{ textAlign: "center", fontSize: 18 }}>Loading...</p>}

      {error && (
        <p
          style={{
            color: "red",
            textAlign: "center",
            fontWeight: "700",
            fontSize: 18,
          }}
        >
          {error}
        </p>
      )}

      {chartData && (
        <div
          style={{
            background: "white",
            padding: 25,
            borderRadius: 12,
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          }}
        >
          <Line
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                  labels: { color: "#004d99", font: { size: 16, weight: "bold" } },
                },
                tooltip: {
                  mode: "nearest",
                  intersect: false,
                  backgroundColor: "rgba(0, 123, 255, 0.85)",
                  titleColor: "#fff",
                  bodyColor: "#fff",
                  cornerRadius: 6,
                  padding: 10,
                  displayColors: false,
                },
                zoom: {
                  zoom: {
                    wheel: {
                      enabled: true,
                    },
                    pinch: {
                      enabled: true,
                    },
                    mode: "x",
                  },
                  pan: {
                    enabled: true,
                    mode: "x",
                  },
                },
              },
              hover: { mode: "nearest", intersect: true },
              scales: {
                x: {
                  display: true,
                  title: {
                    display: true,
                    text: "Date",
                    color: "#007bff",
                    font: { size: 16, weight: "600" },
                  },
                  ticks: {
                    color: "#333",
                    maxRotation: 45,
                    minRotation: 30,
                    maxTicksLimit: 10,
                  },
                  grid: { display: false },
                },
                y: {
                  display: true,
                  title: {
                    display: true,
                    text: "Price (INR)",
                    color: "#007bff",
                    font: { size: 16, weight: "600" },
                  },
                  ticks: {
                    color: "#333",
                    beginAtZero: false,
                    callback: (value) => "₹" + value.toLocaleString(),
                  },
                  grid: { color: "rgba(0,0,0,0.05)" },
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
}

export default HistoricalPriceChart;
