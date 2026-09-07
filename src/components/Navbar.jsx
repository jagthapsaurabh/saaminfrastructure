import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`
        fixed left-0 right-0 top-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-white/98 shadow-lg backdrop-blur-xl"
          : "bg-white/95 shadow-sm backdrop-blur-lg"
        }
      `}
      style={{
        paddingTop: 'env(safe-area-inset-top)',
      }}
    >
      {/* Main navbar */}
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-[68px] sm:px-6 lg:h-[72px] lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src="/saam-logo.png"
            alt="SAAM Infrastructure"
            width="138"
            height="80"
            loading="eager"
            decoding="async"
            style={{
              height: '48px',
              width: 'auto',
              maxWidth: '150px',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </Link>

        {/* Desktop nav - always visible on lg+ */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `relative rounded-lg px-3 py-2 text-[14px] font-semibold tracking-wide transition-all duration-300
                ${isActive
                  ? "text-[#8B6914] bg-[#C9A227]/10"
                  : "text-[#374151] hover:text-[#8B6914] hover:bg-[#C9A227]/5"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-[#C9A227]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-[#C9A227] px-5 py-2.5 text-[14px] font-bold text-[#11130F] shadow-sm transition-all duration-300 hover:bg-[#E0C35B] hover:shadow-md lg:inline-flex"
        >
          Get a Quote
          <ArrowUpRight size={14} />
        </Link>

        {/* Hamburger - always visible below lg */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[#C9A227] bg-white text-[#11130F] shadow-md transition-all duration-300 hover:bg-[#C9A227] hover:text-white active:scale-95 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
        </button>
      </div>

      {/* ============ MOBILE MENU ============ */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          />

          {/* Panel - slides down from navbar */}
          <div 
            className="relative z-50 mx-3 mt-2 max-h-[calc(100vh-80px)] overflow-y-auto rounded-2xl bg-white shadow-2xl"
            style={{
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {/* Menu header */}
            <div className="flex items-center justify-between border-b border-[#E6E2D7] px-5 py-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8B6914]">Navigation</span>
              <button
                type="button"
                onClick={closeMenu}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f6ef] text-[#374151] active:scale-95 transition-transform"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav Links - ALL 6 TABS VISIBLE */}
            <nav className="flex flex-col px-3 py-3">
              {navItems.map((item, idx) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-4 text-base font-semibold transition-all duration-200 active:scale-[0.98]
                    ${isActive
                      ? "bg-[#11130F] text-white"
                      : "text-[#374151] hover:bg-[#F8F5ED] hover:text-[#11130F]"
                    }`
                  }
                >
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-[#C9A227]/10 text-[#8B6914]"
                  }`}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {item.name}
                  <ArrowUpRight size={16} className={`ml-auto ${isActive ? "text-white" : "text-[#C9A227]/40"}`} />
                </NavLink>
              ))}
            </nav>

            {/* Bottom CTAs */}
            <div className="space-y-2 border-t border-[#E6E2D7] p-4">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#11130F] px-6 py-4 text-sm font-bold text-white transition-all active:scale-[0.98] hover:bg-[#1B2A4A]"
              >
                Get a Quote
                <ArrowUpRight size={16} />
              </Link>
              <a
                href="tel:+919822735116"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#11130F]/15 px-6 py-4 text-sm font-semibold text-[#11130F] transition-all active:scale-[0.98] hover:bg-[#11130F]/5"
              >
                <Phone size={16} />
                +91 98227 35116
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
