import React, { useState } from "react";
import Hero3 from "./common/hero3";
import Layout from "./Layout";
import VideoCarousel from "./common/video-carousel";
import ApplyJobModal from "@/components/applyJobModal";
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

const SingleJob = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full relative mb-24 md:mb-0">
      <Layout>
        <Hero3 />
        <div className="w-full bg-white">
          <div className="container px-4 sm:px-6 mb-20 mx-auto">
            {/* Benefits Section */}
            <h3 className="font-bold py-4 md:py-0 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Benefits:
            </h3>
            <div className="w-full  md:p-6 my-4 bg-white rounded-2xl">
              <div className="flex flex-wrap items-center h-full gap-3 sm:gap-5">
                <img src="/assets/support-badge.svg" alt="" />
                <img src="/assets/reward-badge.svg" alt="" />
                <img src="/assets/flexible-badge.svg" alt="" />
                <img src="/assets/transport-badge.svg" alt="" />
              </div>
            </div>

            {/* Job Description */}
            <h3 className="font-bold my-4 md:my-0  text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Description:
            </h3>
            <div className="w-full p-4 md:p-6 my-4 bg-white text-black-medium space-y-3 sm:space-y-4 rounded-2xl">
              <p className="text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl">
                Are you passionate about early childhood education and creating
                a safe, nurturing environment for young learners? Join our team
                as a Group Leader and play a pivotal role in shaping the growth
                and development of children at our daycare center.
              </p>
              <p className="text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl">
                As a Group Leader, you’ll be responsible for managing a group of
                children, fostering a positive learning atmosphere, and ensuring
                the overall well-being of the children under your care. Your
                role will include overseeing daily activities, mentoring
                assistant caregivers, and maintaining open communication with
                parents and staff.
              </p>
            </div>

            {/* Responsibilities Section */}
            <h3 className="font-bold text-lg my-4 md:my-0  sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Responsibilities:
            </h3>
            <div className="w-full p-4 md:p-6 my-4 text-black-medium bg-white rounded-2xl">
              <ul className="list-disc pl-4 sm:pl-5 space-y-2">
                {responsibilities.map((item, index) => (
                  <li
                    key={index}
                    className="text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Qualifications Section */}
            <h3 className="font-bold my-4 md:my-0  text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Qualifications:
            </h3>
            <div className="w-full p-4 md:p-6 my-4 text-black-medium bg-white rounded-2xl">
              <ul className="list-disc pl-4 sm:pl-5 space-y-2">
                {qualifications.map((item, index) => (
                  <li
                    key={index}
                    className="text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Video Section */}
            <h3 className="font-bold my-4 md:my-0  text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Video Presentations:
            </h3>
            <VideoCarousel />
          </div>
        </div>
      </Layout>

      <div className=" fixed flex gap-8 w-full py-6 px-4 bottom-0 bg-white">
        <div className="flex items-center gap-4">
          <img src="/icons/send.svg" alt="" />

          <img src="/icons/heart.svg" alt="" />
        </div>

        <Button
          fullWidth
          onClick={() => setIsOpen(true)}
          variant="primarySmall"
        >
          Apply To Job
        </Button>

        <ApplyJobModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default SingleJob;
