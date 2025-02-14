import Card3 from "@/components/card3";
import { Carousel, CarouselContent, CarouselItem } from "@/components/carousel";

const TransformingDaycare = () => {
  return (
    <div className=" overflow-hidden mb-20 container mx-auto ">
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
        <CarouselContent className="ml-[10px] flex gap-x-[1000px] mr-[1200px] ">
          {/* Wrap each Card3 in its own CarouselItem */}
          {[...Array(3)].map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 ] lg:basis-1/1">
              <div className="flex  w-[1000px] gap-3">
                <img src="/assets/card-img2.png" alt="" />
                <div className="p-4 space-y-2">
                  <h3 className="text-[36px] font-medium font-sour">
                    Build Stronger Teams
                  </h3>
                  <p className="text-black-medium text-[20px]">
                    The foundation of any great daycare experience is a strong,
                    dedicated team. At KinderKrippenJobs, we carefully connect
                    caregivers with centers that share their values and passion
                    for early childhood development. By ensuring a good fit from
                    the start, we help centers build teams who are not only
                    skilled but also genuinely committed to nurturing children’s
                    growth and happiness.
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TransformingDaycare;
