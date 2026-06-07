import Image from "next/image";
import FigmaLogo from "../../../public/svgs/Figmalogo";

const stepsLeft = [
  {
    step: "01",
    title: "UX Research",
    description:
      "I start by understanding the users, business goals, and market context through research, competitor analysis, and user insight",
  },
  {
    step: "02",
    title: "Define & Ideation",
    description:
      "I define the core problem and generate strategic ideas that align user needs with business objectives.",
  },
  {
    step: "03",
    title: "Information Architecture",
    description:
      "I structure content and features logically to ensure smooth navigation and clarity.",
  },
  {
    step: "04",
    title: "Wireframing",
    description:
      "I create low-fidelity wireframes to map layouts, user flows, and functionality before moving into visuals.",
  },
];

const stepsRight = [
  {
    step: "08",
    title: "Usability Test & Support",
    description:
      "I test the design with users, gather feedback, and refine the experience to ensure it performs effectively.",
  },
  {
    step: "07",
    title: "Visual Design & UI Elements",
    description:
      "I craft clean, modern interfaces that are visually appealing while maintaining usability and brand consistency.",
  },
  {
    step: "06",
    title: "Design System",
    description:
      "I build a consistent design system including typography, colors, components, and reusable UI patterns.",
  },
  {
    step: "05",
    title: "Interaction Ideation",
    description:
      "I design intuitive interactions and user journeys that make the product feel natural and engaging.",
  },
];

