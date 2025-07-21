import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./StablecoinPriceTracker.css";

const StablecoinTracker = () => {
  const [prices, setPrices] = useState({});

  const stablecoins = [
    "tether",
    "usd-coin",
    "dai",
    "binance-usd",
    "true-usd",
  ];

  const fetchPrices = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${stablecoins.join(
          ","
        )}&vs_currencies=usd`
      );

      if (!response.ok) {
        throw new Error("API call failed or rate limit exceeded");
      }

      const data = await response.json();
      setPrices(data);

      // Stability Check and Notification
      stablecoins.forEach((coin) => {
        const price = data[coin]?.usd;
        if (price && (price > 1.01 || price < 0.99)) {
          toast.warn(
            `${coin.toUpperCase()} is not stable! Price: $${price.toFixed(4)}`
          );
        }
      });
    } catch (error) {
      toast.error("Error fetching prices or too many requests.");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPrices(); // first call
    const interval = setInterval(fetchPrices, 600000); // 10 min
    return () => clearInterval(interval);
  }, []);

  return (
    
    
    <div className="tracker-container">
          <h2 style={{ textAlign: "center", marginBottom: 30,fontSize: 40, fontWeight: "bold", color: "red" }}>Stablecoin Prices Coins of Last (24hr)</h2>

      <h2>🪙 Stablecoin Price Tracker</h2>

      <div className="card-grid">
        {Object.entries(prices).map(([coin, data]) => {
          const price = data.usd;
          const isStable = price >= 0.99 && price <= 1.01;

          return (
            <div
              key={coin}
              className={`price-card ${isStable ? "stable" : "unstable"}`}
            >
              <h3>{coin.toUpperCase()}</h3>
              <p>${price.toFixed(4)}</p>
              <div className="status">{isStable ? "Stable ✅" : "Unstable ⚠️"}</div>
            </div>
          );
        })}
      </div>

      <ToastContainer />
    </div>
  );
};

export default StablecoinTracker;
