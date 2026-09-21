import { experiences } from "@/data/profile";
export function ExperienceSection() { return <section className="section experience-section" id="experience" aria-labelledby="experience-heading">
  <div className="section-heading compact" data-reveal><p className="eyebrow">01 / Experience</p><h2 id="experience-heading">Work Experience</h2></div>
  <div className="timeline">{experiences.map((experience, index) => <article className={`experience-card ${index === 0 ? "experience-primary" : ""}`} key={experience.company} data-reveal data-reveal-delay={index * 70}>
    <div className="timeline-marker" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>
    <header className="experience-header"><div><p className="company">{experience.company}</p><h3>{experience.role}</h3></div><div className="experience-meta"><time>{experience.period}</time><span>{experience.location}</span></div></header>
    <p className="experience-summary">{experience.summary}</p><div className="default-highlights">{experience.groups[0].items.slice(0, index < 2 ? 3 : 2).map(item => <p key={item}>{item}</p>)}</div>
    {index === 0 && <details className="experience-details"><summary><span className="summary-closed">Explore detailed engineering work</span><span className="summary-open">Hide detailed engineering work</span></summary><div className="detail-grid">{experience.groups.map(group => <div key={group.title}><h4>{group.title}</h4><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div></details>}
    <ul className="tech-list" aria-label={`${experience.company} technologies`}>{experience.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
  </article>)}</div>
</section> }
