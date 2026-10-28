import { useState } from 'react';
import gradmintLogo from "./assests/gradmint-symbol.png";

const services = [
  { icon: '⌘', number: '01', title: 'Web Development', text: 'Fast, accessible websites and web applications designed around real business goals.', tags: ['React', 'UI/UX', 'Web apps'] },
  { icon: '✳', number: '02', title: 'AI & Intelligent Solutions', text: 'Practical AI and data-driven experiences that help teams work smarter.', tags: ['AI/ML', 'Automation', 'Analytics'] },
  { icon: '▧', number: '03', title: 'Custom Software', text: 'Purpose-built software to simplify workflows and support your next stage of growth.', tags: ['Product builds', 'APIs', 'Integration'] },
  { icon: '☁', number: '04', title: 'Cloud & Digital Transformation', text: 'Modernize systems and create reliable foundations for digital products.', tags: ['Cloud', 'Modernization', 'DevOps'] },
  { icon: '◈', number: '05', title: 'Product Design', text: 'Clear, intuitive digital experiences that make complex tasks feel simple.', tags: ['Research', 'Prototyping', 'Design systems'] },
  { icon: '↗', number: '06', title: 'Technology Consulting', text: 'Make confident technology decisions with a roadmap aligned to your priorities.', tags: ['Strategy', 'Architecture', 'Planning'] },
];

const steps = [
  ['01', 'Discover', 'We learn about your goals, users, constraints, and what success means to you.'],
  ['02', 'Plan', 'We define the scope, milestones, technical approach, and a practical roadmap.'],
  ['03', 'Build', 'We develop in focused iterations, sharing progress and gathering feedback.'],
  ['04', 'Improve', 'We test, launch, and identify opportunities to keep making the product better.'],
];

function Arrow({ diagonal = false }) { return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>; }

