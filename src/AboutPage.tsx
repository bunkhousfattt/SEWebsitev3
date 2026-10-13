const asset = (file: string) => `${import.meta.env.BASE_URL}assets/${file}`

const images = {
  logo: asset("89cbf.png"),
  hero: asset("about/rainforest-waterfall.png"),
  fieldTrip: asset("about/cuba-field-trip.jpg"),
  coastal: asset("about/coastal-expedition.png"),
}

const connections = [
  ["History", "explains", "Politics"],
  ["Geography", "influences", "Culture"],
  ["Biology", "shapes", "Behavior"],
  ["Food", "tells", "Stories"],
  ["Architecture", "reflects", "Values"],
]

const beliefs = [
  {
    number: "01",
    title: "Questions before certainty",
    text: "Curiosity is more valuable than certainty. Great questions are often more important than quick answers.",
  },
  {
    number: "02",
    title: "Learning is lifelong",
    text: "Learning doesn’t stop after graduation. Travel should change how we think, not just where we’ve been.",
  },
  {
    number: "03",
    title: "Conversation matters",
    text: "Small groups create better conversations. Local knowledge matters.",
  },
  {
    number: "04",
    title: "Follow the evidence",
    text: "Evidence matters. It’s okay to change your mind when new evidence appears.",
  },
  {
    number: "05",
    title: "Go deeper",
    text: "Ideas become more interesting when they intersect. Go deeper rather than simply cover more ground.",
  },
]

const knowledgeFields = [
  "Tea merchants",
  "Astronomers",
  "Historians",
  "Scientists",
  "Chefs",
  "Naturalists",
  "Museum curators",
  "Health professionals",
]

const habits = [
  "Stop to read historical markers.",
  "Wonder why trees grow where they do.",
  "Read museum labels.",
  "Love documentaries.",
  "Send podcasts to friends.",
  "Buy books on vacation.",
  "Ask “why?” more than “where?”",
  "Don’t mind saying “I don’t know.”",
]

