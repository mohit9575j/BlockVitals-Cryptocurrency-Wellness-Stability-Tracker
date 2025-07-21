 

 import axios from 'axios';

let cachedMarketPrices = null;
let lastFetchTime = 0;
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

const getMarketPrices = async (req, res) => {
  try {
    const { page = 1, limit = 20, coins } = req.query;
    const now = Date.now();

    let fullData = [];

     if (!coins && cachedMarketPrices && (now - lastFetchTime < CACHE_DURATION)) {
      fullData = cachedMarketPrices;
    } else {
      const url = `https://api.coingecko.com/api/v3/coins/markets`;
      const params = {
        vs_currency: 'inr',
        per_page: coins ? 250 : 250,   
        page: 1,
      };

      if (coins) {
        params.ids = coins;
      }

      const response = await axios.get(url, { params });
      fullData = response.data;


       if (!coins) {
        cachedMarketPrices = fullData;
        lastFetchTime = now;
      }
    }

    //  Pagination Logic
    const start = (page - 1) * limit;
    const end = start + Number(limit);
    const paginatedData = fullData.slice(start, end);

    return res.json({
      total: fullData.length,
      page: Number(page),
      limit: Number(limit),
      data: paginatedData,
    });

  } catch (error) {
    console.error("Error fetching market prices:", error.message);
    res.status(500).json({ error: "Failed to fetch market prices" });
  }
};

export default getMarketPrices;
