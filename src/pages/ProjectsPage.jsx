import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  FolderKanban,
  Sparkles,
  CheckCircle2,
  CircleDot,
  MapPin,
  Calendar,
} from "lucide-react";
import { useState } from "react";
import projects from "../data/projects";

const filters = ["All", "Commercial", "Residential", "Infrastructure", "Industrial", "Renovation"];

function getStatusClass(status) {
  const value = String(status || "").toLowerCase();
  if (value.includes("completed")) return "border-emerald-200 bg-emerald-50 text-emerald-700";
  if (value.includes("ongoing")) return "border-blue-200 bg-blue-50 text-blue-700";
  return "border-[#E6D49A] bg-[#FFF9E8] text-[#92751C]";
}

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">Our Portfolio</p>
            <span className="h-px w-8 bg-[#C9A227]" />
          </div>

          <h1 className="font-heading mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Projects built with<span className="text-[#C9A227]"> purpose.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-white/60 sm:text-base sm:leading-8">
            Explore our construction and infrastructure projects delivered with precision, quality workmanship and dependable execution across Nagpur and Maharashtra.
          </p>

          <div className="mx-auto mt-10 flex max-w-md justify-center gap-4">
            {[
              { label: "15+", text: "Projects" },
              { label: "6", text: "Categories" },
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
          FILTERS — Centered
      ════════════════════════════════════════════════════ */}
      <section className="sticky top-16 z-30 border-b border-[#E6E2D7] bg-white/95 shadow-sm backdrop-blur-md lg:top-[72px]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-2 overflow-x-auto py-4 scrollbar-none sm:flex-wrap sm:gap-3">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 sm:px-6 sm:text-sm ${
                    isActive
                      ? "border-[#C9A227] bg-[#C9A227] text-[#11130F] shadow-md"
                      : "border-[#E6E2D7] bg-white text-[#6B7280] hover:border-[#C9A227] hover:text-[#A98216]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          PROJECTS GRID — Symmetrical 3-col
      ════════════════════════════════════════════════════ */}
      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Centered section label */}
          <div className="mb-10 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#C9A227]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A98216]">Featured Projects</span>
              <span className="h-px w-8 bg-[#C9A227]" />
            </div>
            <p className="mt-3 text-sm text-[#6B7280]">{filteredProjects.length} {filteredProjects.length === 1 ? "Project" : "Projects"}</p>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <article key={project.id} className="group overflow-hidden rounded-2xl border border-[#E6E2D7] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A227]/40 hover:shadow-xl">
                  {/* Image */}
                  <div className="relative h-[220px] overflow-hidden sm:h-[240px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.svg'; }}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11130F]/80 via-transparent to-transparent" />

                    <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[#C9A227]/50 bg-[#11130F]/80 text-xs font-bold text-[#C9A227] backdrop-blur-md">
                      {String(project.id).padStart(2, "0")}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <span className="rounded-full border border-[#C9A227] bg-[#C9A227] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#11130F]">
                        {project.category}
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition-all group-hover:rotate-45 group-hover:bg-[#C9A227] group-hover:text-[#11130F]">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>

                  {/* Content — Balanced */}
                  <div className="p-5">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${getStatusClass(project.status)}`}>
                      {String(project.status).toLowerCase().includes("completed") ? <CheckCircle2 size={11} /> : <CircleDot size={11} />}
                      {project.status}
                    </span>

                    <h2 className="mt-3 text-lg font-bold leading-tight tracking-tight text-[#11130F] transition-colors group-hover:text-[#A98216]">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-[13px] leading-6 text-[#6B7280]">{project.shortDescription}</p>

                    <div className="mt-4 flex items-center gap-4 border-t border-[#E6E2D7] pt-4 text-xs text-[#9CA3AF]">
                      <div className="flex items-center gap-1"><MapPin size={12} />{project.location}</div>
                      <div className="flex items-center gap-1"><Calendar size={12} />{project.year}</div>
                    </div>

                    <Link to={`/projects/${project.id}`} className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#A98216] transition-colors hover:text-[#C9A227]">
                      View Project <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-[#E6E2D7] bg-white px-5 py-20 text-center">
              <h2 className="text-2xl font-bold text-[#11130F]">No projects found</h2>
              <p className="mt-3 text-[#6B7280]">Projects for this category will be displayed here.</p>
            </div>
          )}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CTA — Centered, Symmetrical
      ════════════════════════════════════════════════════ */}
      <section className="bg-[#11130F] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#1B2A4A] to-[#253D5E] p-8 text-center sm:p-12 lg:p-16">
            <div className="flex items-center justify-center gap-3">
              <Sparkles size={14} className="text-[#C9A227]" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">Have a project in mind?</p>
            </div>
            <h2 className="font-heading mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              Let's build<span className="text-[#C9A227]"> something great.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-white/60">
              Talk to our team about your construction, infrastructure or project management requirements.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-[#C9A227] px-7 py-3 text-sm font-bold text-[#11130F] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E0C35B] hover:shadow-xl">
                Discuss Your Project
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
