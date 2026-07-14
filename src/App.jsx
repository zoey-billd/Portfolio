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
import { profile, projects, skills, strengths } from "./content.js";

const navItems = [
  { label: "Intro", href: "#intro" },
  { label: "Projects", href: "#projects" },
  { label: "Strengths", href: "#strengths" },
  { label: "Contact", href: "#contact" },
];

const iconMap = [Boxes, Workflow, SlidersHorizontal, ShieldCheck];

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
  return (
    <main className="site-shell">
      <Hero />
      <Intro />
      <Projects />
      <Strengths />
      <Contact />
    </main>
  );
}

function ProjectMediaFrame({ project, index }) {
  const media = projectMediaBlueprints[index % projectMediaBlueprints.length];

  return (
    <div className="project-media-wrap" aria-label={`${project.title} media layout`}>
      <div className="media-frame-header">
        <span>{media.label}</span>
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="media-stage">
        <span>{media.hero}</span>
        <small>{media.flow}</small>
      </div>
      <div className="media-strip">
        {media.slots.map((slot) => (
          <span key={slot}>{slot}</span>
        ))}
      </div>
    </div>
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
      <header className="nav-bar">
        <a className="brand-mark" href="#top" aria-label="Zoey Xie home">
          <span>ZX</span>
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
          <a className="secondary-action" href={profile.bilibili} target="_blank" rel="noreferrer">
            Bilibili Portfolio
            <ArrowUpRight size={18} />
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
            <h2>作品将按“目标画面 - 技术方案 - 参数控制 - 最终效果”扩展。</h2>
            <pre className="section-ascii" aria-hidden="true">
{`[input]--[mask]--[spline]--[pcg graph]--[render]
    terrain    rule set      asset filter      final shot`}
            </pre>
          </div>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-card-${index + 1}`} key={project.title}>
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
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
