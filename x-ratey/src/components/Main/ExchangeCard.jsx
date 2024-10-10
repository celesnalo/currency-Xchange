import React, { useState, useEffect } from 'react';
import { ExchangeRates } from '../../services/ExchangeRates';
import CurrencySelector from './CurrencySelector';
import AmountInput from './AmountInput';
import ConvertButton from './ConvertButton';
import ConversionResult from './ConversionResult';

const CurrencyConverter = () => {
  const [currencyPair, setCurrencyPair] = useState({});
  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [convertedValue, setConvertedValue] = useState(0);

  // Fetch exchange rates on component mount
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const data = await ExchangeRates();
        setCurrencyPair(data.conversion_rates); // Set the conversion rates
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchRates();
  }, []);

  // Convert currencyPair object to an array of objects
  const currencyPairArr = Object.entries(currencyPair).map(([key, value]) => {
    return { name: key, rate: value };
  });

  // Handle conversion when the "Convert" button is clicked
  const handleConversion = () => {
    if (fromCurrency && toCurrency && amount) {
      const conversionRate = currencyPair[toCurrency] / currencyPair[fromCurrency];
      setConvertedValue(amount * conversionRate); // Calculate the converted value
    }
  };

  return (
    <div className="font-mono text-xl mx-auto p-6 dark:text-gray-300 dark:bg-gray-800 bg-white dark:shadow-lg shadow-lg rounded-lg mt-8 max-w-3xl">
      <h1 className="p-4 mb-6 text-5xl text-center">Currency Converter</h1>
      <p className="m-6 text-center"><i>Convert currencies quickly and easily with up-to-date exchange rates.</i></p>

      <AmountInput amount={amount} onAmountChange={(e) => setAmount(e.target.value)} />

      {/* Container for currency selectors */}
      <div className="flex flex-col md:flex-row md:space-x-4 mt-6 justify-between">
        <CurrencySelector
          label="From:"
          currencies={currencyPairArr}
          selectedCurrency={fromCurrency}
          onCurrencyChange={(e) => setFromCurrency(e.target.value)}
        />

        <CurrencySelector
          label="To:"
          currencies={currencyPairArr}
          selectedCurrency={toCurrency}
          onCurrencyChange={(e) => setToCurrency(e.target.value)}
        />
      </div>

      {/* Conversion result */}
      <div className="border border-orange-500 mt-6 p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
        <ConversionResult fromCurrency={fromCurrency} toCurrency={toCurrency} convertedValue={convertedValue} />
      </div>

      {/* Convert button */}
      <div className="flex justify-center mt-6">
      <ConvertButton onClick={handleConversion} />
      </div>
    </div>
  );
};

export default CurrencyConverter;
