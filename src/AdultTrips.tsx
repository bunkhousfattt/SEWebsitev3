const asset = (file: string) => `${import.meta.env.BASE_URL}assets/${file}`

const images = {
  logo: asset("89cbf.png"),
  hero: asset("real/adult-travelers.jpg"),
  costaRica: asset("real/costa-rica-volcano.jpg"),
  portugal: asset("real/porto-river.jpg"),
  tamarindo: asset("real/tamarindo-sunset.jpg"),
  germany: asset("real/germany-alps.jpg"),
}

const icons = {
  shield: asset("24486.svg"),
  users: asset("323ae.svg"),
  star: asset("6bece.svg"),
  diamond: asset("eb378.svg"),
  play: asset("c775c.svg"),
}

const programs = [
  {
    title: "Costa Rica Trip: Top of the World",
    theme: "Adventure",
    image: images.costaRica,
    alt: "A rainforest-covered volcano in Costa Rica",
    description:
      "Hike to the top of the world and conquer Cerro Chirripó, Costa Rica’s highest peak. Experience this unforgettable, adults-only adventure that goes far beyond the summit.",
  },
  {
    title: "Portugal/Morocco Trip",
    theme: "Culture & Travel",
    image: images.portugal,
    alt: "Traditional boats and colorful buildings along the Douro River in Porto",
    description:
      "Immerse yourself in European and North African cultures, taste incredible food, and embark on the ultimate adventure.",
  },
  {
    title: "Costa Rica Trip: Tamarindo",
    theme: "Conservation",
    duration: "9 Days",
    image: images.tamarindo,
    alt: "A traveler walking along Tamarindo beach at sunset",
    description:
      "Experience the best of Costa Rica on a 9-day journey from the volcanic cloud forests of Arenal and Monteverde to the Pacific shores of Tamarindo, combining wildlife conservation, river rafting, and hands-on field ecology.",
  },
  {
    title: "Borderlands Trip: Germany and Alsace",
    theme: "History & Culture",
    duration: "12 Days",
    image: images.germany,
    alt: "An alpine village in a green valley surrounded by mountains",
    description:
      "Explore the intersection of identity, history, and shared culture on a 12-day journey through Bavaria and Alsace, tracing medieval trade routes along the Danube to the storied vineyards and cathedrals of the Franco-German borderlands.",
  },
]

