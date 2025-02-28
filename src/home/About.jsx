import React from "react";
import Layout from "./Layout";
import Hero2 from "./common/hero2";

import WhyJoin from "./common/why-join-kinder";
import Trusted from "./common/trusted-by";
import TransformingDaycare from "./common/transforming-daycare";
import Impact from "./common/impact";
import TestimonialsSection from "./common/good-company";
import Faq from "./common/faq";
import Newsletter from "./common/newsletter";

const About = () => {
  return (
    <Layout>
      <Hero2 variant={"variant3"} />
      <img
        className="w-full object-fit h-auto md:h-[800px] "
        src="/assets/about-img.png"
        alt=""
      />
      <div className="h-auto  md:h-[635px] w-full bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center h-full justify-center gap-5 md:gap-40">
          <div className="space-y-4">
            <h3 className="font-bold font-sour text-[36px]">
              Caring, Growing, Thriving
            </h3>
            <p className="text-[20px] mb-10 text-black-medium">
              At KinderKrippenJobs, we are passionate about creating meaningful
              connections between families, daycare centers, and childcare
              professionals. We believe that every child deserves a safe,
              caring, and enriching environment where they can play, learn, and
              grow.
            </p>
            <p className="text-[20px] text-black-medium">
              Our platform is designed to make this vision a reality by offering
              parents easy access to trusted daycare centers, helping daycare
              providers find passionate and qualified professionals, and
              empowering caregivers to discover fulfilling career opportunities.{" "}
            </p>
          </div>

          <img className=" " src="/assets/about-img2.png" alt="" />
        </div>
      </div>
      <div className="h-auto md:h-[693px] my-4 px-6 w-full flex justify-center items-center gap-6 flex-col container mx-auto">
        <h3 className="font-bold font-sour text-[36px]">How we started</h3>
        <p className="text-[20px] mb-10 text-black-medium text-center max-w-[850px]">
          Our journey began with a simple yet profound realization: families
          often struggle to find reliable childcare, while daycare centers face
          challenges in hiring passionate, qualified professionals.
        </p>
        <img
          className="w-full h-auto  md:h-[390px]"
          src="/assets/about-img3.png"
          alt=""
        />
      </div>
      <WhyJoin />
      <Trusted />
      <TransformingDaycare />
      <Impact />
      <TestimonialsSection />
      <Faq />
      <Newsletter />
    </Layout>
  );
};

export default About;
