const Card1 = ({ fileName, fileSize, logoSrc, onDelete }) => {
  return (
    <div className="flex items-center gap-3 w-full h-[95px] p-3 bg-white rounded-lg shadow">
      <div className="flex items-center justify-center">
        <img src={logoSrc} alt="logo" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[18px] font-semibold text-black-dark truncate">
          {fileName}
        </p>
        <p className="text-xs text-gray-500">{fileSize}</p>
      </div>
      <button onClick={onDelete} className="ml-1">
        <img src="/icons/trash.svg" alt="Delete" />
      </button>
    </div>
  );
};

export default Card1;
