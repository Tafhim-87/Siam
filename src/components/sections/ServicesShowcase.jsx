"use client";

import Image from "next/image";

const services = [
  {
    title: "UI/UX Design",
    image: "/images/service/service1.png",
    description:
      "We design intuitive and visually engaging digital experiences that focus on usability, accessibility, and user satisfaction.",
    offers: [
      "User Experience Research",
      "User Interface Design",
      "Wireframing & Prototyping",
      "Design Systems & UI Components",
      "Interaction Design",
    ],
  },
  {
    title: "Website Design",
    image: "/images/service/service2.png",
    description:
      "We design intuitive and visually engaging digital experiences that focus on usability, accessibility, and user satisfaction.",
    offers: [
      "User Experience Research",
      "User Interface Design",
      "Wireframing & Prototyping",
      "Design Systems & UI Components",
      "Usability Testing",
    ],
  },
  {
    title: "Mobile App Design",
    image: "/images/service/service3.png",
    description:
      "We help startups and companies design scalable SaaS products with intuitive workflows, clean interfaces, and strong user engagement.",
    offers: [
      "SaaS UX Strategy",
      "Dashboard & Web App Design",
      "Product Architecture Planning",
      "User Flow & Journey Mapping",
      "Design System Development",
    ],
  },
  {
    title: "Dashboard Design",
    image: "/images/service/service4.png",
    description:
      "We help startups and companies design scalable SaaS products with intuitive workflows, clean interfaces, and strong user engagement.",
    offers: [
      "SaaS UX Strategy",
      "Dashboard & Web App Design",
      "Product Architecture Planning",
      "User Flow & Journey Mapping",
      "Design System Development",
    ],
  },
];

const ServicesShowcase = () => {
  return (
    <section className="w-full flex items-center justify-center py-[clamp(2rem,6vw,5rem)]">
      <div className="container mx-auto px-[clamp(1rem,4vw,2rem)]">
        {/* HEAD CONTENT */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[clamp(1.5rem,4vw,3rem)] mb-[clamp(2rem,5vw,4rem)]">
          <h1 className="text-[clamp(2rem,4vw,3.75rem)] font-semibold leading-tight">
            Transforming Ideas into
            <br />
            Powerful{" "}
            <span className="font-serif italic text-[#F4511E] font-subtitle">
              Digital Experiences.
            </span>
          </h1>

          <button className="bg-gradient-to-b from-[#141414] from-50% to-[#2a2a2a] text-white px-[clamp(1rem,2vw,1.5rem)] py-[clamp(0.8rem,1.5vw,1rem)] rounded-[clamp(0.5rem,1vw,0.75rem)] text-[clamp(0.9rem,1vw,1rem)] hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap">
            Ready for service
          </button>
        </div>

        {/* SERVICES GRID */}
        <div className="space-y-[clamp(2rem,3vw,2.5rem)]">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(1.5rem,2.5vw,2rem)]"
              >
                {/* IMAGE - Auto height on desktop, fixed aspect ratio on mobile */}
                <div
                  className={`relative w-full rounded-[clamp(1rem,2vw,1.5rem)] overflow-hidden ${
                    !isEven ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative w-full h-[clamp(280px,45vw,400px)] lg:h-full lg:min-h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* TEXT CARD - Auto height based on content on all screens */}
                <div
                  className={`relative overflow-hidden rounded-[clamp(1rem,2vw,1.5rem)] w-full ${
                    !isEven ? "lg:order-1" : ""
                  }`}
                >
                  <div
                    className="relative w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: "url('/images/service/serviceBG.jpg')",
                    }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-white/70" />

                    {/* Content - Natural height based on content */}
                    <div className="relative z-10 w-full px-[clamp(1.25rem,5vw,4rem)] py-[clamp(1.5rem,5vw,3rem)]">
                      <div className="flex gap-4 flex-col">
                        <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-tight">
                          {service.title}{" "}
                          <span className="italic text-[#F4511E] font-serif font-subtitle">
                            Service
                          </span>
                        </h2>

                        <p className="text-[clamp(0.85rem,1.1vw,0.95rem)] text-[#686868] leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <h6 className="font-serif italic mt-[clamp(1.25rem,3vw,1.75rem)] font-semibold text-[clamp(1rem,1.8vw,1.25rem)]">
                        What We Offer?
                      </h6>

                      <ul className="mt-[clamp(0.75rem,2vw,1.25rem)] space-y-[clamp(0.4rem,0.8vw,0.6rem)]">
                        {service.offers.map((offer, i) => (
                          <li key={i} className="flex items-start gap-2 text-[clamp(0.8rem,1vw,0.9rem)] text-[#686868] font-semibold">
                            <span className="text-[#F4511E] flex-shrink-0">•</span>
                            <span className="leading-tight">{offer}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;