function Brand() {
  return (
    <a
      className="brand"
      href="#home"
      aria-label="Gradmint Technologies home"
    >
      <img
        src={gradmintLogo}
        alt="Gradmint Technologies logo"
        className="brand-logo"
      />

      <span className="brand-name">
        gradmint
        <b>TECHNOLOGIES</b>
      </span>
    </a>
  );
}


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', service: 'Web Development', message: '' });
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  const closeMenu = () => setMenuOpen(false);

  return <>
    <header className="site-header">
      <div className="container nav-wrap">
        <Brand />
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? '✕' : '☰'}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {[['Services', '#services'], ['About us', '#about'], ['Our process', '#process'], ['Careers', '#careers']].map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <Arrow diagonal /></a>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-grid container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> TECHNOLOGY THAT MOVES YOU FORWARD</div>
            <h1>Big ideas.<br /><span>Built with purpose.</span></h1>
            <p className="hero-intro">We help ambitious teams turn complex challenges into clear, useful digital experiences.</p>
            <div className="hero-actions"><a className="button button-primary" href="#contact">Start a conversation <Arrow /></a><a className="text-link" href="#services">Explore what we do <Arrow /></a></div>
            <div className="hero-note"><div className="avatar-stack"><span>G</span><span>T</span><span>+</span></div><p><b>People-first technology</b><br />Thoughtful solutions, built together.</p></div>
          </div>
          <div className="hero-art" aria-label="Abstract digital technology illustration" role="img">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-orbit orbit-three" />
            <div className="art-core">
  <span className="art-letter">GT</span>
  <small>GRADMINT TECHNOLOGIES</small>
</div>
            <div className="float-card card-top"><span className="mini-icon purple">✳</span><span><b>Intelligent</b><small>Ideas made actionable</small></span></div>
            <div className="float-card card-bottom"><span className="mini-icon mint">↗</span><span><b>Built to scale</b><small>Ready for what’s next</small></span></div>
            <span className="art-star star-a">✳</span><span className="art-star star-b">✦</span><span className="art-dot dot-a" /><span className="art-dot dot-b" />
          </div>
        </div>
        <div className="hero-bottom container"><span>CURIOUS MINDS. PRACTICAL BUILDERS.</span><span>DESIGN <i>·</i> ENGINEERING <i>·</i> INNOVATION</span></div>
      </section>

      <section className="trust-strip"><div className="container trust-inner"><span>TECHNOLOGY FOR REAL-WORLD PROGRESS</span><div className="trust-pill">✦ Clarity over complexity</div><div className="trust-pill">◈ Built around people</div><div className="trust-pill">↗ Made for what’s next</div></div></section>

      <section className="section services-section" id="services">
        <div className="container"><div className="section-heading"><div><div className="eyebrow dark-eyebrow">WHAT WE DO</div><h2>Technology should make<br /><span>things better.</span></h2></div><p>From the first sketch to the final release, we bring strategy, design, and engineering together to solve meaningful problems.</p></div>
          <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-card-top"><span className="service-icon">{service.icon}</span><span className="service-number">{service.number}</span></div><h3>{service.title}</h3><p>{service.text}</p><div className="tag-row">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="card-arrow" href="#contact" aria-label={`Ask us about ${service.title}`}><Arrow diagonal /></a></article>)}</div>
        </div>
      </section>

      <section className="about-section" id="about"><div className="container about-grid"><div className="about-visual"><div className="visual-grid" /><div className="visual-panel"><span className="panel-label">OUR POINT OF VIEW</span><p>Good technology<br />feels <em>simple.</em></p><div className="panel-line" /><span className="panel-foot">THOUGHTFUL BY DESIGN · BUILT TO LAST</span></div><div className="floating-badge"><span>✳</span><div><b>Human first</b><small>Always</small></div></div></div><div className="about-copy"><div className="eyebrow">A LITTLE ABOUT US</div><h2>We make technology<br />feel <span>more human.</span></h2><p className="about-lead">Gradmint Technologies is a technology company focused on turning ideas into practical digital solutions.</p><p>We believe the best outcomes come from understanding the people behind the problem. That means asking better questions, keeping communication clear, and building with purpose at every step.</p><div className="values-list"><div><span>01</span><p><b>Stay curious</b><small>Explore possibilities and keep learning.</small></p></div><div><span>02</span><p><b>Make it useful</b><small>Prioritize outcomes over unnecessary complexity.</small></p></div><div><span>03</span><p><b>Build together</b><small>Work openly, thoughtfully, and collaboratively.</small></p></div></div><a className="text-link dark-link" href="#contact">Get to know us <Arrow /></a></div></div></section>

      <section className="process-section section" id="process"><div className="container"><div className="center-heading"><div className="eyebrow dark-eyebrow">HOW WE WORK</div><h2>A clear path from idea<br />to <span>something real.</span></h2><p>Good work comes from a process that keeps people aligned and progress visible.</p></div><div className="process-grid">{steps.map(([number, title, text]) => <article className="process-step" key={number}><div className="step-number">{number}<span>↗</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="tech-section"><div className="container tech-wrap"><div><div className="eyebrow">OUR TOOLKIT</div><h2>The right tools.<br /><span>The right reasons.</span></h2><p>We choose technologies to fit the problem, not the other way around. Our toolkit can be tailored to your product, team, and goals.</p></div><div className="tech-cloud"><span>React</span><span>JavaScript</span><span>Python</span><span>Node.js</span><span>AI / ML</span><span>Cloud</span><span>APIs</span><span>SQL & NoSQL</span><span>Automation</span><span>UI / UX</span></div></div></section>

      <section className="careers-section section" id="careers"><div className="container careers-banner"><div className="career-orb">✳</div><div><div className="eyebrow">GROW WITH US</div><h2>Curious about what<br />we could build <span>together?</span></h2><p>We value curious minds, thoughtful problem-solvers, and people who enjoy making useful things.</p></div><a className="button button-light" href="#contact">Connect with us <Arrow diagonal /></a></div></section>

      <section className="contact-section section" id="contact"><div className="container contact-grid"><div className="contact-copy"><div className="eyebrow dark-eyebrow">LET’S MAKE IT HAPPEN</div><h2>Have an idea?<br /><span>Let’s talk.</span></h2><p>Tell us a little about what you’re working on. We’ll use the details to start a useful conversation.</p><div className="contact-points"><div><span className="contact-icon">↗</span><p><b>Start with a conversation</b><small>Share your goals, questions, or early-stage idea.</small></p></div><div><span className="contact-icon">✳</span><p><b>Find the right next step</b><small>We can explore the best way to move forward.</small></p></div></div><div className="contact-disclaimer">Company email, phone number, and office address can be added here once confirmed.</div></div>
          <div className="contact-form-wrap">{submitted ? <div className="success-state"><span className="success-icon">✓</span><h3>Thanks for reaching out.</h3><p>Your form has been validated in this demo, but it has not been sent to Gradmint Technologies. Connect an email service or backend to receive enquiries.</p><button className="button button-primary" onClick={() => setSubmitted(false)}>Send another message</button></div> : <form className="contact-form" onSubmit={submit}><div className="form-title"><h3>Tell us about your project</h3><p>Fields marked * are required.</p></div><div className="form-row"><label>Your name *<input name="name" value={form.name} onChange={update} placeholder="Full name" required /></label><label>Work email *<input type="email" name="email" value={form.email} onChange={update} placeholder="you@company.com" required /></label></div><label>Company / organization<input name="company" value={form.company} onChange={update} placeholder="Where do you work?" /></label><label>What do you need help with? <select name="service" value={form.service} onChange={update}>{services.map(s => <option key={s.title}>{s.title}</option>)}<option>Something else</option></select></label><label>Tell us a little more *<textarea name="message" value={form.message} onChange={update} placeholder="A little context about your idea or challenge..." rows="4" required /></label><button className="button button-primary form-submit" type="submit">Send enquiry <Arrow /></button><p className="form-privacy">This demo does not transmit or store your information.</p></form>}</div></div></section>
    </main>

    <footer className="site-footer"><div className="container"><div className="footer-top"><div><Brand /><p>Thoughtful technology.<br />Practical solutions. Better possibilities.</p></div><div className="footer-links"><div><b>Explore</b><a href="#services">Services</a><a href="#about">About us</a><a href="#process">Our process</a></div><div><b>Connect</b><a href="#careers">Careers</a><a href="#contact">Contact</a><a href="#home">Back to top ↑</a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Gradmint Technologies. All rights reserved.</span><span>Built with intention <b>✳</b></span></div></div></footer>
  </>;
}
