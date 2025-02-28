const TransformingDaycare = () => {
  return (
    <div className="overflow-hidden mb-20 container mx-auto px-6">
      <h2 className="xs:text-[18px] md:text-[36px] mb-7 font-bold font-sour">
        Transforming Daycare Experiences
      </h2>

      <div className="flex xs:flex-col md:flex-row  w-full gap-5 hide-scrollbar overflow-y-scroll">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex xs:flex-col md:flex-row min-w-full md:min-w-[700px] lg:min-w-[800px] xl:min-w-[1000px] bg-white p-4 rounded-lg gap-6"
          >
            <img
              src="/assets/card-img2.png"
              alt=""
              className="xs:rounded-lg md:rounded-none"
            />
            <div className=" space-y-2 text-left">
              <h3 className="text-lg sm:text-[16px] md:text-2xl font-medium font-sour">
                Build Stronger Teams
              </h3>
              <p className="text-black-medium text-[12px] sm:text-base md:text-lg leading-snug">
                The foundation of any great daycare experience is a strong,
                dedicated team. At KinderKrippenJobs, we carefully connect
                caregivers with centers that share their values and passion for
                early childhood development. By ensuring a good fit from the
                start, we help centers build teams who are not only skilled but
                also genuinely committed to nurturing children’s growth and
                happiness.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransformingDaycare;
