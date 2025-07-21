import React, { useEffect, useState } from "react";

const coinsList = [
  "bitcoin", "ethereum", "ripple", "litecoin", "dogecoin",
  "cardano", "polkadot", "bitcoin-cash", "stellar", "chainlink",
  "binancecoin", "tether", "monero", "tron", "vechain",
  "solana", "uniswap", "theta-token", "filecoin", "tezos"
];

function CryptoConverter() {
  const [fromCoin, setFromCoin] = useState("bitcoin");
  const [toCoin, setToCoin] = useState("ethereum");
  const [amount, setAmount] = useState(1);
  const [prices, setPrices] = useState({});
  const [converted, setConverted] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch prices of coins in terms of USD (could add INR too if want)
  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true);
      setError("");
      try {
       
 
      const response = await fetch(
      `http://localhost:5000/api/prices?coins=${coinsList.join(",")}`
      );



        if (!response.ok) throw new Error("Failed to fetch prices");
        const data = await response.json();
        setPrices(data);
      } catch (err) {
        setError(err.message || "Error fetching prices");
      }
      setLoading(false);
    };
    fetchPrices();
  }, []);

  // Calculate conversion when inputs or prices change
  useEffect(() => {
    if (!prices[fromCoin] || !prices[toCoin]) {
      setConverted(null);
      return;
    }
    // Convert amount in fromCoin to USD then USD to toCoin
    const fromPriceUSD = prices[fromCoin].usd;
    const toPriceUSD = prices[toCoin].usd;

    const result = (amount * fromPriceUSD) / toPriceUSD;
    setConverted(result);
  }, [amount, fromCoin, toCoin, prices]);

  if (loading) return <p style={{ textAlign: "center" }}>Loading prices...</p>;
  if (error) return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;

  return (
    <div style={{ maxWidth: 450, margin: "30px auto", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center", marginBottom: 30,fontSize: 25, fontWeight: "bold", color: "white" }}>Crypto Converter</h2>

      <div style={{ marginBottom: 20 }}>
        <label  style={{color: "white" }} >Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          style={{ width: "100%", padding: 8, fontSize: 16, marginTop: 6 }}
          min={0}
        />
      </div>

      <div style={{ marginBottom: 20 }}>
        <label  style={{color: "white" }}>From Coin:</label>
        <select
          value={fromCoin}
          onChange={(e) => setFromCoin(e.target.value)}
          style={{ width: "100%", padding: 8, fontSize: 16, marginTop: 6 }}
        >
          {coinsList.map((coin) => (
            <option key={coin} value={coin}>
              {coin.charAt(0).toUpperCase() + coin.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={{color: "white" }}>To Coin:</label>
        <select
          value={toCoin}
          onChange={(e) => setToCoin(e.target.value)}
          style={{ width: "100%", padding: 8, fontSize: 16, marginTop: 6 }}
        >
          {coinsList.map((coin) => (
            <option key={coin} value={coin}>
              {coin.charAt(0).toUpperCase() + coin.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div
        style={{
          marginTop: 20,
          padding: 15,
          backgroundColor: "#f0f0f0",
          borderRadius: 6,
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        {converted !== null ? (
          <>
            {amount} {fromCoin.toUpperCase()} = {converted.toFixed(6)} {toCoin.toUpperCase()}
          </>
        ) : (
          "Enter amount and select coins"
        )}
      </div>
    </div>
  );
}

export default CryptoConverter;
