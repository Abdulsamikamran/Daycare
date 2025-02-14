import Card3 from "@/components/card3";
import { Carousel, CarouselContent, CarouselItem } from "@/components/carousel";

const JobCarousel = () => {
  return (
    <div className=" overflow-hidden mb-6 container mx-auto ">
      <div className="flex justify-between  items-center my-4">
        <h2 className="text-[36px] font-bold font-sour">Featured Jobs</h2>
        <a href="#" className="text-theme3-dark text-[18px] hover:underline">
          Browse all
        </a>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="ml-[10px] flex gap-x-40 mr-[180px]">
          {/* Wrap each Card3 in its own CarouselItem */}
          {[...Array(5)].map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <Card3 />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default JobCarousel;
