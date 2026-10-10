import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Container from "../../components/UI/Container";
import Button from "../../components/Button/Button";
import profilePhoto from "../../assets/images/profile-photo.jpeg";

import { motion } from "framer-motion";

// Edit this list to match the skills you want to show
const skills = [
  { name: "React", note: "UI library", short: "Re" },
  { name: "TypeScript", note: "Type safety", short: "TS" },
  { name: "JavaScript", note: "Language", short: "JS" },
  { name: "Redux", note: "State management", short: "Rx" },
  { name: "Tailwind CSS", note: "Styling", short: "Tw" },
  { name: "Framer Motion", note: "Animation", short: "Fm" },
  { name: "REST APIs", note: "Data layer", short: "Ap" },
  { name: "HTML5", note: "Semantics", short: "H5" },
  { name: "CSS3", note: "Layout", short: "C3" },
  { name: "Git", note: "Version control", short: "Gt" },
];

/* ---------- Animation variants ---------- */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

// Each word slides up from behind an invisible mask
const wordUp = {
  hidden: { y: "110%" },
  show: {
    y: 0,
    transition: { duration: 0.85, ease: "easeOut" as const },
  },
};

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

/* ---------- Headline line (word-by-word reveal) ---------- */
function HeadlineLine({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) {
  return (
    <span className={`block ${className}`}>
      {words.map((word, i) => (
        <span
          key={word + i}
          className="inline-block overflow-hidden pb-[0.14em] align-bottom"
        >
          <motion.span variants={wordUp} className="inline-block">
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden pt-28"
    >
      {/* Skills strip: slow scroll, pauses on hover, honors reduced motion */}
      <style>{`
        @keyframes hero-skills-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .hero-skills-track { animation: hero-skills-scroll 45s linear infinite; }
        .hero-skills:hover .hero-skills-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .hero-skills { overflow-x: auto; }
          .hero-skills-track { animation: none; }
        }
      `}</style>

      {/* Background: two quiet glows */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-violet-200/70 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-48 bottom-24 h-96 w-96 rounded-full bg-fuchsia-100/80 blur-3xl"
      />

      <div className="relative flex flex-1 items-center">
        <Container>
          <div className="grid items-center gap-16 py-14 lg:grid-cols-2 lg:gap-20 lg:py-16">
            {/* Content */}
            <motion.div
              className="min-w-0"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              {/* Availability pill */}
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <motion.span
                    className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
                    animate={{ scale: [1, 2.6], opacity: [0.7, 0] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm text-zinc-600">
                  Available for freelance projects
                </span>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mb-5 mt-9 text-sm font-medium uppercase tracking-[0.2em] text-violet-600"
              >
                Frontend Developer
              </motion.p>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.06] tracking-[-0.04em] text-zinc-900 sm:text-6xl">
                <HeadlineLine words={["Building", "scalable"]} />
                <HeadlineLine
                  words={["digital", "experiences."]}
                  className="text-zinc-500"
                />
              </h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8"
              >
                I build responsive, performant, and maintainable web
                applications using React, TypeScript, and modern frontend
                technologies.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap items-center gap-3"
              >
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Button onClick={() => scrollTo("projects")}>
                    View Projects
                    <ArrowDownRight size={17} />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    variant="ghost"
                    onClick={() => scrollTo("contact")}
                  >
                    Let's Work Together
                    <ArrowUpRight size={17} />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Skills: horizontal scroll, right under the buttons */}
              <motion.div variants={fadeUp} className="mt-12">
                <p className="mb-4 text-sm font-medium text-zinc-500">
                  Skills and tools I work with
                </p>

                <div
                  className="hero-skills overflow-hidden py-2"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
                    maskImage:
                      "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
                  }}
                >
                  <div className="hero-skills-track flex w-max">
                    {[0, 1].map((copy) => (
                      <ul
                        key={copy}
                        aria-hidden={copy === 1}
                        className="flex shrink-0 gap-3 pr-3"
                      >
                        {skills.map((skill) => (
                          <li
                            key={skill.name}
                            className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-[0_6px_20px_-12px_rgba(20,22,43,0.25)] transition-colors duration-200 hover:border-violet-300"
                          >
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-sm font-semibold text-violet-700 ring-1 ring-violet-100">
                              {skill.short}
                            </span>
                            <span className="whitespace-nowrap">
                              <span className="block text-sm font-semibold text-zinc-900">
                                {skill.name}
                              </span>
                              <span className="block text-xs text-zinc-500">
                                {skill.note}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="relative isolate mx-auto w-full max-w-xl lg:ml-auto lg:mr-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            >
              {/* Offset frame behind the photo */}
              <motion.div
                aria-hidden
                className="absolute inset-0 -z-10 rounded-[2rem] border border-violet-300/70 bg-violet-100/70"
                initial={{ x: 0, y: 0 }}
                animate={{ x: 18, y: 18 }}
                transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
              />

              {/* Photo */}
              <motion.div
                className="relative overflow-hidden rounded-[2rem] bg-zinc-100 shadow-[0_40px_80px_-30px_rgba(76,29,149,0.4)] ring-1 ring-black/10"
                initial={{ clipPath: "inset(100% 0% 0% 0% round 2rem)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0% round 2rem)" }}
                transition={{ duration: 1.1, delay: 0.3, ease: "easeOut" }}
              >
                <motion.img
                  src={profilePhoto}
                  alt="Rashmi Pandey"
                  className="aspect-[4/5] w-full object-cover object-top"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.6, delay: 0.3, ease: "easeOut" }}
                  whileHover={{ scale: 1.03 }}
                />

                {/* Name bar */}
                <motion.div
                  className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-lg backdrop-blur-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1.2, ease: "easeOut" }}
                >
                  <div>
                    <p className="text-base font-semibold text-zinc-900">
                      Rashmi Pandey
                    </p>
                    <p className="text-sm text-zinc-600">
                      React · TypeScript · Tailwind
                    </p>
                  </div>

                  <motion.button
                    type="button"
                    aria-label="Let's work together"
                    onClick={() => scrollTo("contact")}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white transition-colors hover:bg-violet-600"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowUpRight size={18} />
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Hero;