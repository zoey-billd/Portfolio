import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  Boxes,
  Code2,
  Cpu,
  GitBranch,
  Mail,
  Play,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Workflow,
} from "lucide-react";
import { profile, skills, strengths } from "./content.js";
import { projects } from "./project-data.js";

const navItems = [
  { label: "Intro", href: "#intro" },
  { label: "Projects", href: "#projects" },
  { label: "Strengths", href: "#strengths" },
  { label: "Contact", href: "#contact" },
];

const iconMap = [Boxes, Workflow, SlidersHorizontal, ShieldCheck];
const projectScrollKey = "zoeyPortfolioProjectScrollY";

function getProjectSlugFromHash() {
  const match = window.location.hash.match(/^#\/projects\/([^?#/]+)/);
  return match ? decodeURIComponent(match[1]) : "";
}

function rememberProjectScrollPosition() {
  sessionStorage.setItem(projectScrollKey, String(window.scrollY));
}

const projectMediaBlueprints = [
  {
    label: "UE5 PCG CASE",
    hero: "FINAL SHOT / UE5 VIEWPORT",
    flow: "terrain mask -> spline rules -> scattering -> render",
    slots: ["PCG Graph", "Mask Debug", "Material Pass", "Tool Panel"],
  },
  {
    label: "UE5 ENVIRONMENT",
    hero: "CINEMATIC STILL / SEQUENCE",
    flow: "blockout -> material -> PCG layers -> lighting",
    slots: ["Viewport", "Spline Setup", "Shader Pass", "Optimization"],
  },
  {
    label: "PROTOTYPE BREAKDOWN",
    hero: "SYSTEM RESULT / TEST SCENE",
    flow: "input shape -> rule graph -> modules -> validation",
    slots: ["Blueprint", "PCG Nodes", "Parameters", "Iteration"],
  },
  {
    label: "HOUDINI HDA",
    hero: "TOOL DEMO / UE BRIDGE",
    flow: "HDA controls -> export -> UE import -> artist use",
    slots: ["Node Graph", "HDA UI", "JSON Protocol", "UE Utility"],
  },
];

function App() {
  const [projectSlug, setProjectSlug] = useState(getProjectSlugFromHash);
  const wasProjectOpen = useRef(Boolean(projectSlug));

  useEffect(() => {
    const handleHashChange = () => setProjectSlug(getProjectSlugFromHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (projectSlug) {
      wasProjectOpen.current = true;
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    if (!wasProjectOpen.current || window.location.hash !== "#projects") {
      return;
    }

    wasProjectOpen.current = false;

    const storedScrollY = Number(sessionStorage.getItem(projectScrollKey));

    if (!Number.isFinite(storedScrollY)) {
      return;
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: storedScrollY, left: 0, behavior: "auto" });
      });
    });
  }, [projectSlug]);

  const activeProject = useMemo(
    () => projects.find((project) => project.slug === projectSlug),
    [projectSlug],
  );

  const page = activeProject ? (
    <ProjectArticlePage project={activeProject} />
  ) : (
    <main className="site-shell">
      <NavBar />
      <Hero />
      <Intro />
      <Projects />
      <Strengths />
      <Contact />
    </main>
  );

  return (
    <>
      <CinnamorollEffects />
      {page}
    </>
  );
}

