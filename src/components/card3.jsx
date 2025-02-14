import { Clock, MapPin } from "lucide-react";
import Button from "./button";

const Card3 = ({ hover, onClick, button, setEditClick }) => {
  return (
    <div
      onClick={onClick}
      className={`  min-w-[425px] ${
        hover ? "hover:border-4 border-theme3-medium" : "border-none"
      }  bg-white rounded-lg p-6 shadow-sm cursor-pointer`}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-bold">Group Leader</h2>
        {button ? (
          <div className="flex gap-4">
            <Button
              onClick={() => setEditClick(true)}
              className="px-5"
              icon={"/icons/edit-white.svg"}
              variant="primarySmall"
            >
              Edit
            </Button>
            <Button
              className="px-5"
              icon={"/icons/trash-white.svg"}
              variant="red"
            >
              Delete
            </Button>
          </div>
        ) : (
          <span className="text-gray-500 text-sm">25/09/2024</span>
        )}
      </div>

      {/* Company Name */}
      <h3 className="text-gray-800 mb-4">Marcheille Daycare</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-6">
        Lorem ipsum dolor sit amet consectetur. Lacinia cenas dignissim
        suspendisse ipsum nulla sed sagittis. Posuere faucibus non pharetra.
      </p>

      {/* Footer Info */}
      <div className="flex items-center gap-6">
        {/* Full Time */}
        <div className="flex items-center text-gray-500">
          <Clock className="w-4 h-4 mr-2 text-orange-500" />
          <span className="text-sm whitespace-nowrap">Full Time</span>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-500">
          <MapPin className="w-4 h-4 mr-2 text-orange-500" />
          <span className="text-sm whitespace-nowrap">
            Radius Gallery · Santa Cruz, CA
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card3;
