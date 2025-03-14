import React from "react";
import Layout from "./Layout";
import Hero2 from "./common/hero2";
import Filters from "./common/filters";
import Card3 from "@/components/card3";
import Faq from "./common/faq";
import Newsletter from "./common/newsletter";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("job");
  };
  return (
    <Layout>
      <Hero2 />
      <Filters />
      <div className="container px-6 space-y-6 mx-auto xs:my-10 md:my-20">
        <h2 className="xs:text-[20px] md:text-[36px] font-bold font-sour">
          Featured Jobs
        </h2>{" "}
        <div className="flex justify-between overflow-x-scroll hide-scrollbar gap-6 w-full">
          <Card3 onClick={handleNavigate} hover />
          <Card3 onClick={handleNavigate} hover />
          <Card3 onClick={handleNavigate} hover />
        </div>
      </div>
      <div className="bg-white w-full py-10">
        <div className="container px-6 space-y-6 mx-auto  ">
          <h2 className="xs:text-[20px] md:text-[36px] font-bold font-sour">
            All Job Listings{" "}
          </h2>
          <div className="grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
            <Card3 hover />
            <Card3 hover />
            <Card3 hover />
            <Card3 hover />
            <Card3 hover />
            <Card3 hover />
            <Card3 hover />
            <Card3 hover />
            <Card3 hover />
          </div>
        </div>
      </div>
      <Faq />
      <Newsletter />
    </Layout>
  );
};

export default Jobs;
