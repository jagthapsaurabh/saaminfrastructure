import { Building2, CalendarDays, Users, ShieldCheck, TrendingUp, Award, Target, Briefcase } from "lucide-react";

const statistics = [
  { 
    value: "15+", 
    label: "Projects Completed", 
    description: "Successfully delivered across Maharashtra",
    icon: Building2,
    color: "from-[#C9A227] to-[#E0C35B]"
  },
  { 
    value: "10+", 
    label: "Years Experience", 
    description: "Industry expertise since 2014",
    icon: CalendarDays,
    color: "from-[#1B2A4A] to-[#253D5E]"
  },
  { 
    value: "50+", 
    label: "Team Members", 
    description: "Skilled professionals & engineers",
    icon: Users,
    color: "from-[#1B2A4A] to-[#253D5E]"
  },
  { 
    value: "100%", 
    label: "Client Satisfaction", 
    description: "Quality-driven approach",
    icon: ShieldCheck,
    color: "from-[#C9A227] to-[#E0C35B]"
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
    <section id="statistics" className="relative overflow-hidden bg-[#1B2A4A] py-20 sm:py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A227' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-4 py-1.5 mb-6">
            <TrendingUp size={16} className="text-[#C9A227]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">
              Our Track Record
            </span>
          </div>
          
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Numbers That Speak
          </h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Delivering excellence in construction and infrastructure development
          </p>
        </div>

        {/* Statistics Grid - Bento Style */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 p-6 sm:p-8 transition-all duration-500 hover:border-[#C9A227]/50 ${
                  index === 0 || index === 3 ? 'bg-gradient-to-br from-[#C9A227]/20 to-[#C9A227]/5' : 'bg-white/5'
                }`}
              >
                {/* Icon */}
                <div className={`inline-flex rounded-xl bg-gradient-to-br ${stat.color} p-3 shadow-lg`}>
                  <Icon size={24} className="text-white" strokeWidth={1.5} />
                </div>

                {/* Value */}
                <div className="mt-6">
                  <h3 className={`text-4xl font-bold tracking-tight sm:text-5xl ${
                    index === 0 || index === 3 ? 'text-[#C9A227]' : 'text-white'
                  }`}>
                    {stat.value}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-white sm:text-base">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xs text-white/60 sm:text-sm">
                    {stat.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br ${stat.color} opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-20`} />
              </div>
            );
          })}
        </div>

        {/* Achievements Row */}
        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-[#C9A227]/30 hover:bg-white/10"
              >
                <div className="flex-shrink-0 rounded-lg bg-[#C9A227]/20 p-2.5">
                  <Icon size={20} className="text-[#C9A227]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white sm:text-base">
                    {achievement.title}
                  </h4>
                  <p className="mt-1 text-xs text-white/60 sm:text-sm">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center sm:mt-16">
          <p className="text-sm text-white/60 sm:text-base">
            Join our growing list of satisfied clients
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#C9A227]/20 px-6 py-2">
            <Target size={16} className="text-[#C9A227]" />
            <span className="text-sm font-semibold text-[#C9A227]">
              Committed to Excellence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
