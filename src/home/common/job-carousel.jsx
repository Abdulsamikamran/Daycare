import Card3 from "@/components/card3";
import { Carousel, CarouselContent, CarouselItem } from "@/components/carousel";

const JobCarousel = () => {
  return (
    <div className=" overflow-hidden mb-6 container mx-auto xs:px-4 md:px-6">
      <div className="flex justify-between  items-center my-4">
        <h2 className="xs:text-[18px] md:text-[36px] font-bold font-sour">
          Featured Jobs
        </h2>
        <a
          href="#"
          className="text-theme3-dark xs:text-[14px] md:text-[18px] hover:underline"
        >
          Browse all
        </a>
      </div>

      <div className=" flex gap-5 hide-scrollbar overflow-y-scroll">
        {[...Array(5)].map((_, index) => (
          <Card3 />
        ))}
      </div>
    </div>
  );
};

export default JobCarousel;
