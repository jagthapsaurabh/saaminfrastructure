import { Link } from "react-router-dom";
import { CheckCircle2, ArrowUpRight, Ruler, HardHat, ShieldCheck, Building2, Hammer, Users, Sparkles } from "lucide-react";

const services = [
  { number: "01", icon: Ruler, title: "Pre-Construction Services", tagline: "Planning & preparation", description: "Planning, budgeting, design coordination and feasibility analysis to ensure a strong foundation for every project.", image: "/images/services/service-1.svg" },
  { number: "02", icon: HardHat, title: "Construction Services", tagline: "End-to-end execution", description: "End-to-end construction execution for residential, commercial and industrial projects with a strong focus on quality and timelines.", image: "/images/services/service-2.svg" },
  { number: "03", icon: Building2, title: "Project Management", tagline: "Structured oversight", description: "Structured project management that maintains control over schedules, budgets and deliverables from start to completion.", image: "/images/services/service-3.svg" },
  { number: "04", icon: Hammer, title: "Infrastructure Development", tagline: "Public & industrial projects", description: "Infrastructure development aligned with engineering precision, responsible execution and long-term structural reliability.", image: "/images/services/service-4.svg" },
  { number: "05", icon: Ruler, title: "Design & Build", tagline: "Integrated delivery", description: "An integrated approach that combines design and construction teams to simplify decision-making and improve delivery speed.", image: "/images/services/service-5.svg" },
  { number: "06", icon: ShieldCheck, title: "Quality Assurance", tagline: "Continuous standards", description: "Quality control and site inspections ensure workmanship, materials and construction practices remain consistent throughout the project.", image: "/images/services/service-6.svg" },
  { number: "07", icon: Users, title: "Consulting Services", tagline: "Expert guidance", description: "Advisory support for contractors, developers and private clients including project planning, risk management and execution strategy.", image: "/images/services/service-7.svg" },
];

const whyChooseUs = [
  { number: "01", title: "Proven Industry Experience", text: "Decades of experience delivering construction, infrastructure and development projects with consistency and precision." },
  { number: "02", title: "Skilled Professional Team", text: "Engineers, project managers and on-site teams who bring technical depth and strong coordination to every project." },
  { number: "03", title: "Reliable Execution", text: "Structured project management, clear communication and dependable delivery from initial planning to final handover." },
];

function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F8F5ED] text-[#11130F]">
      {/* ════════════════════════════════════════════════════
          HERO — Centered, Symmetrical
      ════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B2A4A] via-[#253D5E] to-[#1B2A4A]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A227' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#C9A227]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 text-center sm:px-6 sm:py-32 lg:py-40">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C9A227]" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">What We Offer</p>
            <span className="h-px w-8 bg-[#C9A227]" />
          </div>
          <h1 className="font-heading mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Full-spectrum<span className="text-[#C9A227]"> construction services.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-white/60 sm:text-base sm:leading-8">
            From initial planning to final execution, SAAM Infrastructure delivers dependable construction services in Nagpur and across Maharashtra designed for quality, safety and long-term value.
          </p>

          <div className="mx-auto mt-10 flex max-w-md justify-center gap-4">
            {[
              { label: "7+", text: "Services" },
              { label: "15+", text: "Projects" },
              { label: "100%", text: "Quality" },
            ].map((stat) => (
              <div key={stat.text} className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                <span className="text-xl font-bold text-[#C9A227]">{stat.label}</span>
                <span className="text-[10px] uppercase tracking-wider text-white/50">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SERVICES — Centered header, 3-col grid
      ════════════════════════════════════════════════════ */}
      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#C9A227]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A98216]">Our Services</span>
              <span className="h-px w-8 bg-[#C9A227]" />
            </div>
            <h2 className="font-heading mt-5 text-2xl font-bold tracking-tight text-[#11130F] sm:text-3xl lg:text-4xl">
              Everything you need<span className="text-[#C9A227]"> under one roof.</span>
            </h2>
          </div>

          {/* 3-col grid: first 6, then 1 centered */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.number} className="group relative overflow-hidden rounded-2xl border border-[#E6E2D7] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A227]/40 hover:shadow-xl">
                  <div className="relative h-[180px] overflow-hidden">
                    <img src={service.image} alt={service.title} loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.svg'; }} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11130F]/80 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#C9A227]/50 bg-[#11130F]/80 text-xs font-bold text-[#C9A227] backdrop-blur-md">
                      {service.number}
                    </div>
                    <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition-all group-hover:rotate-45 group-hover:bg-[#C9A227] group-hover:text-[#11130F]">
                      <Icon size={18} />
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="inline-block rounded-full border border-[#E6D49A] bg-[#FFF9E8] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#92751C]">{service.tagline}</span>
                    <h2 className="mt-3 text-lg font-bold leading-tight tracking-tight text-[#11130F] transition-colors group-hover:text-[#A98216]">{service.title}</h2>
                    <p className="mt-2 text-[13px] leading-6 text-[#6B7280]">{service.description}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="h-[2px] w-5 bg-[#C9A227]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF]">SAAM</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* 7th service — full-width, centered */}
          <div className="mt-5">
            <article className="group relative overflow-hidden rounded-2xl border border-[#E6E2D7] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A227]/40 hover:shadow-xl">
              <div className="grid lg:grid-cols-[300px_1fr]">
                <div className="relative h-[200px] overflow-hidden lg:h-full">
                  <img src={services[6].image} alt={services[6].title} loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.svg'; }} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11130F]/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#C9A227]/50 bg-[#11130F]/80 text-xs font-bold text-[#C9A227] backdrop-blur-md">
                    {services[6].number}
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <span className="inline-block rounded-full border border-[#E6D49A] bg-[#FFF9E8] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#92751C]">{services[6].tagline}</span>
                  <h2 className="mt-3 text-xl font-bold leading-tight tracking-tight text-[#11130F] transition-colors group-hover:text-[#A98216]">{services[6].title}</h2>
                  <p className="mt-3 text-[15px] leading-7 text-[#6B7280]">{services[6].description}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          WHY CHOOSE US — Centered header, 3-col
      ════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#11130F] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#C9A227]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#C9A227]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#C9A227]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">Why Choose SAAM</span>
              <span className="h-px w-8 bg-[#C9A227]" />
            </div>
            <h2 className="font-heading mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              A reliable partner<span className="text-[#C9A227]"> for your project.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-white/50">
              We deliver construction services with a strong commitment to quality, dependability and long-term value.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.number} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 text-center transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A227]/40 hover:bg-white/10">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-[#C9A227]/30 bg-[#C9A227]/10 text-lg font-bold text-[#C9A227] transition-all duration-300 group-hover:bg-[#C9A227] group-hover:text-[#11130F]">
                  {item.number}
                </div>
                <h3 className="mt-5 text-base font-bold text-white sm:text-lg">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-white/50">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CTA — Centered, Symmetrical
      ════════════════════════════════════════════════════ */}
      <section className="bg-[#F8F5ED] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#1B2A4A] to-[#253D5E] p-8 text-center sm:p-12 lg:p-16">
            <div className="flex items-center justify-center gap-3">
              <Sparkles size={14} className="text-[#C9A227]" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">Get Started</p>
            </div>
            <h2 className="font-heading mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              Ready to begin?<span className="text-[#C9A227]"> Let's discuss your project.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-white/60">
              Talk to our team about your construction or infrastructure requirements.
            </p>
            <div className="mt-8">
              <a href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-[#C9A227] px-7 py-3 text-sm font-bold text-[#11130F] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E0C35B] hover:shadow-xl">
                Discuss Your Project
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;
