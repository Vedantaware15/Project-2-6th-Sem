const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const axios = require('axios');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// GET route to fetch news
router.get('/summarize', async (req, res) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: {
        country: 'in',
        apiKey: process.env.NEWS_API_KEY,
        pageSize: 20
      }
    });

    const articles = response.data.articles;
    res.json(articles);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

// POST route to summarize articles
router.post('/summarize', async (req, res) => {
  const { content } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
    const prompt = `Summarize the following news article:\n\n${content}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const summary = await response.text();
    res.json({ summary });
  } catch (err) {
    console.error('Error in summarization:', err);
    res.status(500).json({ error: 'Failed to summarize article' });
  }
});

module.exports = router;
