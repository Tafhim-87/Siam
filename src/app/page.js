import Slide from "@/components/comps/Slide";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ProjectsM from "@/components/sections/ProjectsM";
import Projects from "@/components/sections/Projects";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import Image from "next/image";
import React from "react";
import Testimonials from "@/components/sections/Testimonials";
import PortfolioSection from "@/components/sections/PortfolioSection";
import FAQSection from "@/components/sections/FAQItems";
import Footer from "@/components/layout/Footer";

const Page = () => {
  return (
    <main className="relative min-h-screen max-h-screen">
      <Image
        src="/images/heroBG.jpg"
        alt=""
        fill
        priority
        className="object-cover -z-10 opacity-20"
      />
      <div className="container mx-auto px-4">
        <Navbar />
        <Hero />
      </div>
      <div className="-mt-8 lg:-mt-72">
        <Slide />
      </div>
      <ServicesShowcase />
      <ProjectsM />
      <PortfolioSection />
      <Projects />
      <Testimonials />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Page;


// Full Screen Background
      // <Image
      //   src="/images/heroBG.jpg"
      //   alt=""
      //   fill
      //   priority
      //   className="object-cover -z-10 opacity-20"
      // />
      // <div className="container mx-auto px-4">
      //   <Navbar />
      //   {/* <Hero /> */}
      // </div>
      // <div className="-mt-8 lg:-mt-72">
      //   {/* <Slide /> */}
      // </div>