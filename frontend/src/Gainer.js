 

import React, { useEffect, useState } from "react";

function TopGainersLosers() {
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          "http://localhost:5000/api/top-coins"
        );

        if (!response.ok) throw new Error("Failed to fetch coin data");

        const data = await response.json();

        const sortedByGain = [...data].sort(
          (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
        );
        const topGainers = sortedByGain.slice(0, 15);

        const sortedByLoss = [...data].sort(
          (a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h
        );
        const topLosers = sortedByLoss.slice(0, 15);

        setGainers(topGainers);
        setLosers(topLosers);
      } catch (err) {
        setError(err.message || "Kuch galti ho gayi");
      }
      setLoading(false);
    };

    fetchCoins(); // First fetch immediately

    const intervalId = setInterval(fetchCoins, 600000); // 600000 ms = 10 minutes

    return () => clearInterval(intervalId); // Clean-up on unmount
  }, []);

  if (loading)
    return <p style={{ textAlign: "center", fontSize: 20 }}>Loading...</p>;

  if (error)
    return (
      <p style={{ color: "red", textAlign: "center", fontSize: 18 }}>{error}</p>
    );

  const renderCoin = (coin) => (
    <div
      key={coin.id}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 15px",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#fff",
        borderRadius: 6,
        marginBottom: 8,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img
          src={coin.image}
          alt={coin.name}
          style={{ width: 40, height: 40, borderRadius: "50%" }}
        />
        <div>
          <strong style={{ fontSize: 18 }}>
            {coin.name} ({coin.symbol.toUpperCase()})
          </strong>
        </div>
      </div>
      <div style={{ fontSize: 16 }}>
        ₹{coin.current_price.toLocaleString()}{" "}
        <span
          style={{
            marginLeft: 10,
            color: coin.price_change_percentage_24h > 0 ? "green" : "red",
            fontWeight: "bold",
          }}
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </span>
      </div>
    </div>
  );

  const containerStyle = {
    maxHeight: 580, 
    overflowY: "auto",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  };

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "auto",
        padding: 20,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 30,fontSize: 40, fontWeight: "bold", color: "red" }}>Top 15 Gainers & Losers (24h)</h2>

      <div style={{ marginTop: 30 }}>
        <h3 style={{ textAlign: "center", marginBottom: 30,fontSize: 40, fontWeight: "bold", color: "white" }}>Top 15 Gainers</h3>
        <div style={containerStyle}>
          {gainers.map((coin) => renderCoin(coin))}
        </div>
      </div>

      <div style={{ marginTop: 40 }}>
        <h3 style={{ textAlign: "center", marginBottom: 30,fontSize: 40, fontWeight: "bold", color: "white" }}>Top 15 Losers</h3>
        <div style={containerStyle}>
          {losers.map((coin) => renderCoin(coin))}
        </div>
      </div>
    </div>
  );
}

export default TopGainersLosers;
