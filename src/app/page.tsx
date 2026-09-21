import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";
import { ExperienceSection } from "@/components/experience";
import { RevealManager } from "@/components/reveal-manager";
import { education, profile, skills, universityProject } from "@/data/profile";

const ExternalLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => <a className={className} href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a>;

export default function Home() {
  return <main id="main-content">
    <RevealManager />
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-main"><p className="eyebrow">Beirut, Lebanon · Available remotely</p><h1 id="hero-title"><span>Mohamed</span><span>Chokor.</span></h1><p className="hero-role">Software Engineer</p><p className="hero-specialty"><span aria-hidden="true">↳</span> Backend-focused · .NET / C#</p><div className="hero-actions"><Link href="/resume" className="button-primary">View resume <ArrowUpRight /></Link><a href="#contact" className="button-secondary">Contact me</a></div></div>
        <aside className="hero-aside" aria-label="Professional snapshot"><div className="signal"><span aria-hidden="true" /><p>Currently at</p><strong>STC Services</strong></div><p>3+ years of experience building backend systems, integrations, and the paths that get them reliably into production.</p><div className="hero-social"><ExternalLink href={profile.github}>GitHub</ExternalLink><ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink></div></aside>
      </div><a className="scroll-cue" href="#about"><span>Scroll to trace</span><i aria-hidden="true" /></a>
    </section>

    <section className="section about-section" id="about" aria-labelledby="about-heading"><div className="section-heading" data-reveal><p className="eyebrow">00 / Profile</p><h2 id="about-heading">Backend first.<br />Full stack when needed.</h2></div><div className="about-copy" data-reveal data-reveal-delay="80"><p>I’m a Software Engineer based in Lebanon with 3+ years of experience. My strongest work is in C# and .NET: designing APIs, shaping application architecture, working with SQL, integrating external systems, and delivering through Azure and CI/CD.</p><p>I’m comfortable crossing the stack when a feature calls for it. Outside work, I follow Formula 1 and cars, and spend a suspicious amount of free time tinkering with Linux, Docker, and self-hosted services.</p><div className="about-note"><span>Current focus</span><p>Reliable backend services, clean boundaries, and pragmatic delivery.</p></div></div></section>

    <ExperienceSection />

    <section className="section skills-section" id="skills" aria-labelledby="skills-heading"><div className="section-heading compact" data-reveal><p className="eyebrow">02 / Toolkit</p><h2 id="skills-heading">Tools for the work.</h2></div><div className="skills-grid">{skills.map((group, index) => <article key={group.category} className="skill-group" data-reveal data-reveal-delay={index * 55}><header><span>{String(index + 1).padStart(2, "0")}</span><h3>{group.category}</h3></header><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

    <section className="section education-section" aria-labelledby="education-heading"><div className="section-heading" data-reveal><p className="eyebrow">03 / Education</p><h2 id="education-heading">Foundation.</h2></div><article className="education-card" data-reveal data-reveal-delay="70"><div><p className="education-year">{education.year}</p><h3>{education.degree}</h3><p>{education.school}</p></div><ul>{education.details.map(detail => <li key={detail}>{detail}</li>)}</ul></article></section>

    <section className="section project-section" aria-labelledby="project-heading"><div className="section-heading compact" data-reveal><p className="eyebrow">04 / Earlier work</p><h2 id="project-heading">University Project</h2></div><article className="project-card" data-reveal data-reveal-delay="70"><div className="project-image"><Image src="/badde-salemtak.webp" alt="Badde Salemtak mobile app screens" width={720} height={440} sizes="(max-width: 768px) 100vw, 50vw" /></div><div className="project-content"><p className="project-kicker">Senior university project</p><h3>{universityProject.name}</h3><p>{universityProject.description}</p><ul className="tech-list">{universityProject.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul><div className="project-links"><ExternalLink href={universityProject.demo}>Live demo</ExternalLink>{universityProject.repositories.map((repository, index) => <ExternalLink href={repository} key={repository}>Repository {index + 1}</ExternalLink>)}</div></div></article></section>

    <section className="section contact-section" id="contact" aria-labelledby="contact-heading"><div className="contact-intro" data-reveal><p className="eyebrow">05 / Contact</p><h2 id="contact-heading">Let’s talk<br />software.</h2><p>For roles, engineering conversations, or a straightforward hello.</p><div className="direct-links"><a href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight /></a><ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink><ExternalLink href={profile.github}>GitHub</ExternalLink></div></div><ContactForm /></section>

    <footer className="footer"><div><span className="brand">Chokor<span className="brand-accent">.Portfolio()</span></span><p>Software Engineer · Beirut, Lebanon</p></div><p>© {new Date().getFullYear()} Mohamed Chokor</p></footer>
  </main>;
}
