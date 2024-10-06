"use client";

import dynamic from "next/dynamic";

const Banner = dynamic(() => import("../components/Banner"));
const BackedByDoctor = dynamic(() => import("../components/BackedBy"));
const SmartSpeech = dynamic(() => import("../components/SmartSpeech"));
const LeadingAI = dynamic(() => import("../components/LeadingAI"));
const HowItWorks = dynamic(() => import("../components/HowItWorks"));
const Caraousel = dynamic(() => import("../components/Common/Caraousel/index"));

const Home = () => {
  return (
    <>
      <Banner />
      <BackedByDoctor />
      <SmartSpeech />
      <LeadingAI />
      <HowItWorks />
    </>
  );
};

export default Home;
