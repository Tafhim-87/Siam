import Image from "next/image";

const Projects = () => {
  return (
    <section className="relative hidden w-full overflow-hidden lg:flex items-center justify-center">
      {/* BG IMAGE */}
      <div className="absolute inset-0 z-0 opacity-[0.12]">
        <Image
          src="/images/projects/projectBG.jpg"
          alt="Background Pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* TOP BLUR */}
      <div className="absolute top-[-60px] left-1/2 z-[2] h-[140px] w-[1920px] -translate-x-1/2 bg-white blur-[24px]" />

      {/* BOTTOM BLUR */}
      <div className="absolute bottom-[-60px] left-1/2 z-[2] h-[240px] w-[1920px] -translate-x-1/2 bg-white blur-[24px]" />

      {/* CONTENT */}
      <div className="container relative z-10 flex flex-col items-center justify-center gap-20 py-20">
        <h1 className="text-center text-[clamp(2rem,4vw,3.75rem)] font-semibold leading-tight">
          My design{" "}
          <span className="font-serif italic text-[#F4511E] font-subtitle">
            Process
          </span>{" "}
          from start to finish.
        </h1>

        <div>
          <Image
            src="/images/projects/Project.png"
            alt="Process"
            width={1980}
            height={550}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;