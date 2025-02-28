import React from "react";
import Layout from "./Layout";
import Hero3 from "./common/hero3";
import Card3 from "@/components/card3";
import VideoCarousel from "./common/video-carousel";
import Button from "@/components/button";

const responsibilities = [
  "Lead a group of children in daily activities that promote physical, social, emotional, and cognitive development.",
  "Develop and implement age-appropriate lesson plans and activities aligned with educational goals.",
  "Ensure a safe, clean, and stimulating environment that encourages curiosity and creativity.",
  "Act as a mentor to assistant caregivers, providing guidance and support to ensure the highest standards of care.",
  "Build strong, trusting relationships with children and their families, fostering open and effective communication.",
  "Monitor and document each child’s progress, sharing updates with parents and collaborating with the team on individualized care plans.",
  "Uphold and enforce all safety protocols, ensuring the children’s well-being at all times.",
];
const qualifications = [
  "Minimum of 2 years of experience in childcare, early education, or a related field.",
  "Bachelor's degree in Early Childhood Education or a related field (preferred).",
  "CPR and First Aid certification (required).",
  "Excellent organizational and leadership skills, with the ability to manage and inspire a team.",
  "Strong interpersonal and communication skills, with a passion for working with children and families.",
];

const SingleCenter = () => {
  return (
    <Layout>
      <Hero3 variant={"variant2"} />
      <div className=" container pt-3 bg-white md:bg-transparent px-6 mb-4 md:mb-20 mx-auto ">
        <h3 className=" font-bold text-[24px]">Description:</h3>
        <div className=" w-full p-2 md:p-6 my-2 pb-4 md:pb-0 md:my-4 bg-white text-black-medium text-[20px] space-y-4 rounded-2xl">
          <p className="text-gray-600 text-[14px] sm:text-[16px] mb-3 sm:mb-4">
            Are you passionate about early childhood education and creating a
            safe, nurturing environment for young learners? Join our team as a
            Group Leader and play a pivotal role in shaping the growth and
            development of children at our daycare center.
          </p>
          <p className="text-gray-600 text-[14px] sm:text-[16px] mb-3 sm:mb-4">
            {" "}
            As a Group Leader, you’ll be responsible for managing a group of
            children, fostering a positive learning atmosphere, and ensuring the
            overall well-being of the children under your care. Your role will
            include overseeing daily activities, mentoring assistant caregivers,
            and maintaining open communication with parents and staff.
          </p>
        </div>
      </div>
      <div className=" container px-6 mb-20 mx-auto flex gap-8">
        <div className="space-y-6">
          <h3 className=" font-bold text-[24px]">Available Jobs:</h3>
          <Card3 hover />
          <Card3 hover />
          <Card3 hover />
        </div>

        <div className=" hidden md:block">
          <div className=" w-full p-6 my-4 bg-white text-black-medium text-[20px] space-y-4 rounded-2xl">
            <div className="relative">
              <img src="/assets/job-hero.png" alt="" />
              <div className="absolute h-[250px] w-full bottom-0 bg-gradient-to-t from-black-dark to-transparent rounded-b-[16px] " />
            </div>
            <div className="flex justify-between items-center">
              <div className="text-black-dark">
                <h3 className="text-[32px] font-bold">Group Leader</h3>
                <p className="text-[20px]">Marcheille Daycare</p>
              </div>
              <div className="flex gap-4 items-center ">
                <div className="flex justify-center items-center h-[56px] w-[56px] rounded-full bg-white">
                  <img src="/icons/send.svg" alt="" />
                </div>
                <div className="flex justify-center items-center h-[56px] w-[56px] rounded-full bg-white">
                  <img src="/icons/heart.svg" alt="" />
                </div>

                <Button variant="primarySmall">Apply To Job</Button>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex gap-2  px-2 py-2 items-center">
                <img src="/icons/leader.svg" alt="" />
                <p className="font-medium text-[18px]">Group Leader</p>
              </div>
              <div className="flex gap-3  px-2 py-2 items-center">
                <img src="/icons/time-orange.svg" alt="" />
                <span className="font-medium text-[18px]">Full Time</span>
              </div>
              <div className="flex gap-3  px-2 py-2 items-center">
                <img src="/icons/location-orange.svg" alt="" />
                <span className="font-medium text-[18px]">
                  Radius Gallery · Santa Cruz, CA
                </span>
              </div>
            </div>
          </div>

          <h3 className=" font-bold text-[24px]">Responsibilities:</h3>
          <div className=" w-full p-6 my-4 text-black-medium text-[20px]  bg-white rounded-2xl">
            <ul className="list-disc pl-5 ">
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <h3 className=" font-bold text-[24px]">Qualifications:</h3>
          <div className=" w-full p-6 my-4 text-black-medium text-[20px]  bg-white rounded-2xl">
            <ul className="list-disc pl-5 ">
              {qualifications.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <h3 className=" font-bold text-[24px]">Video Presentations:</h3>
          <VideoCarousel />
          <h3 className=" font-bold  mt-4 text-[24px]">Location:</h3>
          <div className=" w-full p-6 my-4 text-black-medium text-[20px] space-y-3  bg-white rounded-2xl">
            <h3 className="font-bold text-[22px]">Sunny Skies Childcare</h3>
            <p className="text-[20px]">
              Bahnhofstrasse 25 • 8001 Zürich, Switzerland
            </p>
            <img className="w-full" src="/assets/map.png" alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleCenter;