function CinnamorollEffects() {
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const [snowflakes, setSnowflakes] = useState([]);
  const snowflakeId = useRef(0);

  useEffect(() => {
    const handlePointerMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY, visible: true });
    };

    const handlePointerLeave = () => {
      setCursor((current) => ({ ...current, visible: false }));
    };

    const handlePointerDown = (event) => {
      if (event.pointerType === "touch") {
        return;
      }

      const burst = Array.from({ length: 5 }, (_, index) => ({
        id: snowflakeId.current++,
        x: event.clientX,
        y: event.clientY,
        drift: `${(index - 2) * 13 + (index % 2 ? 4 : -4)}px`,
        delay: `${index * 35}ms`,
        size: `${12 + (index % 2) * 4}px`,
      }));

      setSnowflakes((current) => [...current.slice(-20), ...burst]);

      window.setTimeout(() => {
        const ids = new Set(burst.map((flake) => flake.id));
        setSnowflakes((current) => current.filter((flake) => !ids.has(flake.id)));
      }, 1050);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("blur", handlePointerLeave);
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("blur", handlePointerLeave);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, []);

  return (
    <>
      <div className="cinnamon-watermark" aria-hidden="true" />
      <div
        className={`cinnamon-cursor${cursor.visible ? " is-visible" : ""}`}
        style={{
          left: `${cursor.x}px`,
          top: `${cursor.y}px`,
        }}
        aria-hidden="true"
      />
      <div className="snowflake-layer" aria-hidden="true">
        {snowflakes.map((flake) => (
          <span
            className="snowflake-burst"
            key={flake.id}
            style={{
              left: `${flake.x}px`,
              top: `${flake.y}px`,
              "--snow-drift": flake.drift,
              "--snow-delay": flake.delay,
              "--snow-size": flake.size,
            }}
          >
            ❄
          </span>
        ))}
      </div>
    </>
  );
}

function ProjectMediaFrame({ project, index }) {
  const media = project.visual || projectMediaBlueprints[index % projectMediaBlueprints.length];

  return (
    <div
      className={`project-media-wrap${project.image ? " has-preview-image" : ""}`}
      aria-label={`${project.title} media layout`}
    >
      <div className="media-frame-header">
        <span>{media.label}</span>
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      {project.image ? (
        <img className="project-preview-image" src={project.image} alt={`${project.title} preview`} />
      ) : (
        <div className="media-stage">
          <span>{media.hero}</span>
          <small>{media.flow}</small>
        </div>
      )}
      <div className="media-strip">
        {media.slots.map((slot) => (
          <span key={slot}>{slot}</span>
        ))}
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <header className="nav-bar">
      <a className="brand-mark" href="#top" aria-label="Zoey Xie home">
        <span className="brand-initials">ZX</span>
        <img
          className="brand-cinnamon"
          src="/assets/cinnamoroll/cinnamoroll-hat-scarf.png"
          alt=""
        />
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="nav-contact" href={`mailto:${profile.email}`}>
        <Mail size={17} />
        Contact
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden="true">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/hero-loop.mp4" type="video/mp4" />
        </video>
      </div>
      <aside className="hero-paper-scrap" aria-label="Portfolio links">
        <p className="scrap-kicker">Portfolio Links</p>
        <div className="scrap-links">
          <a className="scrap-link" href={profile.bilibili} target="_blank" rel="noreferrer">
            <span>Bilibili 作品集</span>
            <ArrowUpRight size={15} />
          </a>
          <a className="scrap-link" href={profile.resumePdf} target="_blank" rel="noreferrer">
            <span>Resume_Zoey_UE_TA.pdf</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
        <p className="scrap-note">portfolio repo / resume in progress</p>
      </aside>
      <div className="hero-inner">
        <p className="eyebrow">Technical Art Portfolio 2026</p>
        <h1>
          Procedural worlds,
          <br />
          readable tools.
        </h1>
        <p className="hero-copy">
          {profile.name} {profile.englishName} - 聚焦 UE5 PCG、Houdini HDA 与编辑器工具的技术美术作品集。
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#projects">
            <Play size={18} fill="currentColor" />
            View Selected Work
          </a>
        </div>
      </div>
      <aside className="hero-ascii" aria-hidden="true">
        <div className="ascii-meta">
          <span>GENERATIVE AESTHETICS</span>
          <span>PART 01</span>
        </div>
        <div className="ascii-title">( 生成美学 )</div>
        <pre>{`+----------------------+
| pcg.graph // mask    |
| spline  -> scatter   |
| height  -> density   |
| @seed   -> variation |
+----------------------+
   . . . : : : + + # #
   rule / art / tool`}</pre>
      </aside>
    </section>
  );
}

