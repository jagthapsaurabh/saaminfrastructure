import { Eye, Target, ArrowUpRight, Award, Sparkles, Shield, Handshake, TrendingUp, Building2, Users, Clock } from "lucide-react";
import aboutConstruction from "../assets/images/about-construction.jpg";

const leaders = [
  {
    name: "Sachin Lihitkar",
    role: "Managing Director & Founder",
    image: "/images/team/sachin-lihitkar.svg",
    initials: "SL",
    description: "Leading Saam Infrastructure with a clear vision for quality construction, professional execution and long-term growth.",
    statement: "With a strong focus on quality, client satisfaction and responsible execution, Sachin provides strategic direction across projects and ensures that every decision reflects the values of reliability, safety and integrity.",
  },
];

const advantages = [
  { number: "01", icon: Shield, title: "Quality Assurance", text: "Every project undergoes rigorous quality checks at every stage of construction." },
  { number: "02", icon: Handshake, title: "Trusted Partnership", text: "We build lasting relationships through transparency, communication and dependability." },
  { number: "03", icon: TrendingUp, title: "Value Engineering", text: "Optimising costs while maintaining quality standards that exceed expectations." },
  { number: "04", icon: Award, title: "Safety First", text: "Responsible construction practices with safety as a non-negotiable priority." },
];

const journey = [
  { year: "2014", title: "Foundation", desc: "SAAM Infrastructure was established in Nagpur with a vision to deliver quality construction." },
  { year: "2017", title: "Growth", desc: "Expanded team to 50+ professionals and completed 10+ major projects across Maharashtra." },
  { year: "2020", title: "Diversification", desc: "Expanded into infrastructure development and industrial construction." },
  { year: "2024", title: "Excellence", desc: "15+ projects delivered with 100% client satisfaction and zero safety incidents." },
];

