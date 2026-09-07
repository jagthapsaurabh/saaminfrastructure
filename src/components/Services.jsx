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
    <section id="services" className="relative overflow-hidden bg-[#F8F5ED] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-7xl">
        {/* ── Centered Section Header ── */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C9A227]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A98216]">What We Do</span>
            <span className="h-px w-8 bg-[#C9A227]" />
          </div>
          <h2 className="mt-5 font-heading text-2xl font-bold tracking-tight text-[#11130F] sm:text-3xl lg:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[#6B7280]">
            Comprehensive construction and infrastructure solutions in Nagpur delivered with precision, quality and responsibility.
          </p>
        </div>

        {/* ── Services Grid — Perfect 3-col symmetry ── */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="group relative overflow-hidden rounded-2xl border border-[#E6E2D7] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A227]/40 hover:shadow-xl sm:p-7"
              >
                {/* Background number */}
                <div className="absolute -right-4 -top-4 text-[120px] font-bold leading-none text-[#C9A227]/[0.04]">
                  {service.number}
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#C9A227]/30 bg-[#C9A227]/10 text-[#8B6914] transition-all duration-300 group-hover:border-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-white">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-bold text-[#C9A227]/40">{service.number}</span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold tracking-tight text-[#11130F] sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#6B7280]">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#8B6914]">
                    <Link to="/services" className="flex items-center gap-2 transition-colors hover:text-[#C9A227]">
                      Learn more
                      <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-[#C9A227]/5 transition-all duration-500 group-hover:bg-[#C9A227]/10" />
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-12 text-center">
          <p className="text-[15px] text-[#6B7280]">
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
