import { useState, useEffect } from "react";
import { ExchangeRates } from "../../services/ExchangeRates";

function CurrencyConverter() {
  const [currencyPair, setCurrencyPair] = useState({});
  const [valuePair, setValuePair] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    const fetchRates = async () => {
      const response = await ExchangeRates();
      setCurrencyPair(response.data.conversion_rates);
    };
    fetchRates();
  }, []);

  const currencyPairArr = Object.entries(currencyPair).map(([key, value]) => {
    return { name: key, rate: value };
  });

  const handleConvert = () => {
    if (selectedCurrency) {
      const conversionRate = currencyPair[selectedCurrency];
      const result = valuePair * conversionRate;
      setConvertedAmount(result);
    }
  };

  return (
    <div className="p-8">
      <input
        type="number"
        value={valuePair}
        onChange={(e) => setValuePair(e.target.value)}
        className="w-full border-b-4 border-orange-700 m-4 p-4 bg-inherit text-2xl"
      />
      <select
        className="m-4 p-4 rounded"
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
      >
        <option value="">Select Currency</option>
        {currencyPairArr.map((data) => (
          <option key={data.name} value={data.name}>
            {data.name} - {data.rate}
          </option>
        ))}
      </select>
      <button
        onClick={handleConvert}
        className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg shadow hover:bg-orange-600"
      >
        Convert
      </button>
      {convertedAmount > 0 && (
        <p className="mt-4 text-lg">
          Converted Amount: {convertedAmount.toFixed(2)}
        </p>
      )}
    </div>
  );
}

export default CurrencyConverter;
