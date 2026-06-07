"use client";

import Image from "next/image";
import { projects } from "@/data/projects";

export default function PortfolioSection() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section className="bg-[#F5F5F7] py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="rounded-full border bg-white px-4 py-2 text-sm shadow-sm">
            My Portfolio Showcase
          </span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-6 max-w-4xl text-center text-4xl font-bold leading-tight md:text-6xl">
          Work That Highlights My
          <br />
          Thinking &{" "}
          <span className="italic text-orange-500 font-subtitle">
            Problem-Solving.
          </span>
        </h2>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            "All Design",
            "Components",
            "Web Design",
            "Mobile App",
            "SaaS Platform",
          ].map((item) => (
            <button
              key={item}
              className="rounded-full bg-white px-5 py-2 text-sm shadow"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Featured Card */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="relative aspect-[16/8]">
            <Image
              fill
              src={featured.image}
              alt={featured.title}
              className="object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition hover:opacity-100">
              <button className="rounded-full bg-white/20 px-8 py-8 text-white backdrop-blur-lg">
                View Project
              </button>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-3xl font-semibold">
              {featured.title}
            </h3>

            <p className="mt-2 text-gray-500">
              Elegant Modern AI Assistant Website UI Design
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "UX Research",
                "Redesign",
                "Visual Identity",
                "Web Design",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-blue-50 px-2 py-1 text-xs text-blue-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {others.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  fill
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-2 text-gray-500">
                  Elegant Modern AI Assistant Website UI Design
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "UX Research",
                    "Redesign",
                    "Visual Identity",
                    "Web Design",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-blue-50 px-2 py-1 text-xs text-blue-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <button className="rounded-xl bg-black px-8 py-4 text-white">
            Explore my all Design
          </button>
        </div>
      </div>
    </section>
  );
}