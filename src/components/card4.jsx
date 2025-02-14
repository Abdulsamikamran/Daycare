import { Clock, MapPin } from "lucide-react";

export default function Card4() {
  return (
    <div className="max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      {/* Header with profile and date */}
      <div className="flex items-center  justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16">
            <img
              src="/icons/profile-icon.svg"
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Guy Hawkins</h2>
            <p className="text-gray-500">example@domain.com</p>
          </div>
        </div>
        <div className="text-gray-500">Applied: 04/12/2024</div>
      </div>

      {/* Job details */}
      <div className="space-y-2 border-t border-b py-2 border-border">
        <h3 className="text-xl font-semibold text-gray-900">Group Leader</h3>
        <p className="text-gray-500">Marcheille Daycare</p>
      </div>

      {/* Footer with job type and location */}
      <div className="flex gap-6 mt-6">
        <div className="flex items-center gap-2 text-gray-500">
          <Clock className="w-5 h-5 text-orange-500" />
          <span>Full Time</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <MapPin className="w-5 h-5 text-orange-500" />
          <span>Radius Gallery · Santa Cruz, CA</span>
        </div>
      </div>
    </div>
  );
}
