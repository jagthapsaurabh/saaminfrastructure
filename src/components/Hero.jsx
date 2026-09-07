import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/images/hero/hero-1.jpg",
    label: "Construction Company in Nagpur",
    title: "Engineering Excellence",
    description: "Creating spaces that stand strong for generations with precision, quality and thoughtful engineering. Trusted builders across Nagpur and Maharashtra.",
  },
  {
    image: "/images/hero/hero-2.jpg",
    label: "Top Builders in Maharashtra",
    title: "Building the Future",
    description: "Reliable construction solutions designed for lasting performance, safety and long-term value. Delivering quality projects in Nagpur since 2014.",
  },
  {
    image: "/images/hero/hero-3.jpg",
    label: "Infrastructure Development",
    title: "Strong Foundations",
    description: "Infrastructure delivered with precision, responsibility and a commitment to creating better spaces across Vidarbha and Maharashtra.",
  },
  {
    image: "/images/hero/hero-4.jpg",
    label: "Quality Construction",
    title: "Quality That Lasts",
    description: "From planning to completion, every detail matters. Nagpur's trusted partner for commercial, residential and infrastructure projects.",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#11130F]">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((item, index) => (
          <div
            key={item.image}
            className={`absolute inset-0 transition-all duration-[1800ms] ease-in-out ${
              currentSlide === index ? "scale-105 opacity-100" : "scale-100 opacity-0"
            }`}
          >
            <img
              src={item.image}
              alt={`${item.title} — SAAM Infrastructure Nagpur`}
              aria-hidden="true"
              onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.svg'; }}
              className="h-full w-full object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#11130F]/70 via-[#11130F]/40 to-[#11130F]/10" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#11130F]/80 to-transparent sm:h-64" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#11130F]/50 to-transparent" />

      {/* Gold ambient */}
      <div className="pointer-events-none absolute -right-40 -top-32 h-[300px] w-[300px] rounded-full bg-[#C9A227]/8 blur-3xl sm:h-[400px] sm:w-[400px]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-5 pb-24 pt-28 sm:px-6 sm:pb-28 sm:pt-32 md:px-8 lg:pt-28 lg:pb-24">
        <div key={currentSlide} className="w-full animate-[heroContent_0.9s_ease-out]">
          {/* Label */}
          <div className="mb-4 flex items-center gap-3 sm:mb-6">
            <span className="h-[2px] w-8 shrink-0 bg-[#C9A227] sm:w-12" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#C9A227]">
              {slide.label}
            </span>
          </div>

          {/* Main Heading — consistent: 4xl mobile, 5xl sm, 6xl md, 7xl lg */}
          <h1 className="max-w-5xl font-heading text-4xl font-bold leading-[0.95] tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] sm:text-5xl md:text-6xl lg:text-7xl">
            {slide.title}
          </h1>

          {/* Sub Heading — consistent: xl mobile, 2xl sm, 3xl lg */}
          <h2 className="mt-4 max-w-3xl font-heading text-xl font-semibold leading-tight text-white/90 drop-shadow-[0_3px_15px_rgba(0,0,0,0.5)] sm:mt-5 sm:text-2xl lg:text-3xl">
            One Strong Foundation at a Time.
          </h2>

          {/* Description — consistent: base mobile+ */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:mt-6 sm:leading-8">
            {slide.description}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10">
          <Link
            to="/projects"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#C9A227] px-7 py-3 text-sm font-bold text-[#11130F] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E0C35B] hover:shadow-xl"
          >
            <span>Explore Projects</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#11130F]/15 transition-all duration-300 group-hover:bg-[#11130F]/25">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-5 z-30 flex items-center gap-2 sm:left-6 md:left-8 lg:left-10">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index ? "true" : "false"}
            className={`rounded-full transition-all duration-500 ${
              currentSlide === index
                ? "h-2 w-8 bg-[#C9A227] shadow-[0_0_12px_rgba(209,168,42,0.5)] sm:w-10"
                : "h-2 w-2 bg-white/50 hover:bg-[#C9A227]/70"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-5 z-30 hidden items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-2 text-xs font-bold tracking-[0.2em] text-white backdrop-blur-md sm:flex md:right-8 lg:right-10">
        {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-[#C9A227] lg:flex"
      >
        Scroll
        <ChevronDown size={16} className="animate-bounce" />
      </a>

      {/* Gold bottom line */}
      <div className="absolute bottom-0 left-0 right-0 z-40 h-[3px] bg-gradient-to-r from-[#C9A227] via-[#E0C35B] to-[#C9A227]" />
    </section>
  );
}

export default Hero;
