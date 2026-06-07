import Image from "next/image";
import FigmaLogo from "../../../public/svgs/Figmalogo";

export default function Hero() {
  return (
    <section className="w-full overflow-hidden flex flex-col items-center py-16 lg:py-0 mt-auto min-h-screen">
      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-white/20 -z-10" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex flex-col gap-12 text-center lg:text-left items-center lg:items-start shrink">
          <div className="flex flex-col gap-6 items-center lg:items-start">
            <div className="bg-[#F4F2ED] rounded-lg w-fit px-2.5 py-1.5 text-[#686868] font-semibold flex items-center gap-3 whitespace-nowrap">
              <FigmaLogo />
              <h6>I Deliver Smart Solutions for your Businesses.</h6>
            </div>

            <h1 className="text-[clamp(1.8rem,4vw,3.8rem)] font-black leading-[0.95] tracking-[-0.04em] text-[#141414] lg:whitespace-nowrap">
              Designing Powerful Digital<br className="hidden lg:block" />
              {" "}Experiences That Drive <br className="hidden lg:block" />
              Growth and{" "}
              <span className="font-serif italic text-[#F4511E]">Results.</span>
            </h1>

            <p className="max-w-[800px] text-[clamp(0.85rem,1.3vw,1.3rem)] text-[#686868]">
              UI/UX designer dedicated to building seamless, visually engaging,
              and user-centered digital experiences that not only look great but
              also perform effectively, helping brands grow and connect better
              with their users.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button className="bg-[#F4511E] rounded-lg py-3.5 px-5 font-semibold text-white">
              Start a Project
            </button>

            <button className="bg-white rounded-lg py-3.5 px-5 font-semibold text-[#141414] shadow-xl">
              Explore my Work
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end items-end shrink-0 mt-[clamp(4rem,6vw,10rem)]">
          <Image
            src="/images/hero/heroc.png"
            alt="Hero Image"
            width={877}
            height={844}
            priority
            sizes="(min-width: 1024px) 50vw, 90vw"
            className="w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[1077px] h-auto"
          />
        </div>
        
      </div>
    </section>
  );
}
