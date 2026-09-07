import { Building2, CalendarDays, Users, ShieldCheck, TrendingUp, Award, Target, Briefcase } from "lucide-react";

const statistics = [
  { 
    value: "15+", 
    label: "Projects Completed", 
    description: "Successfully delivered across Maharashtra",
    icon: Building2,
  },
  { 
    value: "10+", 
    label: "Years Experience", 
    description: "Industry expertise since 2014",
    icon: CalendarDays,
  },
  { 
    value: "50+", 
    label: "Team Members", 
    description: "Skilled professionals & engineers",
    icon: Users,
  },
  { 
    value: "100%", 
    label: "Client Satisfaction", 
    description: "Quality-driven approach",
    icon: ShieldCheck,
  },
];

const achievements = [
  {
    title: "Industry Recognition",
    description: "Awarded for excellence in construction quality and project management",
    icon: Award,
  },
  {
    title: "Safety Excellence",
    description: "Zero-incident record maintained across all active project sites",
    icon: ShieldCheck,
  },
  {
    title: "On-Time Delivery",
    description: "98% of projects completed within scheduled timelines",
    icon: CalendarDays,
  },
];

function Statistics() {
  return (
    <section id="statistics" className="relative overflow-hidden bg-[#11130F] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A227' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ── Centered Header ── */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-4 py-1.5 mb-5">
            <TrendingUp size={16} className="text-[#C9A227]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">
              Our Track Record
            </span>
          </div>
          
          <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Numbers That Speak
          </h2>
          <p className="mt-3 text-[15px] text-white/60">
            Delivering excellence in construction and infrastructure development
          </p>
        </div>

        {/* ── Statistics Grid — Perfect 4-col symmetry ── */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center transition-all duration-500 hover:border-[#C9A227]/40 hover:bg-white/[0.07]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#C9A227] to-[#E0C35B] shadow-lg">
                  <Icon size={24} className="text-[#11130F]" strokeWidth={1.5} />
                </div>

                <div className="mt-5">
                  <h3 className="text-3xl font-bold tracking-tight text-[#C9A227] sm:text-4xl">
                    {stat.value}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-[13px] text-white/50">
                    {stat.description}
                  </p>
                </div>

                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#C9A227]/10 blur-2xl transition-all duration-500 group-hover:bg-[#C9A227]/20" />
              </div>
            );
          })}
        </div>

        {/* ── Achievements Row — Perfect 3-col symmetry ── */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-[#C9A227]/30 hover:bg-white/[0.07]"
              >
                <div className="flex-shrink-0 rounded-lg bg-[#C9A227]/20 p-2.5">
                  <Icon size={20} className="text-[#C9A227]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {achievement.title}
                  </h4>
                  <p className="mt-1 text-[13px] leading-5 text-white/50">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
