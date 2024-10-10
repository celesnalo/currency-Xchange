
const ConvertButton = ({ onClick }) => {
  return (
    <div className="h-16 w-16 animate-hflip rounded-md text-center">
      <button
        onClick={onClick}
        className="
        text-2xl
        bg-orange-600
        p-4
        text-white 
        rounded-lg 
        shadow 
        hover:bg-orange-800"
      >
        Convert
      </button>
    </div>
  );
};

export default ConvertButton;
