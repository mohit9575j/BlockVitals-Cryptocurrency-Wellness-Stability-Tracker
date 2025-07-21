 
import axios from 'axios'; 

let cachedNews = null;
let lastFetchTime = 0;
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

const NEWS_API_KEY = '6cefd679150142c7b3c30edcf1f61783';

export const getCryptoNews = async (req, res) => {
  try {
    const now = Date.now();

     const page = parseInt(req.query.page) || 1;        
    const limit = parseInt(req.query.limit) || 10;     
    const startIndex = (page - 1) * limit;

     if (cachedNews && (now - lastFetchTime < CACHE_DURATION)) {
      const paginatedData = cachedNews.articles.slice(startIndex, startIndex + limit);
      return res.json({
        totalResults: cachedNews.articles.length,
        totalPages: Math.ceil(cachedNews.articles.length / limit),
        currentPage: page,
        articles: paginatedData,
      });
    }

    // Step 3: API call
    const url = `https://newsapi.org/v2/everything?q=crypto&language=en&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;
    const response = await axios.get(url);

    cachedNews = response.data;
    lastFetchTime = now;

    // Step 4: Slice karna (pagination apply karna)
    const paginatedData = response.data.articles.slice(startIndex, startIndex + limit);

    // Step 5: Response return
    res.json({
      totalResults: response.data.articles.length,
      totalPages: Math.ceil(response.data.articles.length / limit),
      currentPage: page,
      articles: paginatedData,
    });

  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
};