/* ── Hand-drawn arrow SVGs ── */
const ArrowDownLeft = () => (
  <svg
    width="36"
    height="44"
    viewBox="0 0 36 44"
    fill="none"
    className="mx-auto"
  >
    <path
      d="M28 4C26 12 22 20 14 30C12 33 10 36 10 38"
      stroke="#333"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M6 34L10 40L14 34"
      stroke="#333"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const ArrowDownRight = () => (
  <svg
    width="36"
    height="44"
    viewBox="0 0 36 44"
    fill="none"
    className="mx-auto"
  >
    <path
      d="M8 4C10 12 14 20 22 30C24 33 26 36 26 38"
      stroke="#333"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M22 34L26 40L30 34"
      stroke="#333"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const ArrowDown = () => (
  <svg
    width="36"
    height="44"
    viewBox="0 0 36 44"
    fill="none"
    className="mx-auto"
  >
    <path
      d="M18 4C16 12 20 20 17 30C16 33 17 36 18 38"
      stroke="#333"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M14 34L18 40L22 34"
      stroke="#333"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const ArrowUpLeft = () => (
  <svg
    width="36"
    height="44"
    viewBox="0 0 36 44"
    fill="none"
    className="mx-auto"
  >
    <path
      d="M28 40C26 32 22 24 14 14C12 11 10 8 10 6"
      stroke="#333"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M6 10L10 4L14 10"
      stroke="#333"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const ArrowUpRight = () => (
  <svg
    width="36"
    height="44"
    viewBox="0 0 36 44"
    fill="none"
    className="mx-auto"
  >
    <path
      d="M8 40C10 32 14 24 22 14C24 11 26 8 26 6"
      stroke="#333"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M22 10L26 4L30 10"
      stroke="#333"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const ArrowUp = () => (
  <svg
    width="36"
    height="44"
    viewBox="0 0 36 44"
    fill="none"
    className="mx-auto"
  >
    <path
      d="M18 40C16 32 20 24 17 14C16 11 17 8 18 6"
      stroke="#333"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M14 10L18 4L22 10"
      stroke="#333"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const SquigglyArrowRight = () => (
  <svg
    width="90"
    height="30"
    viewBox="0 0 90 30"
    fill="none"
    className="mx-auto"
  >
    <path
      d="M5 15C15 5 25 25 35 15C45 5 55 25 65 15"
      stroke="#333"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M62 10L68 15L62 20"
      stroke="#333"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

/* ── Step Card ── */
const StepCard = ({ step, title, description, className = "" }) => (
  <div
    className={`border border-gray-200 rounded-2xl p-5 bg-white/90 backdrop-blur-sm max-w-[380px] ${className}`}
  >
    <div className="flex items-center gap-2 mb-2">
      <span className="text-[#888] font-semibold text-sm tracking-wide">
        Step {step}
      </span>
      <span className="text-[#F4511E] text-sm">•</span>
      <span className="text-[#F4511E] font-bold text-sm underline underline-offset-2 decoration-[#F4511E]">
        {title}
      </span>
    </div>
    <p className="text-[#777] text-[13px] leading-relaxed">{description}</p>
  </div>
);

/* ── Arrows for left column (going down) ── */
const leftArrows = [
  <ArrowDownLeft key="a1" />,
  <ArrowDown key="a2" />,
  <ArrowDownRight key="a3" />,
];

/* ── Arrows for right column (going up) ── */
const rightArrows = [
  <ArrowUpLeft key="a4" />,
  <ArrowUp key="a5" />,
  <ArrowUpRight key="a6" />,
];

/* ── Main Component ── */
const Projects = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-[#FEFCF9] lg:hidden block">
      {/* Sunburst background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `repeating-conic-gradient(from 0deg at 50% 42%, transparent 0deg 4deg, rgba(244,81,30,0.04) 4deg 4.5deg, transparent 4.5deg 10deg)`,
        }}
      />

      {/* Header */}
      <div className="text-center mb-12 lg:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#F4F2ED] rounded-lg px-3 py-1.5 mb-5">
          <FigmaLogo width={20} height={20} />
          <span className="text-[#686868] font-semibold text-xs tracking-wide">
            My Design Process
          </span>
        </div>
        <h2 className="text-[clamp(1.6rem,4vw,3rem)] font-black leading-tight tracking-[-0.03em] text-[#141414]">
          My design{" "}
          <span className="font-serif italic text-[#141414]">Process</span>{" "}
          from start to finish.
        </h2>
      </div>

      {/* ── Desktop Layout ── */}
      <div className="hidden lg:block relative max-w-[1100px] mx-auto px-4">
        {/* Center person image */}
        <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 z-10 w-[260px]">
          <Image
            src="/images/hero/heroc.png"
            alt="Designer"
            width={400}
            height={500}
            className="w-full h-auto object-contain drop-shadow-lg"
            priority
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-[1fr_280px_1fr] items-start">
          {/* ── Left Column ── */}
          <div className="flex flex-col items-end pr-2">
            {stepsLeft.map((step, i) => (
              <div key={step.step} className="flex flex-col items-center">
                <StepCard
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  className={
                    i === 0
                      ? "ml-12"
                      : i === 1
                      ? "mr-6"
                      : i === 2
                      ? "mr-2"
                      : "ml-16"
                  }
                />
                {i < stepsLeft.length - 1 && (
                  <div className="py-1">{leftArrows[i]}</div>
                )}
              </div>
            ))}
          </div>

          {/* ── Center Spacer ── */}
          <div />

          {/* ── Right Column ── */}
          <div className="flex flex-col items-start pl-2">
            {stepsRight.map((step, i) => (
              <div key={step.step} className="flex flex-col items-center">
                <StepCard
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  className={
                    i === 0
                      ? "mr-8"
                      : i === 1
                      ? "ml-4"
                      : i === 2
                      ? "ml-2"
                      : "mr-12"
                  }
                />
                {i < stepsRight.length - 1 && (
                  <div className="py-1">{rightArrows[i]}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom squiggly arrow (Step 04 → Step 05) */}
        <div className="flex justify-center -mt-2">
          <SquigglyArrowRight />
        </div>
      </div>

      {/* ── Mobile / Tablet Layout ── */}
      <div className="lg:hidden relative max-w-md mx-auto px-4">
        {/* Center person image */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/hero/heroc.png"
            alt="Designer"
            width={250}
            height={300}
            className="w-[200px] h-auto object-contain drop-shadow-lg"
          />
        </div>

        {/* Steps in order 01 → 08 */}
        <div className="flex flex-col gap-4">
          {[...stepsLeft, ...[...stepsRight].reverse()].map((step, i) => (
            <div key={step.step} className="flex flex-col items-center">
              <StepCard
                step={step.step}
                title={step.title}
                description={step.description}
                className="w-full max-w-full"
              />
              {i < 7 && (
                <div className="py-1">
                  <ArrowDown />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;