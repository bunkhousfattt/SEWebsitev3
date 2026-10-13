const asset = (file: string) => `${import.meta.env.BASE_URL}assets/${file}`

const images = {
  logo: asset("89cbf.png"),
  hero: asset("real/expedition-forest.jpg"),
  costaRica: asset("real/galapagos-turtle.jpg"),
  galapagos: asset("real/galapagos-sealion.jpg"),
  cuba: asset("real/cuba-street.jpg"),
  california: asset("real/beach-travelers.jpg"),
  pacificNorthwest: asset("real/field-learning.jpg"),
  andes: asset("real/mountain-hikers.jpg"),
}

const icons = {
  shield: asset("24486.svg"),
  users: asset("323ae.svg"),
  star: asset("6bece.svg"),
  diamond: asset("eb378.svg"),
  play: asset("c775c.svg"),
}

type Program = {
  title: string
  theme: "Environment" | "Innovation" | "Community" | "Marine Science"
  duration: string
  grades: string
  departure: string
  image: string
  alt: string
}

const programs: Program[] = [
  {
    title: "Costa Rica Sea Turtle Initiative",
    theme: "Environment",
    duration: "9 Days",
    grades: "Grades 9–12",
    departure: "July 2026",
    image: images.costaRica,
    alt: "Students observing nesting sea turtles on a Costa Rican beach at night",
  },
  {
    title: "Galapagos Ecology & Evolutionary Biology",
    theme: "Innovation",
    duration: "11 Days",
    grades: "Grades 8–12",
    departure: "June 2026",
    image: images.galapagos,
    alt: "Travelers snorkeling in clear water near the Galapagos shoreline",
  },
  {
    title: "Cuba Culture & Sustainable Agriculture",
    theme: "Community",
    duration: "8 Days",
    grades: "Grades 9–12",
    departure: "April 2026",
    image: images.cuba,
    alt: "Students walking along a colorful street in Cuba",
  },
  {
    title: "California Marine Biology & Oceanography",
    theme: "Marine Science",
    duration: "7 Days",
    grades: "Grades 7–10",
    departure: "August 2026",
    image: images.california,
    alt: "Students conducting marine field research from a boat in California",
  },
  {
    title: "Pacific Northwest Conservation & Ecology",
    theme: "Environment",
    duration: "10 Days",
    grades: "Grades 8–12",
    departure: "July 2026",
    image: images.pacificNorthwest,
    alt: "Students exploring an old-growth forest in the Pacific Northwest",
  },
  {
    title: "Andean Renewable Energy & Service Project",
    theme: "Community",
    duration: "12 Days",
    grades: "Grades 10–12",
    departure: "June 2026",
    image: images.andes,
    alt: "Students meeting community members in an Andean town",
  },
]

const pillars = [
  {
    title: "Safety First",
    icon: icons.shield,
    text: "Strict risk assessments, continuous monitoring, and local support teams ensure optimal safety standards for all schools.",
  },
  {
    title: "Elite Network",
    icon: icons.users,
    text: "Direct access to global universities, prominent biologists, local service associations, and accredited academic educators.",
  },
  {
    title: "Professionalism",
    icon: icons.star,
    text: "Highly rigorous travel coursework designed to fit school credit standards and enhance student application profiles.",
  },
  {
    title: "Unique Access",
    icon: icons.diamond,
    text: "Gain entry to exclusive field reserves, wildlife hatcheries, and unique local community initiatives.",
  },
]

const reflections = [
  {
    quote:
      "“The trip didn’t just teach us about ecosystems. It taught us how to ask better questions, listen to local knowledge, and see the world as a problem worth solving.”",
    name: "Maya R.",
    program: "Costa Rica Sea Turtle Initiative",
  },
  {
    quote:
      "“We didn’t just collect data. We learned how ideas travel, how communities respond to change, and how to tell a story that matters.”",
    name: "Julian S.",
    program: "Galapagos Ecology & Evolutionary Biology",
  },
  {
    quote:
      "“The real lesson was not the place itself, but the way we learned to move through it: with humility, curiosity, and a sense of responsibility.”",
    name: "Elena M.",
    program: "Cuba Culture & Sustainable Agriculture",
  },
]

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`youth-brand ${footer ? "youth-brand-footer" : ""}`}
      href="#home"
    >
      <img alt="" src={images.logo} />
      <span>
        <strong>Scholastic</strong>
        <small>Expeditions</small>
      </span>
    </a>
  )
}

function ProgramCard({ program }: { program: Program }) {
  const themeClass = program.theme.toLowerCase().replace(" ", "-")

  return (
    <article className="youth-program-card">
      <img
        className="youth-program-image"
        src={program.image}
        alt={program.alt}
      />
      <div className="youth-program-body">
        <div className="youth-tags">
          <span className={`youth-theme youth-theme-${themeClass}`}>
            {program.theme}
          </span>
          <span className="youth-duration">{program.duration}</span>
        </div>
        <h3>{program.title}</h3>
        <div className="youth-program-specs">
          <div>
            <span>Ages/Grades</span>
            <strong>{program.grades}</strong>
          </div>
          <div>
            <span>Next Departure</span>
            <strong>{program.departure}</strong>
          </div>
        </div>
      </div>
      <div className="youth-card-actions">
        <a className="youth-primary-action" href="#request-info">
          See Itinerary <span aria-hidden="true">→</span>
        </a>
        <a className="youth-secondary-action" href="#request-info">
          Inquire
        </a>
      </div>
    </article>
  )
}

