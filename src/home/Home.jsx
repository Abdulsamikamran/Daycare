import React from "react";
import Layout from "./Layout";
import Hero1 from "./common/hero1";
import DaycareCarousel from "./common/daycare-carousel";
import WhyJoin from "./common/why-join-kinder";
import JobCarousel from "./common/job-carousel";
import Trusted from "./common/trusted-by";
import TransformingDaycare from "./common/transforming-daycare";
import Impact from "./common/impact";
import TestimonialsSection from "./common/good-company";
import Faq from "./common/faq";
import Newsletter from "./common/newsletter";

const Home = () => {
  return (
    <Layout>
      <Hero1 />

      <DaycareCarousel />
      <WhyJoin />
      <JobCarousel />
      <Trusted />
      <TransformingDaycare />
      <Impact />
      <TestimonialsSection />
      <Faq />
      <Newsletter />
    </Layout>
  );
};

export default Home;
