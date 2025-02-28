const Card2 = ({ title, description, location, imageUrl, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-full xs:min-w-[300px] sm:min-w-[350px] md:min-w-[389px] relative h-auto sm:h-[420px] md:h-[457px] 
                 cursor-pointer p-4 sm:p-5 bg-white rounded-lg border border-border"
    >
      <img
        src={imageUrl}
        alt={`${title} daycare`}
        className="rounded-t-lg w-full h-[180px] sm:h-[200px] object-cover"
      />
      <div className="py-3 sm:py-4">
        <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold font-sour mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-[14px] sm:text-[16px] mb-3 sm:mb-4">
          {description}
        </p>
        <div className="flex items-center gap-2 absolute bottom-3 sm:bottom-5 text-gray-500">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0009 13.4301C13.724 13.4301 15.1209 12.0332 15.1209 10.3101C15.1209 8.58694 13.724 7.19006 12.0009 7.19006C10.2777 7.19006 8.88086 8.58694 8.88086 10.3101C8.88086 12.0332 10.2777 13.4301 12.0009 13.4301Z"
              stroke="#FE5724"
              strokeWidth="1.5"
            />
            <path
              d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
              stroke="#FE5724"
              strokeWidth="1.5"
            />
          </svg>
          <span className="text-xs sm:text-sm">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default Card2;
