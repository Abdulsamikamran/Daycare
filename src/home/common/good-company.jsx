const testimonials = [
  {
    text: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    author: "Adrian Knoch",
    role: "Lorem ipsum",
    image: "/assets/human1.svg",
  },
  {
    text: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia.",
    author: "Alexander Damm",
    role: "Lorem ipsum",
    image: "/assets/human1.svg",
  },
  {
    text: "Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
    author: "Raphael Dirnberger",
    role: "Lorem ipsum",
    image: "/assets/human1.svg",
  },
  {
    text: "Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
    author: "Raphael Dirnberger",
    role: "Lorem ipsum",
    image: "/assets/human1.svg",
  },
  {
    text: "Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
    author: "Raphael Dirnberger",
    role: "Lorem ipsum",
    image: "/assets/human1.svg",
  },
  {
    text: "Vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
    author: "Alexander Damm",
    role: "Lorem ipsum",
    image: "/assets/human1.svg",
  },
];

const TestimonialCard = ({ text, author, role, image }) => (
  <div className="bg-white rounded-lg p-6 flex flex-col justify-between">
    <p className="text-xs sm:text-sm md:text-sm mb-6 lg:mb-0 lg:text-lg xl:text-xl">
      {text}
    </p>
    <div className="flex items-center gap-3">
      <img
        src={image || "/placeholder.svg"}
        alt={author}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <h3 className="font-semibold text-[16px] font-sour">{author}</h3>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="container mx-auto mb-6 px-6 py-4 lg:py-16">
      {/* Header */}
      <div className="max-w-2xl xs:mb-4 lg:mb-12">
        <h2 className="xs:text-[18px] md:text-[36px] font-bold font-sour">
          You are in good company
        </h2>
        <p className="text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl">
          We are always committed to connecting quality caregivers with trusted
          daycares, creating positive experiences for both staff and families.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 md:auto-rows-fr">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`${
              index === 1
                ? "translate-y-0 md:translate-y-12"
                : index === 4
                ? "translate-y-0 md:translate-y-12"
                : ""
            }`}
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
