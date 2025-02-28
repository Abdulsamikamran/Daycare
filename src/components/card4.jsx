import { Clock, MapPin } from "lucide-react";

export default function Card4() {
  return (
    <div className="max-w-2xl bg-white rounded-2xl border border-border p-2  xl:p-6">
      <div className="flex xs:flex-wrap sm:flex-nowrap items-start  justify-between mb-3 sm:mb-4 md:mb-6">
        <div className="flex items-center gap-3 sm:gap-2 md:gap-5">
          <div className="relative w-10 h-10 sm:w-10 sm:h-10 md:w-16 md:h-16">
            <img
              src="/icons/profile-icon.svg"
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm sm:text-base xl:text-lg font-semibold text-gray-900">
              Guy Hawkins
            </h2>
            <p className="text-[10px]  xl:text-base text-gray-500">
              example@domain.com
            </p>
          </div>
        </div>
        <div className="text-[10px]  xl:text-base text-gray-500">
          Applied: 04/12/2024
        </div>
      </div>

      {/* Job details */}
      <div className="space-y-1 sm:space-y-2 md:space-y-3 border-t border-b py-2 sm:py-3 md:py-4 border-border">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
          Group Leader
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-gray-500">
          Marcheille Daycare
        </p>
      </div>

      <div className="flex items-center  mt-4 gap-2 md:gap-6">
        {/* Full Time */}
        <div className="flex items-center text-gray-500">
          <Clock className="w-4 h-4 mr-2 text-orange-500" />
          <span className="text-[8px] sm:text-[11px] md:text-xs whitespace-nowrap">
            Full Time
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-500">
          <MapPin className="w-4 h-4 mr-2  text-orange-500" />
          <span className="text-[8px] sm:text-[11px] md:text-xs xl:text-sm  whitespace-nowrap">
            Radius Gallery · Santa Cruz, CA
          </span>
        </div>
      </div>
    </div>
  );
}
