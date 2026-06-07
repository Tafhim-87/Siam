import { testimonials } from "@/data/testimonials";
import StarSVG from "../../../public/svgs/Star";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className='w-full flex items-center justify-center py-20'>
      <div className='container flex flex-col items-center justify-center gap-20 px-4'>
        <h1 className="text-[clamp(2rem,4vw,3.75rem)] font-semibold leading-tight text-center">
          Some things <span className='font-serif italic text-[#F4511E]'>said about</span> us that <br />
          <span className='font-serif italic text-[#F4511E]'>inspire me</span> to do better.
        </h1>

        {/* PINTEREST-STYLE MASONRY LAYOUT */}
        <div className="columns-1 sm:columns-2 xl:columns-4 gap-4 space-y-6 w-full">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="break-inside-avoid bg-white p-6 rounded-2xl shadow-2xl shadow-[#1414141F] w-full gap-10 flex flex-col"
            >
              {/* rating */}
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <StarSVG key={index} />
                  ))}
                </div>
                <p className="font-semibold text-[#141414]">
                  ({testimonial.rating}.0)
                </p>
              </div>

              <p className="text-2xl font-medium text-[#686868] leading-8">
                "{testimonial.quote}"
              </p>

              {/* profile avatar */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-300">
                  <Image
                    src={"https://media.licdn.com/dms/image/v2/D5635AQGWzX7PNmEgbQ/profile-framedphoto-shrink_400_400/B56Z24E1cZHAAc-/0/1776909768791?e=1778670000&v=beta&t=DWgArHbAncxyRJ0I1QdfBpxjGdbrDeGGbTMfFESF0gE"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text[22px] leading-7 font-semibold text-[#141414] mt-4">
                - {testimonial.name}
              </p>
                  <p className="text-sm text-[#686868]">Administration</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;