import axios from 'axios';

export const ExchangeRates = async () => {

  // API url constant https://v6.exchangerate-api.com/v6/383492934bbadd506d72377b/latest/USD
  const endpoint = `https://v6.exchangerate-api.com/v6/383492934bbadd506d72377b/latest/USD`;

  try {
    const response = await axios.get(endpoint);
    return response.data; // exchange rate data
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    throw new Error("Failed to fetch exchange rates.");
  }
};