export default function YouthTrips() {
  return (
    <main className="youth-page">
      <header className="youth-nav">
        <Brand />
        <nav aria-label="Main navigation">
          <a href="#about-page">About</a>
          <a className="active" href="#youth-trips">
            Youth Trips
          </a>
          <a href="#adult-trips">Adult Trips</a>
        </nav>
        <a className="youth-contact-button" href="#request-info">
          Register Now
        </a>
        <button className="youth-menu" type="button" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className="youth-mobile-tabs">
        <a className="active" href="#youth-trips">
          Youth Trips
        </a>
        <a href="#adult-trips">Adult Trips</a>
      </div>

      <section className="youth-hero">
        <img
          alt="Students and educators walking together through a tropical forest"
          src={images.hero}
        />
        <div className="youth-hero-overlay" />
        <div className="youth-hero-content">
          <p className="youth-kicker">Expedition Registry</p>
          <h1>Step Out Of The Classroom. Step Into The World.</h1>
          <p>
            Transformative outdoor educational travel experiences tailored for
            middle school and high school groups. Led by expert field scientists
            and cultural mentors.
          </p>
        </div>
      </section>

      <section className="youth-programs" id="programs">
        <div className="youth-section-row">
          <div>
            <h2>6 Active Programs</h2>
            <p>Found matched programs for youth academic group travel</p>
          </div>
          <label>
            <span>Sort by:</span>
            <select defaultValue="Popularity" aria-label="Sort programs">
              <option>Popularity</option>
              <option>Departure date</option>
              <option>Duration</option>
            </select>
          </label>
        </div>
        <div className="youth-program-grid">
          {programs.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>
      </section>

      <section className="youth-trust">
        <div className="youth-centered-heading">
          <p className="youth-kicker">The Scholastic Standard</p>
          <h2>Educating With Absolute Trust & Integrity</h2>
          <p>
            We combine rigorous academic curriculum with industry-leading safety
            operations to provide absolute peace of mind.
          </p>
        </div>
        <div className="youth-pillar-grid">
          {pillars.map((pillar) => (
            <article key={pillar.title}>
              <span className="youth-icon-box">
                <img alt="" src={pillar.icon} />
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="youth-alumni">
        <div className="youth-section-heading">
          <p className="youth-kicker">Alumni Voices</p>
          <h2>Curiosity Is Our Compass</h2>
          <p>
            These trips are not just destinations. They are a way to learn
            through experience, build curiosity, and return home seeing the
            world differently.
          </p>
        </div>
        <div className="youth-reflection-grid">
          {reflections.map((reflection) => (
            <article key={reflection.name}>
              <p className="youth-reflection-label">Alumni Reflection</p>
              <blockquote>{reflection.quote}</blockquote>
              <strong>{reflection.name}</strong>
              <span>{reflection.program}</span>
            </article>
          ))}
        </div>
        <article className="youth-video-card">
          <div className="youth-video-preview">
            <img
              alt="Alumni walking through a tropical forest"
              src={images.hero}
            />
            <span className="youth-video-label">Video Interview</span>
            <button type="button" aria-label="Play alumni video">
              <img alt="" src={icons.play} />
            </button>
          </div>
          <div>
            <h3>Hear From Alumni About The Return</h3>
            <p>
              Watch a short video interview with recent alumni to understand how
              these trips shape curiosity, confidence, and a sense of purpose.
            </p>
            <a href="#request-info">Watch the alumni video interview →</a>
          </div>
        </article>
      </section>

      <section className="youth-cta" id="request-info">
        <div>
          <p className="youth-kicker">Custom Group Expeditions</p>
          <h2>Are You A Teacher Or Educator Ready To Plan?</h2>
          <p>
            We design customized curriculum itineraries to match your
            school&apos;s target learning objectives. Connect directly with our
            expedition specialists to begin crafting a proposal.
          </p>
        </div>
        <div className="youth-cta-panel">
          <h3>Request More Information</h3>
          <a href="mailto:info@scholasticexpeditions.org">
            Request More Information <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <footer className="youth-footer">
        <div className="youth-footer-grid">
          <div className="youth-footer-about">
            <Brand footer />
            <p>
              Scholastic Expeditions is at the forefront of education. We design
              and provide exceptional learning opportunities for students of all
              ages.
            </p>
          </div>
          <div className="youth-footer-column">
            <h3>Services</h3>
            <a href="#programs">Explore Programs</a>
            <a href="#">About Us</a>
            <a href="#request-info">Contact Us</a>
            <a href="#waitlist">Waitlist Registry</a>
          </div>
          <div className="youth-footer-column">
            <h3>Contact Info</h3>
            <address>
              Scholastic Expeditions
              <br />
              5610 Scotts Valley Drive
              <br />
              Scotts Valley, CA 95066
              <br />
              info@scholasticexpeditions.org
            </address>
          </div>
          <form className="youth-waitlist" id="waitlist">
            <label htmlFor="school-email">Join Waitlist Updates</label>
            <input
              id="school-email"
              type="email"
              placeholder="Enter school email"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="youth-footer-bottom">
          <span>
            Copyright © 2026 Scholastic Expeditions. All rights reserved.
          </span>
          <span>Privacy Policy&nbsp;&nbsp;&nbsp; Terms of Use</span>
        </div>
      </footer>
    </main>
  )
}
