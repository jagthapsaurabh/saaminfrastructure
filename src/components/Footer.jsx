import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import saamLogo from "../assets/images/saam-logo.png";

function Footer() {
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Civil Construction",
    "Commercial Projects",
    "Residential Construction",
    "Infrastructure Development",
    "Renovation & Development",
    "Engineering & Project Management",
  ];

  return (
    <footer className="w-full overflow-hidden bg-[#11130F] text-white">
      {/* CTA Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute -right-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#C9A227]/5 blur-3xl" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="min-w-0 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C9A227] sm:w-12" />
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A227] sm:text-xs">Start Your Project</p>
              </div>
              <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                Have a project<br /><span className="text-[#C9A227]">in mind?</span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                Let's discuss your construction and infrastructure requirements and find the right solution for your project.
              </p>
            </div>

            <Link to="/contact" className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#C9A227] px-5 py-2.5 text-[13px] font-bold text-[#11130F] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E0C35B] hover:shadow-lg">
              Get a Quote
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <section className="border-b border-white/10">
        <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-6">
            {/* Company / Logo */}
            <div className="min-w-0 text-center sm:text-left">
              <button type="button" onClick={handleHomeClick} aria-label="Go to homepage" className="group mx-auto block border-0 bg-transparent p-0 outline-none sm:mx-0">
                <img src={saamLogo} alt="SAAM Infrastructure" className="mx-auto block h-auto w-[170px] object-contain sm:mx-0 sm:w-[180px] transition-transform duration-300 group-hover:scale-[1.03]" />
              </button>
              <div className="mx-auto mt-4 h-[2px] w-10 rounded-full bg-[#C9A227] sm:mx-0" />
              <p className="mx-auto mt-4 max-w-[280px] text-sm leading-7 text-white/55 sm:mx-0">
                Reliable construction and infrastructure solutions in Nagpur, Maharashtra. Quality, precision, safety and long-term value since 2014.
              </p>

              {/* Social Links */}
              <div className="mt-6">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35 sm:text-xs">Follow Us</p>
                <div className="flex items-center justify-center gap-2 sm:justify-start">
                  <a href="https://www.facebook.com/saaminfrastructure" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all duration-300 hover:border-[#C9A227] hover:bg-[#C9A227]/10 hover:text-[#C9A227]">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/saaminfrastructure" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all duration-300 hover:border-[#C9A227] hover:bg-[#C9A227]/10 hover:text-[#C9A227]">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/saaminfrastructure" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all duration-300 hover:border-[#C9A227] hover:bg-[#C9A227]/10 hover:text-[#C9A227]">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="min-w-0 text-center sm:text-left">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">Quick Links</h3>
              <nav className="mt-5 flex flex-col gap-2.5">
                {navItems.map((item) => (
                  <Link key={item.name} to={item.path} className="group inline-flex items-center justify-center gap-1.5 text-sm text-white/55 transition-all duration-300 hover:text-[#C9A227] sm:justify-start">
                    {item.name}
                    <ArrowUpRight size={12} className="opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="min-w-0 text-center sm:text-left">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">Services</h3>
              <div className="mt-5 flex flex-col gap-2.5">
                {services.map((service) => (
                  <Link key={service} to="/services" className="group inline-flex items-center justify-center gap-1.5 text-sm text-white/55 transition-all duration-300 hover:text-[#C9A227] sm:justify-start">
                    {service}
                    <ArrowUpRight size={12} className="hidden opacity-0 transition-all duration-300 group-hover:opacity-100 sm:block" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Us */}
            <div className="min-w-0 text-center sm:text-left">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">Contact Us</h3>
              <div className="mt-5 space-y-4">
                <a href="tel:+919822735116" className="group flex items-start justify-center gap-3 text-sm text-white/55 transition-colors duration-300 hover:text-[#C9A227] sm:justify-start">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-[#C9A227]/30 group-hover:bg-[#C9A227]/10">
                    <Phone size={15} className="text-[#C9A227]" />
                  </span>
                  <span className="pt-0.5">+91 98227 35116</span>
                </a>
                <a href="mailto:saaminfrastructure@gmail.com" className="group flex items-start justify-center gap-3 text-sm text-white/55 transition-colors duration-300 hover:text-[#C9A227] sm:justify-start">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-[#C9A227]/30 group-hover:bg-[#C9A227]/10">
                    <Mail size={15} className="text-[#C9A227]" />
                  </span>
                  <span className="min-w-0 break-all pt-0.5 text-left">saaminfrastructure@gmail.com</span>
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=Plot+No.+2%2C+Dhawale+Building%2C+Old+Dighori+Square%2C+Umred+Rd%2C+Dighori%2C+Nagpur%2C+Maharashtra+440034" target="_blank" rel="noopener noreferrer" className="group flex items-start justify-center gap-3 text-sm text-white/55 transition-colors duration-300 hover:text-[#C9A227] sm:justify-start">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-[#C9A227]/30 group-hover:bg-[#C9A227]/10">
                    <MapPin size={15} className="text-[#C9A227]" />
                  </span>
                  <span className="pt-0.5 text-left">
                    Plot No. 2, Dhawale Building,<br />
                    Old Dighori Square, Umred Rd,<br />
                    Dighori, Nagpur,<br />
                    Maharashtra 440034
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="border-b border-white/5">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-4 text-xs text-white/35 sm:px-6 sm:flex-row sm:items-center sm:justify-between sm:text-sm lg:px-8">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} SAAM Infrastructure. All rights reserved.</p>
          <p className="text-center sm:text-right">Designed and Developed by <span className="font-semibold text-white/50">SAAM Infrastructure</span></p>
        </div>
      </div>

      {/* Gold bottom accent */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#C9A227] via-[#E0C35B] to-[#C9A227]" />
    </footer>
  );
}

export default Footer;
