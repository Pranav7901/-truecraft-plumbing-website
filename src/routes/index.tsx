import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Wrench,
  ShowerHead,
  Zap,
  PlugZap,
  BadgeCheck,
  MessagesSquare,
  HeartHandshake,
  CalendarCheck,
  ClipboardList,
  FileText,
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import logoAsset from "@/assets/truecraft-logo.png.asset.json";
import heroPhoto from "@/assets/hero-technician.jpg";
import aboutPhoto from "@/assets/about-technician.jpg";
import galleryPlumbing1 from "@/assets/gallery-plumbing-1.jpg";
import galleryElectrical1 from "@/assets/gallery-electrical-1.jpg";
import galleryPlumbing2 from "@/assets/gallery-plumbing-2.jpg";
import galleryElectrical2 from "@/assets/gallery-electrical-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "TrueCraft Plumbing & Electrical Services | Reliable Home Services",
      },
      {
        name: "description",
        content:
          "From plumbing repairs to electrical installations, TrueCraft Plumbing & Electrical Services is here to help with your home service needs. Request a free quote.",
      },
      {
        property: "og:title",
        content: "TrueCraft Plumbing & Electrical Services | Reliable Home Services",
      },
      {
        property: "og:description",
        content:
          "From plumbing repairs to electrical installations, TrueCraft is here to help with your home service needs. Request a free quote.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Plumbing", href: "#services" },
  { label: "Electrical", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Wrench,
    title: "Plumbing Repairs",
    description:
      "Leaks, drips, clogs, and worn-out fixtures — we diagnose the problem and get your plumbing back in working order.",
  },
  {
    icon: ShowerHead,
    title: "Plumbing Installation",
    description:
      "New fixtures, water heaters, and supply lines installed with care, so everything works the way it should.",
  },
  {
    icon: Zap,
    title: "Electrical Repairs",
    description:
      "Faulty outlets, switches, breakers, and wiring issues handled safely and explained in plain language.",
  },
  {
    icon: PlugZap,
    title: "Electrical Installation & Upgrades",
    description:
      "Lighting, panels, outlets, and upgrades for older homes — planned around how you actually use your space.",
  },
];

const VALUES = [
  {
    icon: BadgeCheck,
    title: "Quality-Focused Work",
    description: "Careful workmanship on every job, from small repairs to full installations.",
  },
  {
    icon: MessagesSquare,
    title: "Clear Communication",
    description: "You'll always know what we're doing, why, and what it costs before we start.",
  },
  {
    icon: HeartHandshake,
    title: "Respect for Your Home",
    description: "We treat your space like our own — tidy work areas and no mess left behind.",
  },
  {
    icon: CalendarCheck,
    title: "Convenient Service Inquiries",
    description: "Reach out on your schedule and we'll get back to you promptly to discuss your project.",
  },
];

const STEPS = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Tell Us What You Need",
    description: "Share a few details about your plumbing or electrical project.",
  },
  {
    icon: MessagesSquare,
    number: "02",
    title: "Discuss Your Project",
    description: "We talk through your options and answer your questions.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Request a Quote",
    description: "Get a clear quote so you can decide with confidence.",
  },
];

