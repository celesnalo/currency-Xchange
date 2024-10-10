
const AmountInput = ({ amount, onAmountChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-lg font-medium dark:text-gray-200 text-gray-700 mb-2">Enter Amount</label>
      <input
        type="number"
        placeholder="0"
        value={amount}
        onChange={onAmountChange}
        className="text-center dark:text-gray-800 bg-gray-100 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-500"
      />
    </div>
  );
};

export default AmountInput;
