import axios from 'axios';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchWithRetry = async (endpoint, retries = 3, baseDelay = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/${endpoint}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      );
      return response.data;
    } catch (error) {
      if (error.response?.status === 429 && i < retries - 1) {
        // Calculate delay with exponential backoff
        const waitTime = baseDelay * Math.pow(2, i);
        console.log(`Rate limited. Retrying in ${waitTime}ms...`);
        await delay(waitTime);
        continue;
      }
      throw error;
    }
  }
};

export const fetchNews = {
  topHeadlines: (country = 'us') => 
    fetchWithRetry(`top-headlines?country=${country}`),
  
  entertainment: (country = 'us') => 
    fetchWithRetry(`top-headlines?country=${country}&category=entertainment`),
  
  technology: (country = 'us') => 
    fetchWithRetry(`top-headlines?country=${country}&category=technology`),
  
  interviews: () => 
    fetchWithRetry('everything?q=interview&language=en&sortBy=publishedAt&pageSize=3'),
  
  travel: () => 
    fetchWithRetry('everything?q=travel+tourism&language=en&sortBy=publishedAt&pageSize=1'),
  
  sustainableCities: () => 
    fetchWithRetry('everything?q=sustainable+cities+urban&language=en&sortBy=publishedAt&pageSize=3'),
  
  categoryNews: (category, pageSize = 5) => 
    fetchWithRetry(`top-headlines?category=${category}&language=en&pageSize=${pageSize}`),
  
  topicNews: (topic, pageSize = 4) => 
    fetchWithRetry(`everything?q=${topic}&language=en&sortBy=publishedAt&pageSize=${pageSize}`),
  
  science: () =>
    fetchWithRetry('everything?q=science+discovery+research&language=en&sortBy=publishedAt&pageSize=3'),
  
  health: () =>
    fetchWithRetry('everything?q=health+medical+breakthrough&language=en&sortBy=publishedAt&pageSize=3'),
  
  culture: () =>
    fetchWithRetry('everything?q=culture+society+lifestyle&language=en&sortBy=publishedAt&pageSize=3'),
  
  arts: () =>
    fetchWithRetry('everything?q=art+exhibition+museum+gallery&language=en&sortBy=publishedAt&pageSize=3')
}; 