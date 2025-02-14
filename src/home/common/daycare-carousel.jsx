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
    <div className=" overflow-hidden container mx-auto px-4">
      <div className="flex justify-between  items-center my-4">
        <h2 className="text-[36px] font-bold font-sour">
          {variant === "variant2"
            ? "Featured Daycare Centers "
            : "Nearby Daycare Centers"}
        </h2>
        {variant !== "variant2" && (
          <a href="#" className="text-theme3-dark text-[18px] hover:underline">
            Browse all
          </a>
        )}
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="ml-[10px] flex gap-x-32 mr-[100px]">
          {daycareData.map((daycare, index) => (
            <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/4">
              <Card2 onClick={onClick} {...daycare} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default DaycareCarousel;
