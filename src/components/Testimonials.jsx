import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    initials: "RS",
    role: "Property Developer",
    project: "Commercial Complex",
    review: "SAAM Infrastructure delivered our commercial complex in Nagpur on time with exceptional quality. Their attention to detail and professional approach made the entire process smooth.",
  },
  {
    name: "Amit Patel",
    initials: "AP",
    role: "Homeowner",
    project: "Residential Building",
    review: "We are very satisfied with the quality of construction. The team was professional, communicative and always kept us informed about progress. Highly recommended.",
  },
  {
    name: "Sandeep Deshmukh",
    initials: "SD",
    role: "Business Owner",
    project: "Infrastructure Development",
    review: "Their engineering expertise and commitment to safety standards are outstanding. The infrastructure project was completed with precision and quality.",
  },
  {
    name: "Vikram Jain",
    initials: "VJ",
    role: "Industrial Client",
    project: "Industrial Facility",
    review: "SAAM Infrastructure understood our requirements perfectly and delivered a facility that meets all our operational needs. Professional and reliable team.",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = testimonials.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const goTo = (index) => setActiveIndex(index);
  const goPrev = () => setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  const goNext = () => setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#1B2A4A] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-7xl">
        {/* ── Centered Header ── */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C9A227]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">Client Testimonials</span>
            <span className="h-px w-8 bg-[#C9A227]" />
          </div>
          <h2 className="mt-5 font-heading text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Trusted by our clients.
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-white/60">
            Hear from the clients who have trusted us with their construction and infrastructure projects.
          </p>
        </div>

        {/* ── Testimonial Cards — Perfect 2-col symmetry on desktop ── */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {testimonials.slice(0, 2).map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </div>

        {/* ── Mobile Carousel ── */}
        <div className="mt-12 lg:hidden">
          <TestimonialCard testimonial={testimonials[activeIndex]} />

          <div className="mt-6 flex items-center justify-center gap-3">
            <button type="button" onClick={goPrev} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-[#C9A227] hover:bg-[#C9A227]/10 hover:text-[#C9A227]">
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeIndex === index ? "w-7 bg-[#C9A227]" : "w-3 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button type="button" onClick={goNext} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-[#C9A227] hover:bg-[#C9A227]/10 hover:text-[#C9A227]">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ── Bottom Statement — Centered ── */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="mx-auto max-w-2xl text-[15px] leading-7 text-white/50">
            Every project is an opportunity to build trust through quality, communication and dependable execution.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {["RS", "AP", "SD", "VJ"].map((initials, i) => (
                <div key={i} className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#1B2A4A] text-[9px] font-bold sm:h-9 sm:w-9 sm:text-[10px] ${i % 2 === 0 ? "bg-[#C9A227] text-[#1B2A4A]" : "bg-white/10 text-white"}`}>
                  {initials}
                </div>
              ))}
            </div>
            <span className="text-xs font-semibold text-white/50 sm:text-sm">Trusted Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#C9A227]/30 hover:bg-white/[0.08] sm:p-8">
      <Quote size={28} className="text-[#C9A227]/40" />

      <div className="mt-4 flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-[#C9A227] text-[#C9A227]" />
        ))}
      </div>

      <p className="mt-4 text-[15px] leading-7 text-white/80 sm:text-base sm:leading-8">
        "{testimonial.review}"
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C9A227] text-xs font-bold text-[#1B2A4A] transition-all duration-300 group-hover:bg-white group-hover:text-[#1B2A4A]">
          {testimonial.initials}
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-sm font-bold text-white">{testimonial.name}</h3>
          <p className="mt-0.5 truncate text-xs text-white/50">{testimonial.role} • {testimonial.project}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
