const CurrencySelector = ({ currencies, selectedCurrency, label, onCurrencyChange }) => {
  return (
    <div className="mb-4 w-full md:w-1/2">
      <label className="block text-lg font-medium dark:text-gray-200 text-gray-700 mb-2">{label}</label>
      <select
        value={selectedCurrency}
        onChange={onCurrencyChange}
        className="bg-gray-100 block dark:text-gray-800 w-full p-2 border border-none rounded-lg shadow-sm focus:outline-none focus:border-orange-500"
      >
        <option value="">Select</option>
        {currencies.map((currency) => (
          <option key={currency.name}>
            {currency.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