const pillars = [
  {
    title: "Small Groups",
    icon: icons.shield,
    text: "Deliberately small group sizes enable meaningful conversation, genuine mentorship, and the kind of observation that large tours cannot offer.",
  },
  {
    title: "Local Knowledge",
    icon: icons.users,
    text: "We partner directly with field scientists, community leaders, and cultural educators who live and work in every destination.",
  },
  {
    title: "Interdisciplinary",
    icon: icons.star,
    text: "Each program draws on science, culture, history, and ethics simultaneously — because the world does not divide into subjects.",
  },
  {
    title: "Full Transparency",
    icon: icons.diamond,
    text: "Travelers receive clear program documentation, itinerary rationale, and open communication from inquiry through return.",
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

function AdultProgramCard({ program }: { program: typeof programs[number] }) {
  const isCulture = program.theme.includes("Culture")

  return (
    <article className="youth-program-card adult-program-card">
      <img
        className="youth-program-image"
        src={program.image}
        alt={program.alt}
      />
      <div className="youth-program-body">
        <div className="youth-tags">
          <span
            className={`youth-theme ${
              isCulture ? "youth-theme-innovation" : "youth-theme-community"
            }`}
          >
            {program.theme}
          </span>
          {program.duration && (
            <span className="youth-duration">{program.duration}</span>
          )}
        </div>
        <h3>{program.title}</h3>
        <p className="adult-program-description">{program.description}</p>
      </div>
      <div className="youth-card-actions">
        <a className="youth-primary-action" href="#adult-request-info">
          See Itinerary <span aria-hidden="true">→</span>
        </a>
        <a className="youth-secondary-action" href="#adult-request-info">
          Inquire
        </a>
      </div>
    </article>
  )
}

export default function AdultTrips() {
  return (
    <main className="youth-page adult-page">
      <header className="youth-nav">
        <Brand />
        <nav aria-label="Main navigation">
          <a href="#about-page">About</a>
          <a href="#youth-trips">Youth Trips</a>
          <a className="active" href="#adult-trips">
            Adult Trips
          </a>
        </nav>
        <a className="youth-contact-button" href="#adult-request-info">
          Register Now
        </a>
        <button className="youth-menu" type="button" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className="youth-mobile-tabs">
        <a href="#youth-trips">Youth Trips</a>
        <a className="active" href="#adult-trips">
          Adult Trips
        </a>
      </div>

      <section className="youth-hero adult-hero">
        <img
          alt="Adult travelers exploring a mountain landscape together"
          src={images.hero}
        />
        <div className="youth-hero-overlay" />
        <div className="youth-hero-content">
          <p className="youth-kicker">Curiosity Is Our Compass</p>
          <h1>
            Learning Happens When You Move Through The World, Not Just Read
            About It.
          </h1>
          <p>
            Our expeditions are curated connections to the world and its people
            — built around local knowledge, small groups, and questions that
            matter more than destinations.
          </p>
        </div>
      </section>

      <section className="youth-programs" id="adult-programs">
        <div className="youth-section-row">
          <div>
            <h2>4 Active Programs</h2>
            <p>
              Curated connections to the world and its people — built around
              local knowledge, small groups, and direct field experience
            </p>
          </div>
          <label>
            <span>Sort by:</span>
            <select defaultValue="Popularity" aria-label="Sort programs">
              <option>Popularity</option>
              <option>Destination</option>
              <option>Duration</option>
            </select>
          </label>
        </div>
        <div className="youth-program-grid adult-program-grid">
          {programs.map((program) => (
            <AdultProgramCard key={program.title} program={program} />
          ))}
        </div>
      </section>

      <section className="youth-trust">
        <div className="youth-centered-heading">
          <p className="youth-kicker">Why It Works</p>
          <h2>Built On Transparency, Evidence & Strong Partnerships</h2>
          <p>
            Every expedition is shaped by local knowledge, meaningful
            conversation, and a commitment to returning travelers home seeing
            the world differently.
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
          <p className="youth-kicker">Traveler Reflections</p>
          <h2>Questions & Ideas Over Destinations</h2>
          <p>
            The measure of a good expedition is not what travelers saw, but how
            they think about the world when they return. These reflections
            capture what that shift looks like.
          </p>
        </div>
        <div className="youth-reflection-grid">
          {[1, 2, 3].map((item) => (
            <article key={item}>
              <p className="youth-reflection-label">Alumni Story Placeholder</p>
              <blockquote>“Alumni quote to be added.”</blockquote>
              <strong>Alumni name</strong>
              <span>Program attended</span>
            </article>
          ))}
        </div>
        <article className="youth-video-card">
          <div className="youth-video-preview">
            <img
              alt="A group of adult travelers hiking together"
              src={images.hero}
            />
            <span className="youth-video-label">Traveler Interview</span>
            <button type="button" aria-label="Play traveler video">
              <img alt="" src={icons.play} />
            </button>
          </div>
          <div>
            <h3>Hear From Travelers About The Return</h3>
            <p>
              A short conversation with recent travelers on what shifts when you
              move through the world with intention — and what it means to
              return home seeing it differently.
            </p>
            <a href="#adult-request-info">
              Watch the traveler video interview →
            </a>
          </div>
        </article>
      </section>

      <section className="youth-cta" id="adult-request-info">
        <div>
          <p className="youth-kicker">For Travelers</p>
          <h2>Lead A Program Built Around Better Questions</h2>
          <p>
            Shape an expedition around your curiosity and the questions you are
            ready to explore. We connect travelers with local experts and
            experienced partners, then provide clear planning and transparent
            communication from first conversation through return.
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
              Curated connections to the world and its people — built around
              local knowledge, small groups, and the belief that travel
              completes learning.
            </p>
          </div>
          <div className="youth-footer-column">
            <h3>Services</h3>
            <a href="#adult-programs">Explore Programs</a>
            <a href="#home">About Us</a>
            <a href="#adult-request-info">Contact Us</a>
            <a href="#adult-request-info">Request Information</a>
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
          <form className="youth-waitlist">
            <label htmlFor="adult-email">Stay Curious</label>
            <input
              id="adult-email"
              type="email"
              placeholder="Enter your email"
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
