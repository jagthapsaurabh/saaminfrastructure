import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
  ZoomIn,
  Minus,
  Plus,
  Filter,
} from "lucide-react";

const galleryImages = [
  { id: 1, title: "Commercial Construction", category: "Commercial", description: "A modern commercial construction project focused on strong structural execution, quality materials and efficient project delivery.", image: "/images/gallery/commercial-building.jpg" },
  { id: 2, title: "Residential Development", category: "Residential", description: "A residential development designed with a balance of functionality, durability and modern architectural planning.", image: "/images/gallery/residential-building.jpg" },
  { id: 3, title: "Infrastructure Work", category: "Infrastructure", description: "Infrastructure work delivered with careful planning, engineering precision and a strong focus on dependable execution.", image: "/images/gallery/infrastructure-road.jpg" },
  { id: 4, title: "Urban Development", category: "Infrastructure", description: "An urban development project combining practical infrastructure planning with modern construction standards.", image: "/images/gallery/construction-site-3.jpg" },
  { id: 5, title: "Industrial Facility", category: "Industrial", description: "An industrial facility developed with emphasis on structural strength, operational requirements and long-term reliability.", image: "/images/gallery/industrial-facility.jpg" },
  { id: 6, title: "Construction Planning", category: "Planning", description: "Detailed construction planning supporting accurate execution, coordinated engineering and efficient project management.", image: "/images/gallery/site-preparation.jpg" },
  { id: 7, title: "Project Development", category: "Development", description: "A project development process focused on coordinated planning, construction quality and successful project completion.", image: "/images/gallery/construction-site-1.jpg" },
  { id: 8, title: "Engineering Work", category: "Engineering", description: "Engineering work carried out with attention to technical accuracy, structural requirements and dependable construction practices.", image: "/images/gallery/construction-site-2.jpg" },
];

const categories = ["All", "Commercial", "Residential", "Infrastructure", "Industrial", "Planning"];

