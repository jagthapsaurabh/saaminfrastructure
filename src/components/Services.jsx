import { Building2, Landmark, House, Share2, Wrench, Ruler, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { number: "01", title: "Civil Construction", description: "Reliable civil construction solutions built with quality materials, skilled workmanship and attention to every detail.", icon: Building2 },
  { number: "02", title: "Commercial Projects", description: "Modern commercial spaces designed and executed with a focus on functionality, durability and long-term value.", icon: Landmark },
  { number: "03", title: "Residential Construction", description: "Strong and thoughtfully planned residential projects created to provide comfortable and lasting spaces.", icon: House },
  { number: "04", title: "Infrastructure Development", description: "Infrastructure development solutions focused on dependable execution, safety and sustainable growth.", icon: Share2 },
  { number: "05", title: "Renovation & Development", description: "Renovation and development services that improve existing spaces while maintaining quality and structural integrity.", icon: Wrench },
  { number: "06", title: "Engineering & Project Management", description: "Professional planning and project management focused on efficient execution, coordination and timely delivery.", icon: Ruler },
];

function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#F8F5ED] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#C9A227]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#1B2A4A]/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header - Two Column Layout */}
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-end lg:gap-12">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[#C9A227]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#8B6914]">
                What We Do
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl lg:text-5xl">
              Our Services
            </h2>
          </div>

          <div>
            <h3 className="font-heading text-xl font-bold leading-tight tracking-tight text-[#1B2A4A] sm:text-2xl lg:text-3xl">
              Building solutions.<span className="block text-[#6B7280]">Creating lasting value.</span>
            </h3>
            <p className="mt-4 text-[15px] leading-7 text-[#64748B] sm:text-base sm:leading-7">
              Comprehensive construction and infrastructure solutions in Nagpur delivered with precision, quality and responsibility.
            </p>
          </div>
        </div>

        {/* Services Grid - Magazine Style */}
        <div className="space-y-4">
          {/* First Row - 2 Large Cards */}
          <div className="grid gap-4 md:grid-cols-2">
            {services.slice(0, 2).map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.number}
                  className="group relative overflow-hidden rounded-2xl border border-[#E6E2D7] bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A227]/40 hover:shadow-xl sm:p-10"
                >
                  {/* Background Number */}
                  <div className="absolute -right-8 -top-8 text-[150px] font-bold leading-none text-[#C9A227]/5 sm:text-[200px]">
                    {service.number}
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#C9A227]/30 bg-[#C9A227]/10 text-[#8B6914] transition-all duration-300 group-hover:border-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-white">
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                      <span className="text-sm font-bold text-[#C9A227]/40">{service.number}</span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold tracking-tight text-[#1B2A4A] sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#64748B] sm:text-base sm:leading-7">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#8B6914]">
                      <Link to="/services" className="flex items-center gap-2 transition-colors hover:text-[#C9A227]">
                        Learn more
                        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-[#C9A227]/5 transition-all duration-500 group-hover:bg-[#C9A227]/10" />
                </div>
              );
            })}
          </div>

          {/* Second Row - 3 Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {services.slice(2, 5).map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.number}
                  className="group relative overflow-hidden rounded-2xl border border-[#E6E2D7] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A227]/40 hover:shadow-xl sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1B2A4A] text-[#C9A227] transition-all duration-300 group-hover:scale-110">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-bold text-[#C9A227]/40">{service.number}</span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold tracking-tight text-[#1B2A4A] sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-7 text-[#64748B] sm:leading-7">
                    {service.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#8B6914]">
                    <Link to="/services" className="flex items-center gap-2 transition-colors hover:text-[#C9A227]">
                      Learn more
                      <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Third Row - Single Large Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-[#E6E2D7] bg-gradient-to-r from-[#1B2A4A] to-[#253D5E] p-8 transition-all duration-500 hover:shadow-xl sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-[#C9A227] text-[#1B2A4A]">
                  <Ruler size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#C9A227]/60">{services[5].number}</span>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {services[5].title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base sm:leading-7">
                    {services[5].description}
                  </p>
                </div>
              </div>
              <Link
                to="/services"
                className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A227] px-6 py-3 text-sm font-bold text-[#1B2A4A] transition-all duration-300 hover:bg-white"
              >
                View Details
                <ArrowUpRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#64748B] sm:text-base">
            Need a custom solution?{" "}
            <Link to="/contact" className="font-semibold text-[#8B6914] underline underline-offset-4 transition-colors hover:text-[#C9A227]">
              Let's discuss your project
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
