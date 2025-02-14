import React from "react";
import Hero2 from "./common/hero2";
import Layout from "./Layout";
import Filters from "./common/filters";
import DaycareCarousel from "./common/daycare-carousel";
import Card2 from "@/components/card2";
import { useNavigate } from "react-router-dom";

const daycareData = [
  {
    title: "Marcheille Daycare",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacinia maecenas dignissim suspendisse ipsum nulla sed sagittis. Posuere faucibus non pharetra Read more...",
    location: "Radius Gallery : Santa Cruz, CA",
    imageUrl: "assets/card-img1.png",
  },
  {
    title: "Bright Beginnings Daycare",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacinia maecenas dignissim suspendisse ipsum nulla sed sagittis. Posuere faucibus non pharetra Read more...",
    location: "Westcliff Drive : San Francisco, CA",
    imageUrl: "assets/card-img1.png",
  },
  {
    title: "Sunny Skies Childcare",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacinia maecenas dignissim suspendisse ipsum nulla sed sagittis. Posuere faucibus non pharetra Read more...",
    location: "Main Boulevard : Redwood, CA",
    imageUrl: "assets/card-img1.png",
  },
  {
    title: "Playful Pals Daycare",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacinia maecenas dignissim suspendisse ipsum nulla sed sagittis. Posuere faucibus non pharetra Read more...",
    location: "Ocean Avenue : Monterey, CA",
    imageUrl: "assets/card-img1.png",
  },
  {
    title: "Playful Pals Daycare",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacinia maecenas dignissim suspendisse ipsum nulla sed sagittis. Posuere faucibus non pharetra Read more...",
    location: "Ocean Avenue : Monterey, CA",
    imageUrl: "assets/card-img1.png",
  },
  {
    title: "Playful Pals Daycare",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacinia maecenas dignissim suspendisse ipsum nulla sed sagittis. Posuere faucibus non pharetra Read more...",
    location: "Ocean Avenue : Monterey, CA",
    imageUrl: "assets/card-img1.png",
  },
];
const Centers = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("center");
  };
  return (
    <Layout>
      <Hero2 variant={"variant2"} />;
      <Filters variant={"variant2"} />
      <div className="my-20">
        <DaycareCarousel onClick={handleNavigate} variant={"variant2"} />
      </div>
      <div className="bg-white w-full py-10">
        <div className="container space-y-6 mx-auto  ">
          <h2 className="text-[36px] font-bold font-sour">
            All Daycare Centers{" "}
          </h2>
          <div className="grid grid-cols-3 gap-4 w-full">
            {daycareData.map((daycare, index) => (
              <Card2 {...daycare} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Centers;