const GALLERY = [
  { src: galleryPlumbing1, alt: "Tightening copper pipe fittings under a sink", label: "Under-sink pipe repair" },
  { src: galleryElectrical1, alt: "Electrician working on a home electrical panel", label: "Electrical panel work" },
  { src: galleryPlumbing2, alt: "Installing a modern bathroom faucet", label: "Faucet installation" },
  { src: galleryElectrical2, alt: "Electrician installing a ceiling light fixture", label: "Light fixture installation" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="TrueCraft Plumbing & Electrical Services logo"
            className="h-14 w-14 rounded-lg object-contain"
            width={56}
            height={56}
          />
          <span className="hidden text-sm font-extrabold leading-tight text-brand-navy sm:block">
            TrueCraft
            <span className="block text-xs font-semibold text-muted-foreground">
              Plumbing &amp; Electrical Services
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-brand-navy transition-colors hover:text-brand-red"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-md bg-brand-red px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-red-dark sm:inline-flex"
          >
            Get a Free Quote
          </a>
          <button
            type="button"
            className="inline-flex rounded-md p-2 text-brand-navy transition-colors hover:bg-accent md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-brand-red px-3 py-2.5 text-center text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-red-dark"
            >
              Get a Free Quote
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-light">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <span className="inline-flex items-center rounded-full border border-brand-navy/15 bg-background px-4 py-1.5 text-xs font-bold tracking-widest text-brand-navy">
            PLUMBING &amp; ELECTRICAL SERVICES
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
            Reliable Home Services.{" "}
            <span className="text-brand-red highlight-yellow inline-block">Done Right.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            From plumbing repairs to electrical installations, TrueCraft Plumbing &amp; Electrical
            Services is here to help with your home service needs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand-red px-7 py-3.5 text-sm font-bold tracking-wide text-primary-foreground shadow-lg shadow-brand-red/25 transition-all hover:bg-brand-red-dark hover:shadow-brand-red/35"
            >
              REQUEST A FREE QUOTE
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-md border-2 border-brand-navy px-7 py-3.5 text-sm font-bold tracking-wide text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
            >
              EXPLORE OUR SERVICES
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {["Quality-Focused Work", "Professional Service", "Clear Communication"].map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm font-semibold text-brand-navy">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow ring-2 ring-brand-yellow/30" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-2xl bg-brand-yellow/40 lg:block" />
          <div className="relative overflow-hidden rounded-2xl border-4 border-brand-navy/10 shadow-2xl shadow-brand-navy/20">
            <img
              src={heroPhoto}
              alt="TrueCraft technician repairing a sink in a customer's kitchen"
              width={1024}
              height={1200}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute bottom-6 left-6 hidden items-center gap-3 rounded-xl bg-brand-navy px-5 py-4 text-white shadow-xl lg:flex">
            <Phone className="h-5 w-5 text-brand-yellow" />
            <span className="text-sm font-bold leading-snug">
              We're ready to help
              <span className="block text-xs font-medium text-white/70">with your home service needs</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-widest text-brand-red">OUR SERVICES</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Complete Home Service <span className="highlight-yellow inline-block">Solutions</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether it's a leaky faucet or a full electrical upgrade, we're set up to help with the
            work your home needs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-navy/20 hover:shadow-xl hover:shadow-brand-navy/10"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-brand-yellow opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="inline-flex h-13 w-13 items-center justify-center rounded-lg bg-brand-light p-3 text-brand-navy transition-colors group-hover:bg-brand-navy group-hover:text-brand-yellow">
                <service.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand-navy">{service.title}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-red transition-colors hover:text-brand-red-dark"
              >
                Request a quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section id="why" className="scroll-mt-24 bg-brand-navy py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-widest text-brand-yellow">WHY CHOOSE TRUECRAFT?</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Service You Can{" "}
            <span className="text-brand-yellow">Feel Good About</span>
          </h2>
          <p className="mt-4 text-white/70">
            Home service work is personal. Here's how we approach every project, big or small.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <div key={value.title} className="rounded-xl bg-white/5 p-6 transition-colors hover:bg-white/10">
              <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">
                <value.icon className="h-6 w-6" />
                <span className="absolute -right-1.5 -top-1.5 h-3 w-3 rounded-full bg-brand-yellow" />
              </span>
              <h3 className="mt-5 text-base font-bold">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -right-4 -bottom-4 hidden h-full w-full rounded-2xl bg-brand-yellow/40 lg:block" />
          <div className="relative overflow-hidden rounded-2xl border-4 border-brand-navy/10 shadow-xl">
            <img
              src={aboutPhoto}
              alt="TrueCraft technician reviewing a water heater installation"
              width={1024}
              height={912}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs font-bold tracking-widest text-brand-red">ABOUT US</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Helping Keep Your Home <span className="highlight-yellow inline-block">Running Smoothly</span>
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            TrueCraft Plumbing &amp; Electrical Services is focused on helping homeowners with their
            plumbing and electrical service needs. Whether you're planning an upgrade or looking for
            help with a repair, get in touch to discuss your project and explore your options.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-red px-7 py-3.5 text-sm font-bold tracking-wide text-primary-foreground shadow-lg shadow-brand-red/25 transition-all hover:bg-brand-red-dark"
          >
            Contact Our Team
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-24 bg-brand-light py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-widest text-brand-red">HOW IT WORKS</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Getting Started Is Simple
          </h2>
        </div>

        <div className="relative mt-14 grid gap-10 sm:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-8 hidden h-0.5 bg-brand-yellow sm:block" aria-hidden="true" />
          {STEPS.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="relative z-10 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full border-4 border-brand-light bg-background text-brand-navy shadow-md">
                <step.icon className="h-7 w-7" />
              </div>
              <span className="mt-4 block text-3xl font-extrabold text-brand-red">{step.number}</span>
              <h3 className="mt-2 text-lg font-bold text-brand-navy">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-widest text-brand-red">PROJECT GALLERY</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Professional Work. <span className="highlight-yellow inline-block">Practical Solutions.</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Illustrative photos of typical plumbing and electrical work.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {GALLERY.map((item) => (
            <figure
              key={item.label}
              className="group relative overflow-hidden rounded-xl border border-border shadow-sm"
            >
              <img
                src={item.src}
                alt={item.alt}
                width={1200}
                height={800}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/90 to-transparent px-5 pb-4 pt-12 text-sm font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    service?: string;
    details?: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors: NonNullable<typeof errors> = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.service) nextErrors.service = "Please select the service you need.";
    if (!values.details.trim()) nextErrors.details = "Please tell us a little about your project.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-card p-10 text-center shadow-lg">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow/20 text-brand-navy">
          <BadgeCheck className="h-8 w-8" />
        </span>
        <h3 className="mt-5 text-2xl font-bold text-brand-navy">Thanks, {values.name.split(" ")[0]}!</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Your request has been noted. This form isn't connected to a backend or form service yet, so
          your details haven't been sent anywhere — contact us directly in the meantime and we'll get
          your project moving.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setValues({ name: "", email: "", phone: "", service: "", details: "" });
          }}
          className="mt-6 text-sm font-bold text-brand-red transition-colors hover:text-brand-red-dark"
        >
          Send another request
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-brand-red focus:outline-none";

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-xl border border-border bg-card p-7 shadow-lg sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-brand-navy">
            Name <span className="text-brand-red">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your full name"
            className={inputClass}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1.5 text-xs font-medium text-brand-red">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-brand-navy">
            Email <span className="text-brand-red">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            className={inputClass}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1.5 text-xs font-medium text-brand-red">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-brand-navy">
            Phone <span className="text-xs font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="Your phone number"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-brand-navy">
            Service needed <span className="text-brand-red">*</span>
          </label>
          <select
            id="service"
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            className={inputClass}
            aria-invalid={!!errors.service}
          >
            <option value="">Select a service…</option>
            <option value="plumbing-repair">Plumbing Repair</option>
            <option value="plumbing-installation">Plumbing Installation</option>
            <option value="electrical-repair">Electrical Repair</option>
            <option value="electrical-installation">Electrical Installation &amp; Upgrades</option>
            <option value="other">Something else</option>
          </select>
          {errors.service && <p className="mt-1.5 text-xs font-medium text-brand-red">{errors.service}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="details" className="mb-1.5 block text-sm font-semibold text-brand-navy">
            Project details <span className="text-brand-red">*</span>
          </label>
          <textarea
            id="details"
            rows={5}
            value={values.details}
            onChange={(e) => update("details", e.target.value)}
            placeholder="Tell us what's going on and what you'd like done…"
            className={inputClass}
            aria-invalid={!!errors.details}
          />
          {errors.details && <p className="mt-1.5 text-xs font-medium text-brand-red">{errors.details}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-md bg-brand-red px-7 py-4 text-sm font-bold tracking-wide text-primary-foreground shadow-lg shadow-brand-red/25 transition-all hover:bg-brand-red-dark sm:w-auto"
      >
        REQUEST A QUOTE
      </button>
    </form>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-brand-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-bold tracking-widest text-brand-red">CONTACT US</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
              Let's Get Your <span className="highlight-yellow inline-block">Project Started</span>
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Have a plumbing or electrical project in mind? Reach out to discuss your needs and
              request a quote.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 text-sm font-semibold text-brand-navy">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-brand-yellow">
                  <Phone className="h-5 w-5" />
                </span>
                Phone — contact details to be added
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-brand-navy">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-brand-yellow">
                  <Mail className="h-5 w-5" />
                </span>
                Email — contact details to be added
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-brand-navy">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-brand-yellow">
                  <MapPin className="h-5 w-5" />
                </span>
                Service area — to be added
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={logoAsset.url}
                alt="TrueCraft Plumbing & Electrical Services logo"
                width={72}
                height={72}
                loading="lazy"
                className="h-18 w-18 rounded-lg bg-white/95 object-contain p-1"
              />
              <span className="text-base font-extrabold leading-snug">
                TrueCraft
                <span className="block text-xs font-medium text-white/70">
                  Plumbing &amp; Electrical Services
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Reliable home services, done right. Friendly, professional help with your plumbing and
              electrical projects.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-bold tracking-wide text-brand-yellow">COMPANY</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "#about" },
                { label: "How It Works", href: "#how" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/75 transition-colors hover:text-brand-yellow">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <h3 className="text-sm font-bold tracking-wide text-brand-yellow">SERVICES</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <a href="#services" className="text-sm text-white/75 transition-colors hover:text-brand-yellow">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-white/60">
          © {new Date().getFullYear()} TrueCraft Plumbing &amp; Electrical Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <About />
        <HowItWorks />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