const concepts = [
  {
    title: "Borders & identity",
    place: "Bavaria & Alsace",
    text: "A question about borders and identity might lead to Bavaria and Alsace.",
  },
  {
    title: "The history of tea",
    place: "Japan",
    text: "Tea could be a lens through which to explore Japan.",
  },
  {
    title: "Geology & deep time",
    place: "The desert",
    text: "A question about geology and deep time might lead into the desert.",
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

export default function AboutPage() {
  return (
    <main className="about-page youth-page">
      <header className="youth-nav">
        <Brand />
        <nav aria-label="Main navigation">
          <a className="active" href="#about-page">
            About
          </a>
          <a href="#youth-trips">Youth Trips</a>
          <a href="#adult-trips">Adult Trips</a>
        </nav>
        <a className="youth-contact-button" href="#about-signup">
          Register Now
        </a>
        <button className="youth-menu" type="button" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </header>

      <section className="about-hero">
        <img
          alt="A waterfall surrounded by dense rainforest"
          src={images.hero}
        />
        <div className="about-hero-shade" />
        <div className="about-hero-copy">
          <p className="about-kicker">About Scholastic Expeditions</p>
          <h1>Curiosity Is Our Compass.</h1>
          <h2>Curated connection to our world and its people.</h2>
          <p>
            We’ve long been described as an educational travel company. But
            travel is only part of the work. The point is curiosity — and coming
            home with a different understanding of the world.
          </p>
          <a href="#about-purpose">
            Our purpose. Our beliefs. Our direction. ↓
          </a>
        </div>
      </section>

      <section className="about-travel about-section" id="about-purpose">
        <figure>
          <img
            alt="Students conducting field research near a tropical shoreline"
            src={images.fieldTrip}
          />
          <figcaption>A place is more than something to look at.</figcaption>
        </figure>
        <div className="about-travel-copy">
          <p className="about-kicker">Why we travel</p>
          <h2>Travel Doesn’t Replace Learning. It Completes It.</h2>
          <p>
            Some things cannot be understood solely from a classroom or a book.
            Being there adds something that reading alone cannot.
          </p>
          <div className="about-examples">
            <article>
              <h3>Architecture, experienced</h3>
              <p>
                Standing inside Strasbourg Cathedral is different from seeing a
                photograph.
              </p>
            </article>
            <article>
              <h3>Time, made visible</h3>
              <p>
                Walking through Zion reveals something about time that no
                lecture can.
              </p>
            </article>
            <article>
              <h3>Culture, shared</h3>
              <p>
                Dinner with local people can change your understanding beyond
                any guidebook.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-connections about-dark about-section">
        <div className="about-connections-heading">
          <div>
            <p className="about-kicker">
              The world doesn’t divide into subjects
            </p>
            <h2>Interesting Things Intersect.</h2>
          </div>
          <p>
            The most interesting questions don’t fit neatly into one discipline.
            Seemingly unrelated things connect.
          </p>
        </div>
        <div className="about-connection-list">
          {connections.map(([first, verb, second]) => (
            <div key={first}>
              <strong>{first}</strong>
              <span>{verb} →</span>
              <strong>{second}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section about-mission">
        <div className="about-heading">
          <p className="about-kicker">Who this is for</p>
          <h2>One Mission. A Lifetime Of Learning.</h2>
          <p>
            Not two businesses, but one mission expressed in different ways for
            different audiences: meaningful travel, good questions and a deeper
            understanding of why places are as they are.
          </p>
        </div>
        <div className="about-audiences">
          <article>
            <h3>Students & Schools</h3>
            <p>
              Scholastic Expeditions was built around students, and they remain
              an important part of the company. Today, most of our work is with
              schools.
            </p>
          </article>
          <article>
            <h3>Adults Who Keep Asking</h3>
            <p>
              Learning doesn’t stop after graduation. Adults also seek
              meaningful travel, interesting people and questions worth
              exploring — not necessarily luxury or adventure.
            </p>
          </article>
        </div>
      </section>

      <section className="about-beliefs about-section">
        <div className="about-heading">
          <p className="about-kicker">What we believe</p>
          <h2>Less Collecting Destinations. More Collecting Understanding.</h2>
        </div>
        <div className="about-belief-grid">
          {beliefs.map((belief) => (
            <article key={belief.number}>
              <span>{belief.number}</span>
              <h3>{belief.title}</h3>
              <p>{belief.text}</p>
            </article>
          ))}
        </div>
        <blockquote>
          <span>The response we hope to inspire</span>
          “I’ll never look at that place the same way again.”
          <small>
            Our measure of success is a shift in understanding — not simply
            taking people somewhere beautiful.
          </small>
        </blockquote>
      </section>

      <section className="about-knowledge about-section">
        <div className="about-knowledge-copy">
          <p className="about-kicker">
            Bring the right people into the conversation
          </p>
          <h2>Good Questions. Deep Local Knowledge.</h2>
          <p>
            We don’t aspire to be experts in everything. Our approach is to
            collaborate with people deeply immersed in a subject and bring their
            perspectives together.
          </p>
          <p>
            Our role is to create experiences that help participants make
            connections they might never have made on their own.
          </p>
          <div className="about-tags">
            {knowledgeFields.map((field) => (
              <span key={field}>{field}</span>
            ))}
          </div>
          <strong>Knowledge becomes richer when people come together.</strong>
        </div>
        <img
          alt="An expedition group gathered together on a coastal landscape"
          src={images.coastal}
        />
      </section>

      <div className="about-kayak-photo">
        <img
          alt="Expedition participants kayaking in clear coastal water"
          src={images.coastal}
        />
      </div>

      <section className="about-tribe about-dark about-section">
        <div className="about-tribe-heading">
          <div>
            <p className="about-kicker">Our kind of people</p>
            <h2>Sound Like You? That’s A Tribe.</h2>
          </div>
          <p>
            Curious individuals are never really finished learning. They’re the
            people who…
          </p>
        </div>
        <div className="about-habits">
          {habits.map((habit) => (
            <div key={habit}>
              <span>↗</span>
              {habit}
            </div>
          ))}
        </div>
        <p className="about-tribe-note">
          The working vision also includes people who identify with an “Interest
          Based Nervous System” in our tribe.
        </p>
      </section>

      <section className="about-vision about-section">
        <div className="about-heading">
          <p className="about-kicker">Future vision / What we’re exploring</p>
          <h2>Start With A Question. Let It Lead Somewhere.</h2>
          <p>
            Instead of “Where should we go?”, we ask “What’s an interesting
            question worth exploring?” The destination becomes part of the
            answer, not the product.
          </p>
        </div>
        <div className="about-vision-notice">
          <strong>Ideas, not launched or bookable offerings.</strong>
          <p>
            Our August 2026 Working Vision Document is not a finished plan. It
            explores where Scholastic Expeditions might go, is intended to grow
            with the company and invites feedback.
          </p>
        </div>
        <div className="about-concept-grid">
          {concepts.map((concept) => (
            <article key={concept.title}>
              <h3>{concept.title}</h3>
              <strong>{concept.place}</strong>
              <p>{concept.text}</p>
            </article>
          ))}
        </div>
        <div className="about-formats">
          <h3>A Broader Collection Of Learning Experiences</h3>
          <p>
            Alongside student expeditions, we’re imagining signature
            international journeys centered on an idea; shorter city seminars
            for a long weekend; and field seminars in Zion or Yellowstone, where
            the landscape becomes the classroom.
          </p>
          <p>
            Possible themes include tea, astronomy, architecture, food and
            healthy aging — with room for many others.
          </p>
          <blockquote>
            “The common thread isn’t geography. It’s curiosity.”
          </blockquote>
        </div>
      </section>

      <section className="about-decision about-dark about-section">
        <p className="about-kicker">Our compass for every decision</p>
        <h2>
          Does This Help People Become More Curious And Better Understand The
          World Through Experience?
        </h2>
        <p>
          A new trip, a new partnership or a new hire: this is the question we
          hope guides every decision. If the answer is yes, we’re moving in the
          right direction.
        </p>
        <div>
          <a href="#youth-trips">Explore Youth Trips →</a>
          <a href="#adult-trips">Adult Trips →</a>
        </div>
        <a
          className="about-feedback"
          href="mailto:info@scholasticexpeditions.org"
        >
          Have a question or feedback on our vision? Contact / Request info →
        </a>
      </section>

      <footer className="youth-footer">
        <div className="youth-footer-grid">
          <div className="youth-footer-about">
            <Brand footer />
            <p>
              Curated connection to our world and its people. Travel doesn’t
              replace learning. It completes it.
            </p>
          </div>
          <div className="youth-footer-column">
            <h3>Services</h3>
            <a href="#youth-trips">Explore Programs</a>
            <a href="#about-page">About us</a>
            <a href="mailto:info@scholasticexpeditions.org">
              Contact / Request info
            </a>
            <a href="#about-signup">Register</a>
          </div>
          <div className="youth-footer-column">
            <h3>Contact Info</h3>
            <address>
              Scholastic Expeditions
              <br />
              5610 Scotts Valley Drive, Suite 313
              <br />
              Scotts Valley, CA 95066
              <br />
              Phone: (831) 440-1041
              <br />
              info@scholasticexpeditions.org
            </address>
          </div>
          <form className="youth-waitlist" id="about-signup">
            <label htmlFor="about-email">Sign up for updates!</label>
            <input
              id="about-email"
              type="email"
              placeholder="Enter your email"
            />
            <button type="submit">Sign up!</button>
          </form>
        </div>
        <div className="youth-footer-bottom">
          Scholastic Expeditions — Beyond the Classroom
        </div>
      </footer>
    </main>
  )
}
