import React from "react";
import Hero3 from "./common/hero3";
import Layout from "./Layout";
import VideoCarousel from "./common/video-carousel";

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
  return (
    <Layout>
      <Hero3 />
      <div className=" container mb-20 mx-auto">
        <h3 className=" font-bold text-[24px]">Benifits:</h3>
        <div className=" w-full p-6 my-4 bg-white rounded-2xl">
          <div className=" flex items-center h-full gap-5">
            <img src="/assets/support-badge.svg" alt="" />
            <img src="/assets/reward-badge.svg" alt="" />
            <img src="/assets/flexible-badge.svg" alt="" />
            <img src="/assets/transport-badge.svg" alt="" />
          </div>
        </div>
        <h3 className=" font-bold text-[24px]">Description:</h3>
        <div className=" w-full p-6 my-4 bg-white text-black-medium text-[20px] space-y-4 rounded-2xl">
          <p>
            Are you passionate about early childhood education and creating a
            safe, nurturing environment for young learners? Join our team as a
            Group Leader and play a pivotal role in shaping the growth and
            development of children at our daycare center.
          </p>
          <p>
            {" "}
            As a Group Leader, you’ll be responsible for managing a group of
            children, fostering a positive learning atmosphere, and ensuring the
            overall well-being of the children under your care. Your role will
            include overseeing daily activities, mentoring assistant caregivers,
            and maintaining open communication with parents and staff.
          </p>
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
      </div>
    </Layout>
  );
};

export default SingleJob;
