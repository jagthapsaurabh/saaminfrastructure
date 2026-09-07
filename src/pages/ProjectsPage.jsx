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

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#F8F5ED] text-[#11130F]">
      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B2A4A] via-[#253D5E] to-[#1B2A4A]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A227' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#C9A227]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-10 bg-[#C9A227] sm:w-14 lg:w-20" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#C9A227] sm:text-sm">Our Portfolio</p>
            </div>

            <h1 className="font-heading mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Projects built with<span className="block text-[#C9A227]">purpose.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
              Explore our construction and infrastructure projects delivered with precision, quality workmanship and dependable execution across Nagpur and Maharashtra.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { label: "15+", text: "Projects" },
                { label: "6", text: "Categories" },
                { label: "100%", text: "Quality" },
              ].map((stat) => (
                <div key={stat.text} className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm">
                  <span className="text-lg font-bold text-[#C9A227]">{stat.label}</span>
                  <span className="text-xs uppercase tracking-wider text-white/60">{stat.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== FILTERS ============== */}
      <section className="sticky top-16 z-30 border-b border-[#E6E2D7] bg-white/95 shadow-sm backdrop-blur-md lg:top-[72px]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-none sm:flex-wrap sm:gap-3">
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

      {/* ============== PROJECTS GRID ============== */}
      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Section header */}
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#C9A227] bg-[#C9A227]/10 text-[#A98216]">
                <FolderKanban size={22} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#A98216]">Featured Projects</p>
                <p className="mt-1 text-sm font-semibold text-[#6B7280]">{filteredProjects.length} {filteredProjects.length === 1 ? "Project" : "Projects"}</p>
              </div>
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <article key={project.id} className="group overflow-hidden rounded-3xl border border-[#E6E2D7] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A227]/40 hover:shadow-2xl">
                  {/* Image */}
                  <div className="relative h-[240px] overflow-hidden sm:h-[280px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.svg'; }}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11130F]/90 via-transparent to-transparent" />

                    {/* Number badge */}
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9A227]/50 bg-[#11130F]/80 text-xs font-bold text-[#C9A227] backdrop-blur-md">
                      {String(project.id).padStart(2, "0")}
                    </div>

                    {/* Category badge */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <span className="rounded-full border border-[#C9A227] bg-[#C9A227] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#11130F] shadow-lg">
                        {project.category}
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition-all group-hover:rotate-45 group-hover:bg-[#C9A227] group-hover:text-[#11130F]">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Status */}
                    <div className="mb-3 flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${getStatusClass(project.status)}`}>
                        {String(project.status).toLowerCase().includes("completed") ? <CheckCircle2 size={11} /> : <CircleDot size={11} />}
                        {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold leading-tight tracking-tight text-[#11130F] transition-colors group-hover:text-[#A98216] sm:text-2xl">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-3 text-[15px] leading-7 text-[#6B7280]">
                      {project.shortDescription}
                    </p>

                    {/* Meta */}
                    <div className="mt-4 flex items-center gap-4 border-t border-[#E6E2D7] pt-4 text-xs text-[#999990]">
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        {project.year}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link to={`/projects/${project.id}`} className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#A98216] transition-colors hover:text-[#C9A227]">
                      View Project
                      <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-[#E6E2D7] bg-white px-5 py-20 text-center">
              <h2 className="text-2xl font-bold text-[#11130F]">No projects found</h2>
              <p className="mt-3 text-[#6B7280]">Projects for this category will be displayed here.</p>
            </div>
          )}
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="bg-[#11130F] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#1B2A4A] to-[#253D5E] p-8 sm:p-12 lg:p-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
              <div>
                <div className="flex items-center gap-3">
                  <Sparkles size={16} className="text-[#C9A227]" />
                  <p className="text-xs font-bold uppercase tracking-widest text-[#C9A227] sm:text-sm">Have a project in mind?</p>
                </div>
                <h2 className="font-heading mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                  Let's build<span className="block text-[#C9A227]">something great.</span>
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
                  Talk to our team about your construction, infrastructure or project management requirements.
                </p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                  {["Quality Execution", "Reliable Delivery", "Expert Team"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#C9A227]" />
                      <span className="text-xs font-semibold text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="shrink-0">
                <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-[#C9A227] px-6 py-3 text-sm font-bold text-[#11130F] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E0C35B] hover:shadow-xl">
                  Discuss Your Project
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
