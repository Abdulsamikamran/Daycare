import React from "react";
import Layout from "./Layout";
import { Share } from "lucide-react";
import Button from "@/components/button";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/job-detail");
  };
  return (
    <Layout>
      <div className=" my-7">
        {/* Header Section */}
        <h1 className="text-[36px] font-sour font-bold mb-4">
          Post Your First Job
        </h1>

        <p className="text-black-medium text-[16] font-medium mb-12">
          Let's get started by outlining the role, responsibilities, and unique
          perks your daycare offers. Right candidate for your job is just a post
          away!
        </p>

        {/* Icon Section */}
        <div className="mb-12">
          <div className="w-full h-[316px] mx-auto bg-white rounded-lg flex flex-col items-center justify-center mb-4">
            <img src="/icons/upload.svg" alt="" />
            <p className="text-black-dark text-[20px]  font-semibold">
              Post a job
            </p>
          </div>
        </div>

        {/* Description Section */}
        <p className="text-black-medium text-center text-[16] font-medium mb-8 ">
          As a daycare company user, posting a job is the first step in finding
          the right team member for your facility. This process involves
          providing key details about the position, including the job title,
          description, video presentation, and relevant category. You can also
          enable social media sharing to make your job listing to reach out to
          audience quicker and easier.
        </p>

        {/* Button */}
        <Button fullWidth onClick={handleSubmit}>
          Create Job Listing
        </Button>
      </div>
    </Layout>
  );
};

export default PostJob;
