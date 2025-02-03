
const Spinner = ({ size,color }: { size: 24 | 32 | 40 | 48 | 64 | 80 | 96,color:"border-Background-light"| "border-Red-Background"|"border-Primary-main" }) => {
  return (
    <div className="flex items-center justify-center ">
      <div
        className={`animate-spin rounded-full border-4 border-t-transparent ${color} transition-all duration-300`}
        style={{
          height: `${size}px`,
          width: `${size}px`,
          boxShadow: `0 0 10px rgba(0, 0, 0, 0.2)`,
        }}
      ></div>
    </div>
  );
};

export default Spinner;
