
const ConversionResult = ({ fromCurrency, toCurrency, convertedValue, amount }) => {
  return (
    <div className="mt-6">
      {fromCurrency && toCurrency && convertedValue ? (
        <div className="text-center text-xl dark:text-gray-200 text-gray-700">
          <p>
            {`${fromCurrency} to ${toCurrency}:`}
          </p>
          <p className="text-2xl mt-6">= <span className="text-5xl">{convertedValue.toFixed(2)} </span></p>
        </div>
      ) : (
        <p className=" text-xl font-medium  dark:text-gray-400 text-gray-500"><i>Please complete the inputs and click "Convert" to see the result.</i></p>
      )}
    </div>
  );
};

export default ConversionResult;