import fetch from 'node-fetch';

// This is a serverless Next.js (API route) function to fetch headlines from NewsAPI.org
// Replace NEWSAPI_KEY with your API key in .env.local for actual use

export default async function handler(req, res) {
  const NEWSAPI_KEY = process.env.NEWSAPI_KEY;
  if (!NEWSAPI_KEY) {
    return res.status(400).json({ error: 'Missing NewsAPI API key.' });
  }
  const sources = [
      'cnn', 'bbc-news', 'bloomberg', 'reuters', 'fox-news', 'the-new-york-times', 'al-jazeera-english', 'associated-press'
  ];
  const allResults = [];

  for (const src of sources) {
    const url = `https://newsapi.org/v2/top-headlines?sources=${src}&pageSize=5&apiKey=${NEWSAPI_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.articles) {
        allResults.push({ source: src, articles: data.articles });
      }
    } catch (err) {
      allResults.push({ source: src, error: err.toString() });
    }
  }
  res.status(200).json({ results: allResults });
}
