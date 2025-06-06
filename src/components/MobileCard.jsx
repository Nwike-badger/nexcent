const MobileSection = ({ imageSrc, heading, text, buttonLabel = "Learn More" }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-28 px-4 py-8">
      <div className="w-full lg:w-1/4">
        <img
          src={imageSrc}
          alt="Illustration"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="w-full lg:w-1/3 text-center lg:text-left">
        <h2 className="text-2xl font-semibold mb-4">{heading}</h2>
        <p className="text-gray-600 mb-6 text-sm">{text}</p>
        <button className="bg-[#4CAF4F] text-white px-6 py-3 rounded shadow-md hover:bg-green-700 transition">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default MobileSection;
