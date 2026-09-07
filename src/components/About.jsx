import { Building2, ShieldCheck, Award, CheckCircle2 } from "lucide-react";
import aboutConstruction from "../assets/images/about-construction.jpg";

function About() {
  const features = [
    { title: "Quality", description: "High standards at every stage of construction.", icon: CheckCircle2 },
    { title: "Reliability", description: "Dependable planning and project execution.", icon: ShieldCheck },
    { title: "Safety", description: "Responsible practices with safety at the core.", icon: Award },
    { title: "Long-Term Value", description: "Solutions designed for durability and performance.", icon: Building2 },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[#F8F5ED] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-40 top-24 h-64 w-64 rounded-full bg-[#C9A227]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-72 w-72 rounded-full bg-[#1B2A4A]/[0.03] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.015] [background-image:linear-gradient(#1B2A4A_1px,transparent_1px),linear-gradient(90deg,#1B2A4A_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end lg:gap-12">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-10 shrink-0 bg-[#C9A227] sm:w-14" />
              <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-[#8B6914] sm:text-4xl lg:text-5xl">About Us</h2>
            </div>
            <p className="mt-4 max-w-lg text-[15px] leading-7 text-[#64748B] sm:mt-5 sm:text-base sm:leading-7">
              Engineering expertise, responsible execution and construction solutions designed for lasting value across Nagpur and Maharashtra.
            </p>
          </div>

          <div className="min-w-0 lg:pb-2">
            <h3 className="font-heading max-w-3xl text-2xl font-bold leading-tight tracking-tight text-[#1B2A4A] sm:text-3xl lg:text-[2.4rem]">
              Building with purpose.
              <span className="block text-[#6B7280]">Delivering with precision.</span>
            </h3>
            <div className="mt-4 flex items-center gap-2">
              <span className="h-[2px] w-8 bg-[#C9A227]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-14 lg:mt-16 lg:grid-cols-2 lg:gap-0">
          {/* Image Area */}
          <div className="relative min-w-0 pb-3 pr-3">
            <div className="pointer-events-none absolute bottom-0 left-2 right-0 top-2 rounded-2xl bg-[#C9A227] sm:left-3 sm:top-3 sm:rounded-3xl" />
            <div className="group relative z-10 h-[300px] w-full overflow-hidden rounded-2xl bg-[#CFC7B5] shadow-xl sm:h-[420px] sm:rounded-3xl lg:h-full lg:min-h-[520px] lg:rounded-br-[70px]">
              <img src={aboutConstruction} alt="Saam Infrastructure construction site" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#10110F]/5 via-transparent to-[#10110F]/80" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#C9A227]/8 via-transparent to-transparent" />
            </div>
          </div>

          {/* Content Area */}
          <div className="flex min-w-0 flex-col justify-center lg:pl-10 xl:pl-14">
            <p className="text-[15px] leading-7 text-[#374151] sm:text-base sm:leading-8">
              <strong className="text-[#1B2A4A]">SAAM Infrastructure</strong> is a trusted construction and infrastructure company based in{" "}
              <strong>Nagpur, Maharashtra</strong>. We deliver reliable, quality-driven construction solutions with a focus on safety, precision and long-term value.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-[#64748B] sm:text-base sm:leading-8">
              Led by <strong>Sachin Lihitkar</strong>, our team brings together experienced architects, interior designers and civil engineers committed to building spaces that endure.
            </p>

            {/* Features Grid */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="group flex items-start gap-3 rounded-xl border border-[#E6E2D7] bg-white/70 p-4 transition-all duration-300 hover:border-[#C9A227]/40 hover:shadow-md">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1B2A4A] text-[#C9A227] transition-colors duration-300 group-hover:bg-[#C9A227] group-hover:text-[#1B2A4A]">
                      <Icon size={17} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1B2A4A]">{feature.title}</h4>
                      <p className="mt-0.5 text-xs leading-5 text-[#6B7280]">{feature.description}</p>
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
