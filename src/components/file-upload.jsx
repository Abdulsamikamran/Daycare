import { Upload } from "lucide-react";
import { useState } from "react";

export default function FileUpload({
  onFileSelect,
  acceptedTypes = "*",
  multiple = false,
  instruction = "Drag and drop your files here",
}) {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFiles = [...e.dataTransfer.files];
    setFiles((prev) => [...prev, ...droppedFiles]);
    onFileSelect(droppedFiles);
  };

  const handleChange = (e) => {
    const selectedFiles = [...e.target.files];
    setFiles((prev) => [...prev, ...selectedFiles]);
    onFileSelect(selectedFiles);
  };

  const removeFile = (fileToRemove) => {
    setFiles(files.filter((file) => file !== fileToRemove));
  };

  return (
    <div className="w-full">
      <div
        className={`relative bg-white rounded-lg p-8 text-center ${
          dragActive ? "border-[#9CD323]" : "border-gray-300"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept={acceptedTypes}
          multiple={multiple}
          onChange={handleChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <img src="/icons/upload.svg" alt="upload" className=" mx-auto mb-4" />

        {/* <Upload className="w-8 h-8 mx-auto mb-4 text-[#9CD323]" /> */}
        <p className="text-[20px] font-semibold">{instruction}</p>
        <p className="text-[18px] text-theme2-dark mt-2">{"Choose file(s)"}</p>
      </div>

      {/* {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 p-2 rounded"
            >
              <div className="flex items-center space-x-2">
                <span className="text-sm">{file.name}</span>
                <span className="text-xs text-gray-500">
                  {(file.size / (1024 * 1024)).toFixed(1)} MB
                </span>
              </div>
              <button
                onClick={() => removeFile(file)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}
