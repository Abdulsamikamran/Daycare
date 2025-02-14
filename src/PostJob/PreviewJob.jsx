"use client";

import Card1 from "@/components/card1";

const jobDetails = [
  { title: "Job Title", content: "Mid Level Group Leader" },
  { title: "Category", content: "Group Leader" },
  { title: "Job Type", content: "Full-time" },
  {
    title: "Job Description",
    content:
      "As a Group Leader at our daycare center, you will be responsible for overseeing a group of children, ensuring their safety, well-being, and developmental progress. You will lead and guide activities that foster a positive, engaging, and educational environment. The Group Leader plays a key role in supporting the daycare’s mission to provide high-quality care and nurturing support to children.",
  },
];

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

const benefitIcons = [
  "/assets/support-badge.svg",
  "/assets/transport-badge.svg",
  "/assets/reward-badge.svg",
  "/assets/flexible-badge.svg",
  "/assets/paid-badge.svg",
];

const videoPresentations = [
  {
    fileName: "Daycare Tour.ppt",
    fileSize: "3.5 MB",
    logoSrc: "/icons/ppt.svg",
  },
  { fileName: "TourGuide.ppt", fileSize: "3.5 MB", logoSrc: "/icons/ppt.svg" },
];

const socialPlatforms = [
  { fileName: "Facebook", logoSrc: "/icons/facebook-sm.svg" },
  { fileName: "Instagram", logoSrc: "/icons/instagram.svg" },
  { fileName: "Linkedin", logoSrc: "/icons/linkedin.svg" },
  { fileName: "TikTok", logoSrc: "/icons/tiktok.svg" },
  { fileName: "Tumblr", logoSrc: "/icons/tumblr.svg" },
];

const JobDetail = ({ title, content }) => (
  <>
    <div className="space-y-4 p-4">
      <h1 className="font-bold text-[18px]">{title}</h1>
      <p className="text-[16px]">{content}</p>
    </div>
    <div className="border-border border-t" />
  </>
);

const ListSection = ({ title, items }) => (
  <>
    <div className="space-y-4 p-4">
      <h1 className="font-bold text-[18px]">{title}</h1>
      <ul className="list-disc pl-5 text-[16px]">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    <div className="border-border border-t" />
  </>
);

const IconGrid = ({ title, icons }) => (
  <>
    <h1 className="font-bold text-[18px]">{title}</h1>
    <div className="gap-4 flex flex-wrap w-full">
      {icons.map((icon, index) => (
        <img key={index} src={icon} alt="badge" />
      ))}
    </div>
  </>
);

export default function PreviewJob() {
  return (
    <div className="space-y-4">
      <div className="w-full bg-white rounded-lg">
        {jobDetails.map((detail, index) => (
          <JobDetail key={index} {...detail} />
        ))}

        <ListSection title="Responsibilities" items={responsibilities} />
        <ListSection title="Qualifications" items={qualifications} />
      </div>

      <IconGrid title="Benefits" icons={benefitIcons} />

      <h1 className="font-bold text-[18px]">Video Presentations</h1>
      <div className="flex gap-2">
        {videoPresentations.map((video, index) => (
          <Card1
            key={index}
            {...video}
            onDelete={() => console.log("File deleted")}
          />
        ))}
      </div>

      <h1 className="font-bold text-[18px]">Social Sharing</h1>
      <div className="grid grid-cols-2 gap-2">
        {socialPlatforms.map((platform, index) => (
          <Card1
            key={index}
            {...platform}
            onDelete={() => console.log("File deleted")}
          />
        ))}
      </div>
    </div>
  );
}