function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const filteredImages = activeCategory === "All" ? galleryImages : galleryImages.filter(img => img.category === activeCategory);
  const selectedImage = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const resetZoom = () => { setZoom(1); setPosition({ x: 0, y: 0 }); setIsDragging(false); };
  const openImage = (item) => {
    const index = filteredImages.findIndex(i => i.id === item.id);
    setSelectedIndex(index); setZoom(1); setPosition({ x: 0, y: 0 }); setIsDragging(false);
  };
  const closeImage = () => { setSelectedIndex(null); resetZoom(); };
  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev + 1) % filteredImages.length);
    setZoom(1); setPosition({ x: 0, y: 0 });
  };
  const previousImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    setZoom(1); setPosition({ x: 0, y: 0 });
  };
  const zoomIn = () => setZoom((z) => Math.min(z + 0.5, 4));
  const zoomOut = () => setZoom((z) => { const n = Math.max(z - 0.5, 1); if (n === 1) setPosition({ x: 0, y: 0 }); return n; });
  const handleDoubleClick = () => setZoom((z) => (z === 1 ? 2.5 : (setPosition({ x: 0, y: 0 }), 1)));

  const handleMouseDown = (e) => {
    if (zoom <= 1) return;
    e.preventDefault(); setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };
  const handleMouseMove = (e) => {
    if (!isDragging || zoom <= 1) return;
    setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };
  const handleMouseUp = () => setIsDragging(false);
  const handleTouchStart = (e) => {
    if (zoom <= 1) return;
    const t = e.touches[0]; setIsDragging(true);
    setDragStart({ x: t.clientX - position.x, y: t.clientY - position.y });
  };
  const handleTouchMove = (e) => {
    if (!isDragging || zoom <= 1) return;
    const t = e.touches[0];
    setPosition({ x: t.clientX - dragStart.x, y: t.clientY - dragStart.y });
  };

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") { closeImage(); return; }
      if (e.key === "ArrowRight") { nextImage(); return; }
      if (e.key === "ArrowLeft") { previousImage(); return; }
      if (e.key === "+" || e.key === "=") { zoomIn(); return; }
      if (e.key === "-") { zoomOut(); return; }
      if (e.key === "0") { setZoom(1); setPosition({ x: 0, y: 0 }); setIsDragging(false); }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handleKeyDown); };
  }, [selectedIndex, filteredImages.length]);

  return (
    <main className="min-h-screen bg-[#F8F5ED] text-[#11130F]">
      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B2A4A] via-[#253D5E] to-[#1B2A4A]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A227' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#C9A227]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-10 bg-[#C9A227] sm:w-14 lg:w-20" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#C9A227] sm:text-sm">Visual Portfolio</p>
            </div>
            <h1 className="font-heading mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Project<span className="block text-[#C9A227]">Gallery.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
              Explore photographs from our construction, infrastructure and development work across Nagpur and Maharashtra.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {[
                { label: galleryImages.length, text: "Photos" },
                { label: new Set(galleryImages.map(i => i.category)).size, text: "Categories" },
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
            <div className="flex items-center gap-2 pr-3 text-xs font-bold text-[#A98216]">
              <Filter size={14} />
              <span className="hidden sm:inline">Filter:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => { setActiveCategory(cat); setSelectedIndex(null); }}
                className={`shrink-0 rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 sm:px-6 sm:text-sm ${
                  activeCategory === cat
                    ? "border-[#C9A227] bg-[#C9A227] text-[#11130F] shadow-md"
                    : "border-[#E6E2D7] bg-white text-[#6B7280] hover:border-[#C9A227] hover:text-[#A98216]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============== GALLERY GRID ============== */}
      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#C9A227]" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#A98216]">Selected Work</p>
            </div>
            <h2 className="font-heading mt-4 text-3xl font-bold tracking-tight text-[#11130F] sm:text-4xl">
              A closer look at<span className="text-[#C9A227]">our projects.</span>
            </h2>
          </div>

          {filteredImages.length > 0 ? (
            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
              {filteredImages.map((item, index) => (
                <article key={item.id} className="group mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-[#E6E2D7] bg-white shadow-sm transition-all duration-500 hover:border-[#C9A227]/40 hover:shadow-xl">
                  <button
                    type="button"
                    onClick={() => openImage(item)}
                    className="relative block w-full cursor-zoom-in text-left"
                  >
                    <div className={`relative overflow-hidden ${index % 3 === 0 ? "h-[340px]" : index % 2 === 0 ? "h-[280px]" : "h-[320px]"}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.svg'; }}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#11130F]/90 via-transparent to-transparent" />

                      {/* Number */}
                      <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[#C9A227]/50 bg-[#11130F]/80 text-xs font-bold text-[#C9A227] backdrop-blur-md">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Zoom icon */}
                      <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition-all group-hover:bg-[#C9A227] group-hover:text-[#11130F]">
                        <ZoomIn size={16} />
                      </div>

                      {/* Content overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <span className="inline-block rounded-full border border-[#C9A227] bg-[#C9A227] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#11130F]">
                          {item.category}
                        </span>
                        <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">{item.title}</h3>
                      </div>
                    </div>
                  </button>

                  {/* Footer */}
                  <div className="flex items-center justify-between px-5 py-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B0ADA2]">SAAM Infrastructure</span>
                    <button type="button" onClick={() => openImage(item)} className="flex items-center gap-1.5 text-xs font-bold text-[#A98216] transition-colors hover:text-[#C9A227]">
                      View <ArrowUpRight size={12} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-[#E6E2D7] bg-white px-5 py-20 text-center">
              <h2 className="text-2xl font-bold text-[#11130F]">No images found</h2>
              <p className="mt-3 text-[#6B7280]">Images for this category will be displayed here.</p>
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
                  <span className="h-[2px] w-8 bg-[#C9A227]" />
                  <p className="text-xs font-bold uppercase tracking-widest text-[#C9A227] sm:text-sm">Start Your Project</p>
                </div>
                <h2 className="font-heading mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                  Let's build something<span className="block text-[#C9A227]">great together.</span>
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
                  Have a construction or infrastructure project in mind?
                </p>
              </div>
              <a href="/contact" className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#C9A227] px-6 py-3 text-sm font-bold text-[#11130F] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E0C35B] hover:shadow-xl">
                Discuss Your Project
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============== LIGHTBOX ============== */}
      {selectedImage && (
        <div className="fixed inset-0 z-[9999] h-[100dvh] w-full overflow-y-auto overscroll-contain bg-[#11130F]/98 backdrop-blur-xl" onMouseDown={(e) => { if (e.target === e.currentTarget) closeImage(); }}>
          {/* Top bar */}
          <div className="fixed left-3 right-3 top-3 z-[10002] flex items-center justify-between sm:left-5 sm:right-5">
            <div className="rounded-full border border-white/15 bg-black/50 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-white/80 backdrop-blur-md">
              {String(selectedIndex + 1).padStart(2, "0")} / {String(filteredImages.length).padStart(2, "0")}
            </div>
            <button type="button" onClick={closeImage} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-[#C9A227] hover:text-[#11130F]">
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="mx-auto flex min-h-[100dvh] w-full max-w-7xl flex-col items-center px-3 pb-5 pt-[76px] sm:px-5 sm:pb-6">
            {/* Image area */}
            <div className="relative flex w-full flex-1 items-center justify-center px-9 sm:px-16 lg:px-20">
              <button type="button" onClick={previousImage} className="absolute left-0 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-xl backdrop-blur-md transition-all hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-[#11130F] sm:h-14 sm:w-14">
                <ArrowLeft size={20} strokeWidth={2.5} />
              </button>

              <div
                className="relative flex h-[55dvh] max-h-[680px] w-full items-center justify-center overflow-hidden rounded-xl sm:h-[62dvh] sm:rounded-2xl"
                onDoubleClick={handleDoubleClick}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
              >
                <img
                  key={selectedImage.id}
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  draggable="false"
                  onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.svg'; }}
                  className={`block select-none object-contain ${isDragging ? "cursor-grabbing" : zoom > 1 ? "cursor-grab" : "cursor-zoom-in"}`}
                  style={{
                    width: "auto", height: "auto",
                    maxWidth: zoom === 1 ? "100%" : "none",
                    maxHeight: zoom === 1 ? "100%" : "none",
                    transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${zoom})`,
                    transformOrigin: "center center",
                    transition: isDragging ? "none" : "transform 180ms ease-out",
                  }}
                />
              </div>

              <button type="button" onClick={nextImage} className="absolute right-0 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-xl backdrop-blur-md transition-all hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-[#11130F] sm:h-14 sm:w-14">
                <ArrowRight size={20} strokeWidth={2.5} />
              </button>
            </div>

            {/* Zoom controls */}
            <div className="mt-3 flex shrink-0 items-center gap-2">
              <button type="button" onClick={zoomOut} disabled={zoom <= 1} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-[#C9A227] hover:text-[#11130F] disabled:cursor-not-allowed disabled:opacity-30">
                <Minus size={17} />
              </button>
              <button type="button" onClick={resetZoom} className="min-w-[70px] rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-[#C9A227] hover:text-[#11130F]">
                {Math.round(zoom * 100)}%
              </button>
              <button type="button" onClick={zoomIn} disabled={zoom >= 4} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-[#C9A227] hover:text-[#11130F] disabled:cursor-not-allowed disabled:opacity-30">
                <Plus size={17} />
              </button>
            </div>

            {/* Info */}
            <div className="mt-4 w-full max-w-5xl shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#202522]/95 shadow-2xl backdrop-blur-xl sm:rounded-3xl">
              <div className="p-5 sm:p-6">
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#C9A227]">{selectedImage.category}</p>
                <h3 className="mt-1.5 text-xl font-bold text-white sm:text-2xl">{selectedImage.title}</h3>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-white/65">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default GalleryPage;