function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F5ED] text-[#11130F]">
      {/* ════════════════════════════════════════════════════
          HERO — Centered, Symmetrical
      ════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/about-construction.svg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#11130F]/90 via-[#11130F]/80 to-[#11130F]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 text-center sm:px-6 sm:pb-24 sm:pt-40 lg:px-8 lg:pb-28 lg:pt-48">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C9A227]" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">About SAAM Infrastructure</p>
            <span className="h-px w-8 bg-[#C9A227]" />
          </div>

          <h1 className="font-heading mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Building with<span className="text-[#C9A227]"> purpose.</span><br className="hidden sm:inline" /> Delivering with precision.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-white/60 sm:text-base sm:leading-8">
            SAAM Infrastructure delivers dependable construction and infrastructure solutions across Nagpur and Maharashtra with quality, precision, safety and long-term value at the core.
          </p>

          {/* Stats — Perfectly centered, 4 equal items */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Building2, value: "15+", label: "Projects" },
              { icon: Users, value: "50+", label: "Team" },
              { icon: Clock, value: "10+", label: "Years" },
              { icon: Award, value: "100%", label: "Safety" },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
                  <Icon size={18} className="text-[#C9A227]" />
                  <span className="text-xl font-bold text-white">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/50">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          WHO WE ARE — Centered header, balanced 2-col
      ════════════════════════════════════════════════════ */}
      <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Centered Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#C9A227]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A98216]">Who We Are</span>
              <span className="h-px w-8 bg-[#C9A227]" />
            </div>
            <h2 className="font-heading mt-5 text-2xl font-bold leading-tight text-[#11130F] sm:text-3xl lg:text-4xl">
              A trusted construction partner<span className="text-[#C9A227]"> in Nagpur.</span>
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#6B7280]">
              SAAM Infrastructure is a Nagpur-based construction and infrastructure company committed to delivering projects with quality, reliability and long-term value across Nagpur, Vidarbha and the wider Maharashtra region.
            </p>
          </div>

          {/* Balanced 2×2 grid */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              { icon: Target, title: "Our Mission", text: "Delivering quality construction with precision, safety and lasting value across every project we undertake.", color: "bg-[#C9A227]" },
              { icon: Eye, title: "Our Vision", text: "To be the most trusted and respected infrastructure company in Nagpur and the Maharashtra region.", color: "bg-[#1B2A4A]" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group rounded-2xl border border-[#E6E2D7] bg-[#F8F5ED] p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/40 hover:shadow-lg">
                  <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-xl ${item.color} text-white shadow-md`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#11130F]">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#6B7280]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          LEADERSHIP — Centered, symmetrical card
      ════════════════════════════════════════════════════ */}
      <section className="bg-[#F8F5ED] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#C9A227]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A98216]">Leadership</span>
              <span className="h-px w-8 bg-[#C9A227]" />
            </div>
            <h2 className="font-heading mt-5 text-2xl font-bold tracking-tight text-[#11130F] sm:text-3xl lg:text-4xl">The vision behind SAAM.</h2>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            {leaders.map((leader) => (
              <div key={leader.name} className="overflow-hidden rounded-3xl border border-[#E6E2D7] bg-white shadow-sm">
                <div className="grid lg:grid-cols-[280px_1fr]">
                  {/* Image side — centered content */}
                  <div className="relative flex flex-col items-center bg-gradient-to-br from-[#1B2A4A] to-[#253D5E] p-8 lg:p-10">
                    <div className="flex h-44 w-44 overflow-hidden rounded-full border-4 border-[#C9A227]/30 shadow-2xl">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const fallback = e.target.nextElementSibling;
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                        className="h-full w-full object-cover"
                      />
                      <div className="hidden h-full w-full items-center justify-center text-5xl font-bold text-[#C9A227]">
                        {leader.initials}
                      </div>
                    </div>
                    <div className="mt-5 text-center">
                      <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-[#C9A227]">{leader.role}</p>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="flex flex-col justify-center p-8 lg:p-10">
                    <p className="text-[15px] leading-7 text-[#374151]">{leader.description}</p>
                    <div className="mt-6 rounded-xl border-l-4 border-[#C9A227] bg-[#F8F5ED] p-5">
                      <p className="text-[15px] leading-7 text-[#6B7280] italic">"{leader.statement}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          JOURNEY — Centered header, symmetrical 2×2 grid
      ════════════════════════════════════════════════════ */}
      <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#C9A227]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A98216]">Our Journey</span>
              <span className="h-px w-8 bg-[#C9A227]" />
            </div>
            <h2 className="font-heading mt-5 text-2xl font-bold tracking-tight text-[#11130F] sm:text-3xl lg:text-4xl">A decade of<span className="text-[#C9A227]"> excellence.</span></h2>
          </div>

          {/* Symmetrical 2×2 grid */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((item) => (
              <div key={item.year} className="group relative rounded-2xl border border-[#E6E2D7] bg-[#F8F5ED] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/40 hover:shadow-lg">
                <span className="inline-flex items-center justify-center rounded-lg bg-[#C9A227] px-3 py-1 text-xs font-bold text-[#11130F]">{item.year}</span>
                <h3 className="mt-4 text-lg font-bold text-[#11130F]">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#6B7280]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          WHY CHOOSE US — Centered header, symmetrical 2×2 grid
      ════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#11130F] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#C9A227]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#C9A227]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#C9A227]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">Why Choose Us</span>
              <span className="h-px w-8 bg-[#C9A227]" />
            </div>
            <h2 className="font-heading mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              A dependable partner<span className="text-[#C9A227]"> for your next project.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-white/50">
              We believe successful construction is built on trust, communication, quality and responsible execution.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.number} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A227]/40 hover:bg-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9A227]/30 bg-[#C9A227]/10 text-[#C9A227] transition-all duration-300 group-hover:bg-[#C9A227] group-hover:text-[#11130F]">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <span className="text-xs font-bold tracking-wider text-[#C9A227]/40">{item.number}</span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-white/50">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CTA — Centered, symmetrical
      ════════════════════════════════════════════════════ */}
      <section className="bg-[#F8F5ED] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#1B2A4A] to-[#253D5E] p-8 text-center sm:p-12 lg:p-16">
            <div className="flex items-center justify-center gap-3">
              <Sparkles size={14} className="text-[#C9A227]" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">Start Your Project</p>
            </div>
            <h2 className="font-heading mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              Let's build something great<span className="text-[#C9A227]"> together.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-white/60">
              Tell us about your construction or infrastructure requirements and our team will be ready to discuss the next steps.
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

export default AboutPage;
