import { Building2, ShieldCheck, Award, CheckCircle2 } from "lucide-react";
import aboutConstruction from "../assets/images/about-construction.jpg";

function About() {
  const features = [
    { title: "Quality Construction", description: "High standards at every stage of construction with premium materials and skilled workmanship.", icon: CheckCircle2 },
    { title: "Reliable Delivery", description: "Dependable planning and project execution with on-time completion guarantee.", icon: ShieldCheck },
    { title: "Safety First", description: "Responsible construction practices with zero-compromise safety protocols on every site.", icon: Award },
    { title: "Long-Term Value", description: "Solutions designed for durability, performance and decades of reliable use.", icon: Building2 },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[#F8F5ED] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-7xl">
        {/* ── Centered Section Header ── */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C9A227]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A98216]">Who We Are</span>
            <span className="h-px w-8 bg-[#C9A227]" />
          </div>
          <h2 className="mt-5 font-heading text-2xl font-bold leading-tight tracking-tight text-[#11130F] sm:text-3xl lg:text-4xl">
            A trusted construction partner<span className="text-[#C9A227]"> in Nagpur.</span>
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[#6B7280]">
            Engineering expertise, responsible execution and construction solutions designed for lasting value across Nagpur and Maharashtra.
          </p>
        </div>

        {/* ── Main Content: Image + Text ── */}
        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="pointer-events-none absolute -bottom-3 -right-3 h-full w-full rounded-2xl border-2 border-[#C9A227]/30" />
            <div className="relative h-[300px] w-full overflow-hidden rounded-2xl bg-[#CFC7B5] shadow-xl sm:h-[400px] lg:h-[460px]">
              <img src={aboutConstruction} alt="SAAM Infrastructure construction site in Nagpur" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11130F]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A227] px-4 py-1.5 text-xs font-bold text-[#11130F]">
                  Since 2014
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col">
            <p className="text-[15px] leading-7 text-[#374151]">
              <strong className="text-[#11130F]">SAAM Infrastructure</strong> is a Nagpur-based construction and infrastructure company committed to delivering projects with quality, reliability and long-term value. Our approach combines engineering expertise with responsible execution.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-[#6B7280]">
              Led by <strong className="text-[#11130F]">Sachin Lihitkar</strong>, our team brings together experienced architects, interior designers and civil engineers committed to building spaces that endure across Maharashtra.
            </p>

            {/* Features Grid — 2×2 Symmetrical */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="group flex items-start gap-3.5 rounded-xl border border-[#E6E2D7] bg-white p-4 transition-all duration-300 hover:border-[#C9A227]/40 hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#11130F] text-[#C9A227] transition-colors duration-300 group-hover:bg-[#C9A227] group-hover:text-[#11130F]">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#11130F]">{feature.title}</h4>
                      <p className="mt-0.5 text-[13px] leading-5 text-[#6B7280]">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
