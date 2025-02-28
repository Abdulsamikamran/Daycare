import Button from "@/components/button";
import { Plus, Pencil, Trash2, Star } from "lucide-react";

// Sample feedback data
const feedbacks = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 3,
    date: "December 2, 2023",
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 3,
    date: "December 2, 2023",
  },
  {
    id: 3,
    title: "Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 3,
    date: "December 2, 2023",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? "fill-[#FFB800] text-[#FFB800]"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

const FeedbackCard = ({ feedback }) => {
  return (
    <div className="py-6">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-lg font-semibold">{feedback.title}</h2>
        <StarRating rating={feedback.rating} />
      </div>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {feedback.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{feedback.date}</span>
        <div className="flex gap-2">
          <Button variant="primarySmall">
            <Pencil className="w-4 h-4" />
            Edit
          </Button>
          <Button variant="red">
            <Trash2 className="w-4 h-4" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function Feedbacks() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8">
      <div className=" flex justify-between items-center">
        <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sour">
          Feedbacks
        </p>
        <Button variant="primarySmall">
          <Plus className="w-4 h-4 mr-2" />
          Add Feedback
        </Button>
      </div>
      <div className="border-t border-border w-full my-3" />

      <div className="divide-y">
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} feedback={feedback} />
        ))}
      </div>
    </div>
  );
}