function Intro() {
  return (
    <section className="section intro-section" id="intro">
      <div className="section-inner intro-grid">
        <div className="intro-copy">
          <p className="eyebrow">About</p>
          <h2>把美术目标拆成可以验证、迭代、复用的工具流程。</h2>
          <p>{profile.summary}</p>
          <div className="contact-strip">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.bilibili} target="_blank" rel="noreferrer">
              Bilibili
            </a>
            <a href={profile.githubPages} target="_blank" rel="noreferrer">
              GitHub Pages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">Selected Projects</p>
          <div>
            <h2>Houdini 项目将按“技术栈摘要 - 工具流程 - 交付价值”展开。</h2>
            <pre className="section-ascii" aria-hidden="true">
{`[input]--[mask]--[hda controls]--[ue handoff]
    source     rules          parameters       readable output`}
            </pre>
          </div>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-card-${index + 1}`} key={project.title}>
              <a
                className="project-card-link"
                href={`#/projects/${project.slug}`}
                onClick={rememberProjectScrollPosition}
              >
                <ProjectMediaFrame project={project} index={index} />
                <div className="project-content">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <h4>{project.subtitle}</h4>
                  <p>{project.scope}</p>
                  <ul className="tech-list" aria-label={`${project.title} technical points`}>
                    {project.tech.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="project-impact">
                    <Sparkles size={17} />
                    <span>{project.impact}</span>
                  </div>
                  <span className="read-project-link">
                    Read project document
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectArticlePage({ project }) {
  return (
    <main className="site-shell article-shell">
      <NavBar />
      <article className="article-wrap">
        <a className="back-link" href="#projects">
          <ArrowUpRight size={16} />
          Back to project index
        </a>
        <header className="article-hero">
          <div className="article-title-block">
            <p className="eyebrow">{project.category}</p>
            <h1>{project.title}</h1>
            <h2>{project.subtitle}</h2>
            <p>{project.article.intro}</p>
          </div>
          <ProjectMediaFrame project={project} index={projects.indexOf(project)} />
        </header>

        <div className="article-body">
          <aside className="article-summary-panel">
            <p className="project-eyebrow">{project.eyebrow}</p>
            <h3>Tech Stack</h3>
            <ul className="tech-list article-tech-list" aria-label={`${project.title} tech stack`}>
              {project.tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="article-impact">
              <Sparkles size={17} />
              <span>{project.impact}</span>
            </div>
          </aside>

          <div className="article-sections">
            {project.article.sections.map((section) => (
              <section className="article-section" key={section.heading}>
                <h3>{section.heading}</h3>
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}

            <section className="article-section file-section">
              <h3>交付内容</h3>
              <ul>
                {project.deliverables.map((item) => (
                  <li key={item}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            <a className="article-bottom-back" href="#projects">
              Back to project index
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}

function Strengths() {
  return (
    <section className="section strengths-section" id="strengths">
      <div className="section-inner">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Strengths</p>
          <h2>面向 PCG 与工具向 TA 的能力组合。</h2>
        </div>
        <div className="strength-grid">
          {strengths.map((item, index) => {
            const Icon = iconMap[index] || Cpu;
            return (
              <article className="strength-card" key={item.title}>
                <Icon size={26} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
        <div className="skill-ribbon" aria-label="Skill stack">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <p className="eyebrow">Contact</p>
        <h2>Looking for a PCG / Tools TA role.</h2>
        <p>
          希望把程序化环境、Houdini 工具和 UE 编辑器管线继续打磨成能被美术团队稳定使用的生产工具。
        </p>
        <div className="contact-actions">
          <a className="primary-action" href={`mailto:${profile.email}`}>
            <Mail size={18} />
            {profile.email}
          </a>
          <a className="secondary-action" href={profile.bilibili} target="_blank" rel="noreferrer">
            Watch Works
            <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="closing-line">
          <Code2 size={18} />
          <span>UE5.6 PCG · Houdini HDA · Python Editor Tools</span>
          <GitBranch size={18} />
        </div>
      </div>
    </section>
  );
}

export default App;
