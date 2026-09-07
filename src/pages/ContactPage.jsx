import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, Send, ArrowUpRight, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email address";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9+\-\s()]{8,15}$/.test(formData.phone)) newErrors.phone = "Please enter a valid phone number";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === "Escape") setSubmitStatus(null); };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 98343 99815", href: "tel:+919834399815", color: "bg-emerald-50 border-emerald-200 text-emerald-600" },
    { icon: Mail, label: "Email", value: "saaminfra2014@gmail.com", href: "mailto:saaminfra2014@gmail.com", color: "bg-blue-50 border-blue-200 text-blue-600" },
    { icon: Clock, label: "Business Hours", value: "Mon - Sat: 9:00 AM - 7:00 PM", href: null, color: "bg-amber-50 border-amber-200 text-amber-600" },
    { icon: MapPin, label: "Location", value: "Nagpur, Maharashtra, India", href: "https://maps.google.com/?q=Nagpur,+Maharashtra,+India", color: "bg-purple-50 border-purple-200 text-purple-600" },
  ];

  const fields = [
    { name: "name", label: "Full Name", type: "text", placeholder: "John Doe", icon: "user", required: true },
    { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com", icon: "mail", required: true },
    { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210", icon: "phone", required: true },
    { name: "subject", label: "Subject", type: "text", placeholder: "How can we help you?", icon: "tag", required: false },
  ];

  return (
    <main className="min-h-screen bg-[#F8F5ED] text-[#11130F]">
      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B2A4A] via-[#253D5E] to-[#1B2A4A]">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#C9A227]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 text-center sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#C9A227]" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">Get in Touch</p>
              <span className="h-px w-8 bg-[#C9A227]" />
            </div>
            <h1 className="font-heading mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Let's talk about<span className="text-[#C9A227]"> your project.</span>
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-[15px] leading-7 text-white/60 sm:text-base sm:leading-8">
              Have a construction or infrastructure project in Nagpur or anywhere in Maharashtra? We are here to listen and help you plan the next steps.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {contactInfo.slice(0, 2).map((item) => {
                const Icon = item.icon;
                const Tag = item.href ? "a" : "div";
                const hrefProps = item.href ? { href: item.href } : {};
                return (
                  <Tag key={item.label} {...hrefProps} className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 backdrop-blur-sm transition hover:bg-white/10">
                    <Icon size={16} className="text-[#C9A227]" />
                    <span className="text-sm text-white/80">{item.value}</span>
                  </Tag>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============== CONTACT INFO CARDS ============== */}
      <section className="relative z-10 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl -mt-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const Tag = item.href ? "a" : "div";
              const hrefProps = item.href ? { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined, rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined } : {};
              return (
                <Tag key={item.label} {...hrefProps} className="group relative overflow-hidden rounded-2xl border border-[#E6E2D7] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${item.color}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-3 text-xs font-bold uppercase tracking-wider text-[#B0ADA2]">{item.label}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#11130F]">{item.value}</p>
                </Tag>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== FORM + MAP ============== */}
      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            {/* Form */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#C9A227]" />
                <p className="text-xs font-bold uppercase tracking-widest text-[#A98216]">Send Us a Message</p>
              </div>
              <h2 className="font-heading mt-4 text-3xl font-bold tracking-tight text-[#11130F] sm:text-4xl">
                We'd love to hear<span className="block text-[#C9A227]">from you.</span>
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-[#6B7280]">Fill out the form and our team will get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                {/* Text fields grid */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {fields.map((field) => (
                    <div key={field.name} className={`${field.name === 'subject' ? 'sm:col-span-2' : ''}`}>
                      <label htmlFor={field.name} className={`mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${errors[field.name] ? 'text-red-500' : focusedField === field.name ? 'text-[#A98216]' : 'text-[#B0ADA2]'}`}>
                        {field.label}
                        {field.required && <span className="text-[#C9A227]">*</span>}
                      </label>
                      <div className="relative">
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField(null)}
                          placeholder={field.placeholder}
                          className={`w-full rounded-xl border bg-white px-4 py-3 text-base text-[#11130F] placeholder-[#B0ADA2] transition-all duration-300 focus:outline-none sm:text-sm ${
                            errors[field.name]
                              ? "border-red-300 ring-2 ring-red-100"
                              : focusedField === field.name
                              ? "border-[#C9A227] ring-2 ring-[#C9A227]/10"
                              : "border-[#E6E2D7] hover:border-[#C9A227]/40"
                          }`}
                        />
                        {errors[field.name] && (
                          <div className="mt-1.5 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-red-500">
                            <AlertCircle size={11} /> {errors[field.name]}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={`mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${errors.message ? 'text-red-500' : focusedField === 'message' ? 'text-[#A98216]' : 'text-[#B0ADA2]'}`}>
                    Message <span className="text-[#C9A227]">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell us about your project requirements..."
                      className={`w-full resize-none rounded-xl border bg-white px-4 py-3 text-base text-[#11130F] placeholder-[#B0ADA2] transition-all duration-300 focus:outline-none sm:text-sm ${
                        errors.message
                          ? "border-red-300 ring-2 ring-red-100"
                          : focusedField === 'message'
                          ? "border-[#C9A227] ring-2 ring-[#C9A227]/10"
                          : "border-[#E6E2D7] hover:border-[#C9A227]/40"
                      }`}
                    />
                    {errors.message && (
                      <div className="mt-1.5 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-red-500">
                        <AlertCircle size={11} /> {errors.message}
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <button type="submit" disabled={isSubmitting} className="group inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#C9A227] px-6 py-3.5 text-sm font-bold text-[#11130F] shadow-lg transition-all duration-300 active:scale-[0.98] hover:-translate-y-0.5 hover:bg-[#E0C35B] hover:shadow-xl disabled:opacity-60 disabled:hover:translate-y-0">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {isSubmitting ? (
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#11130F]/20 border-t-[#11130F]" />
                  ) : (
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </button>

                {/* Status messages */}
                {submitStatus === "success" && (
                  <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
                    <CheckCircle2 size={18} className="text-emerald-500" />
                    <p><span className="font-bold">Message sent successfully!</span> We will get back to you within 24 hours.</p>
                  </div>
                )}
              </form>
            </div>

            {/* Map + Office */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-[#C9A227]" />
                  <p className="text-xs font-bold uppercase tracking-widest text-[#A98216]">Our Location</p>
                </div>
                <h2 className="font-heading mt-4 text-2xl font-bold tracking-tight text-[#11130F] sm:text-3xl">
                  Visit our office.
                </h2>
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-2xl border border-[#E6E2D7] bg-white shadow-sm">
                <iframe
                  title="SAAM Infrastructure Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119516.15840881498!2d79.00994365!3d21.1458004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a7b8b8b1%3A0x1c4c3e4b8e6c9f0a!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709192124243"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block"
                />
              </div>

              {/* Office Address Card */}
              <div className="overflow-hidden rounded-2xl border border-[#C9A227]/30 bg-gradient-to-br from-white to-[#F8F5ED] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C9A227]/10 text-[#A98216]">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#11130F]">SAAM Infrastructure Pvt. Ltd.</h3>
                    <p className="mt-2 text-[15px] leading-7 text-[#6B7280]">
                      Plot No. 58, Near Bharat Petrol Pump,<br />
                      Wardha Road, Nandanvan,<br />
                      Nagpur - 440024,<br />
                      Maharashtra, India
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a href="tel:+919834399815" className="inline-flex items-center gap-2 rounded-full bg-[#C9A227]/10 px-4 py-2 text-xs font-bold text-[#A98216] transition hover:bg-[#C9A227] hover:text-[#11130F]">
                        <Phone size={13} /> Call Us
                      </a>
                      <a href="mailto:saaminfra2014@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-[#C9A227]/10 px-4 py-2 text-xs font-bold text-[#A98216] transition hover:bg-[#C9A227] hover:text-[#11130F]">
                        <Mail size={13} /> Email Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CTA BANNER ============== */}
      <section className="px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#1B2A4A] to-[#253D5E] p-8 text-center sm:p-12 lg:p-16">
            <div className="flex items-center justify-center gap-3">
              <Sparkles size={14} className="text-[#C9A227]" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">Ready to Start?</p>
            </div>
            <h2 className="font-heading mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              Let's build something<span className="text-[#C9A227]"> great together.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-white/60">
              Whether you have a specific project in mind or need expert guidance, our team is ready to help.
            </p>
            <div className="mt-8">
              <a href="tel:+919834399815" className="group inline-flex items-center gap-2 rounded-full bg-[#C9A227] px-7 py-3 text-sm font-bold text-[#11130F] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E0C35B] hover:shadow-xl">
                <Phone size={16} /> Talk to Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
