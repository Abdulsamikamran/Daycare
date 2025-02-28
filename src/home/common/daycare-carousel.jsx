import { Carousel, CarouselContent, CarouselItem } from "@/components/carousel";

import Card2 from "@/components/card2";

const daycareData = [
  {
    title: "Marcheille Daycare",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacinia maecenas dignissim suspendisse ipsum nulla sed sagittis. Posuere faucibus non pharetra Read more...",
    location: "Radius Gallery : Santa Cruz, CA",
    imageUrl: "assets/card-img1.png",
  },
  {
    title: "Bright Beginnings Daycare",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacinia maecenas dignissim suspendisse ipsum nulla sed sagittis. Posuere faucibus non pharetra Read more...",
    location: "Westcliff Drive : San Francisco, CA",
    imageUrl: "assets/card-img1.png",
  },
  {
    title: "Sunny Skies Childcare",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacinia maecenas dignissim suspendisse ipsum nulla sed sagittis. Posuere faucibus non pharetra Read more...",
    location: "Main Boulevard : Redwood, CA",
    imageUrl: "assets/card-img1.png",
  },
  {
    title: "Playful Pals Daycare",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacinia maecenas dignissim suspendisse ipsum nulla sed sagittis. Posuere faucibus non pharetra Read more...",
    location: "Ocean Avenue : Monterey, CA",
    imageUrl: "assets/card-img1.png",
  },
  {
    title: "Playful Pals Daycare",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacinia maecenas dignissim suspendisse ipsum nulla sed sagittis. Posuere faucibus non pharetra Read more...",
    location: "Ocean Avenue : Monterey, CA",
    imageUrl: "assets/card-img1.png",
  },
  {
    title: "Playful Pals Daycare",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacinia maecenas dignissim suspendisse ipsum nulla sed sagittis. Posuere faucibus non pharetra Read more...",
    location: "Ocean Avenue : Monterey, CA",
    imageUrl: "assets/card-img1.png",
  },
];

const DaycareCarousel = ({ variant, onClick }) => {
  return (
    <div className=" overflow-hidden container mx-auto px-6">
      <div className="flex justify-between  items-center my-4">
        <h2 className="xs:text-[18px] md:text-[36px] font-bold font-sour">
          {variant === "variant2"
            ? "Featured Daycare Centers "
            : "Nearby Daycare Centers"}
        </h2>
        {variant !== "variant2" && (
          <a
            href="#"
            className="text-theme3-dark xs:text-[14px] md:text-[18px] hover:underline"
          >
            Browse all
          </a>
        )}
      </div>
      <div className=" flex w-full gap-5 hide-scrollbar overflow-y-scroll">
        {daycareData.map((daycare, index) => (
          <Card2 onClick={onClick} {...daycare} />
        ))}
      </div>
    </div>
  );
};

export default DaycareCarousel;
