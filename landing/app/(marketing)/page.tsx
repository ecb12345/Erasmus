import Image from "next/image";
import Link from "next/link";

// Wklej tu link do formularza MS Forms (Udostępnij → Kopiuj link),
// np. "https://forms.office.com/r/AbCdEf1234"
const MS_FORMS_URL = "";

const pains = [
  "You want to lead effectively, but you are not sure how to guide people without micromanaging them.",
  "Team roles get blurry, misunderstandings happen, and simple tasks take twice as long as they should.",
  "It is hard to know when to step forward as a leader and when to give the group space to work things out on their own.",
];

const kolb = [
  {
    title: "Concrete experience",
    text: "You step into live simulations, team tasks, and an urban challenge across Krakow with an international team.",
  },
  {
    title: "Reflective observation",
    text: "You step back with the group and trainers to look at what just happened, how people reacted, and what dynamic formed.",
  },
  {
    title: "Abstract concepts",
    text: "You connect your observations to clear leadership and communication models (like the von Thun communication square).",
  },
  {
    title: "Active experimentation",
    text: "You immediately apply those conclusions to the next challenge and adjust your leadership style on the spot.",
  },
];

const skills = [
  {
    title: "Group Dynamics & Team Stages",
    text: "Understand how groups naturally evolve from initial forming to high performance, and identify the unspoken roles people step into.",
  },
  {
    title: "Communication That Actually Lands",
    text: "Use the Schulz von Thun four-ears model to see why messages get misinterpreted, and practice active listening to hear what someone actually means.",
  },
  {
    title: "Handling Difficult Conversations",
    text: "Learn how to address uncomfortable situations early, state boundaries directly, and keep the focus on solving the issue rather than attacking the person.",
  },
  {
    title: "Conflict Management in Practice",
    text: "Work with practical frameworks (including the SPORT model and conflict wheel) to resolve friction before it breaks team trust.",
  },
  {
    title: "Practical Leadership",
    text: "Test how to guide a group, coordinate tasks during field exercises, and give constructive feedback that helps others improve.",
  },
];

const logistics = [
  {
    title: "Accommodation",
    text: "You will stay at WOW Hostel Kraków in the Old Town (Westerplatte 8/2, 31-033 Kraków). Rooms are shared with other participants, and check-in starts at 14:00 (with a 24-hour reception and luggage storage if you arrive earlier).",
  },
  {
    title: "Meals",
    text: "Breakfast is served at the hostel or training venue. For lunch, you choose between meat and vegan options at a local bistro, and dinners are catered. Your first meal is dinner on arrival day (13 December).",
  },
  {
    title: "Location & Transport",
    text: "The hostel is about a 10-minute walk from Krakow Main Railway Station (Kraków Główny) and just a few minutes on foot from the Main Market Square. The nearest tram stop is Poczta Główna, right next to the hostel. From Krakow Airport, take the train directly to Kraków Główny (approx. 20 minutes).",
  },
  {
    title: "Travel & Extra Days",
    text: "Participants are advised to arrive at Krakow Airport or the central railway station. The Polish National Agency allows you to stay up to 2 extra days in Poland before or after the project at your own expense.",
  },
  {
    title: "What you need to arrange",
    text: "You cover your own personal spending and travel/accident insurance. If you are an EU citizen, bring your European Health Insurance Card (EHIC).",
  },
];

const criteria = [
  { title: "Age", text: "You are between 19 and 30 years old." },
  {
    title: "Affiliation",
    text: "You are nominated by or actively involved with one of the project's partner organizations (each partner has exactly 3 spots).",
  },
  {
    title: "Language",
    text: "You can communicate comfortably in English during workshops and team activities.",
  },
  {
    title: "Commitment",
    text: "You are available for the entire duration of the course from 13 to 19 December 2026 and ready to take part in all daily sessions.",
  },
];

const contacts = [
  { name: "Sławek", email: "slawomir.muziol@gmail.com", phone: "+48 694 975 299" },
  { name: "Ela", email: "elzbieta.cwynar@gmail.com", phone: "+48 508 642 455" },
];

function SectionHeading({
  eyebrow,
  title,
  id,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  id: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`mb-12 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 id={id} className="text-3xl leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO — panorama + nakładająca się karta jak w infopacku */}
      <section id="hero" aria-labelledby="hero-heading" className="relative">
        <div className="relative h-[46vh] min-h-[320px] w-full">
          <Image
            src="/images/krakow-panorama.png"
            alt="Aerial view of Krakow Main Market Square"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" />
        </div>

        <div className="relative z-10 mx-auto -mt-32 max-w-5xl px-4 sm:-mt-40 sm:px-6">
          <div className="bg-sand px-6 py-12 shadow-[0_30px_60px_-30px_rgba(31,29,27,0.35)] sm:px-14 sm:py-16">
            <p className="eyebrow text-center">Welcome to</p>
            <h1
              id="hero-heading"
              className="mt-3 text-center text-4xl text-ink sm:text-5xl"
            >
              Rock Solid Soft Skills
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-center font-heading text-lg leading-relaxed text-ink-soft sm:text-xl">
              Master Real-World Communication and Team Dynamics
            </p>

            <div className="mt-12 grid items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/images/team.png"
                  alt="Young international participants laughing together"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="text-[15px] leading-relaxed text-ink">
                <p>
                  7-day intensive training in <strong>Krakow, Poland</strong> for young leaders and
                  team players (ages 19–30). Fully funded accommodation and meals. Only 26 spots
                  available — first come, first served.
                </p>
                <p className="mt-4">
                  Forget generic slide presentations and dry theory. Join an international team in
                  Krakow to test your leadership, navigate team friction, and handle tough
                  conversations through live simulations and urban challenges.
                </p>

                <dl className="mt-6 space-y-1.5">
                  <div>
                    <dt className="inline font-semibold">Dates: </dt>
                    <dd className="inline">13–19 December 2026</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold">Location: </dt>
                    <dd className="inline">Krakow, Poland</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold">Costs: </dt>
                    <dd className="inline">Accommodation and meals covered by Erasmus+</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold">Format: </dt>
                    <dd className="inline">Experiential learning, simulations, field challenges</dd>
                  </div>
                </dl>

                <Link id="hero-cta" href="#register" className="btn-primary mt-8">
                  Secure Your Spot Now <span aria-hidden="true">→</span>
                </Link>
                <p className="mt-3 text-xs text-ink-muted">
                  Only 3 participants per partner organization. Applications are processed in
                  order of arrival.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            id="about-heading"
            eyebrow="Why this course"
            title="Working with People Is More Than Just Assigning Tasks"
          />
          <p className="mx-auto mb-12 max-w-2xl text-center text-ink-soft">
            Most of us end up leading projects or working in teams without ever learning how groups
            actually function:
          </p>
          <ul className="grid gap-px bg-sand-dark md:grid-cols-3">
            {pains.map((p, i) => (
              <li key={i} className="bg-background p-8 transition hover:bg-sand-light">
                <span className="font-heading text-3xl text-primary">0{i + 1}</span>
                <p className="mt-4 leading-relaxed text-ink-soft">{p}</p>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-16 max-w-2xl text-center font-heading text-sm uppercase leading-loose tracking-eyebrow text-ink">
            Being a good leader and team member is not about having all the answers.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-center text-ink-soft">
            It comes down to understanding group dynamics, recognizing different roles, and knowing
            how to communicate so everyone stays engaged and aligned.
          </p>
        </div>
      </section>

      {/* METHOD — układ: tekst + zdjęcie jak w "Practical information" */}
      <section id="method" aria-labelledby="method-heading" className="scroll-mt-20">
        <div className="h-16 bg-sand" aria-hidden="true" />
        <div className="mx-auto -mt-16 grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div className="pt-24">
            <SectionHeading
              id="method-heading"
              eyebrow="The method"
              title="Learn How Teams Really Work Through Direct Action, Not Slides"
              align="left"
            />
            <p className="-mt-4 leading-relaxed text-ink-soft">
              <strong className="text-ink">Rock Solid Soft Skills</strong> is a 7-day Erasmus+
              training course built entirely on non-formal education and the David Kolb learning
              cycle. Instead of sitting through long lectures on leadership models, you test group
              processes in real time.
            </p>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-auto md:min-h-[460px]">
            <Image
              src="/images/krakow-evening.png"
              alt="Historic Krakow street at dusk leading to the Main Square"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 py-20">
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {kolb.map((k, i) => (
              <li key={k.title} className="group border-t-2 border-ink pt-6">
                <span className="eyebrow text-xs text-ink-muted">Step {i + 1}</span>
                <h3 className="mt-2 text-xl text-ink transition group-hover:text-primary">
                  {k.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{k.text}</p>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-16 max-w-xl text-center font-heading text-sm uppercase leading-loose tracking-eyebrow text-ink">
            You leave with a clear sense of how groups form, what roles team members take, and how
            to lead people with clarity and empathy.
          </p>
        </div>
      </section>

      {/* PROGRAM */}
      <section id="program" aria-labelledby="program-heading" className="scroll-mt-20 bg-sand py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            id="program-heading"
            eyebrow="Program"
            title="Real Skills and Frameworks You Take Back Home"
          />
          <p className="mx-auto -mt-4 mb-12 max-w-2xl text-center text-ink-soft">
            Across seven days, every session focuses on a specific challenge that comes up when
            leading or collaborating with people:
          </p>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <li
                key={s.title}
                className="bg-background p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-25px_rgba(31,29,27,0.4)]"
              >
                <h3 className="text-xl text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* LOGISTICS */}
      <section id="logistics" aria-labelledby="logistics-heading" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            id="logistics-heading"
            eyebrow="Practical information"
            title="Clear Logistics With No Hidden Costs"
          />
          <p className="mx-auto -mt-4 mb-12 max-w-2xl text-center text-ink-soft">
            Thanks to Erasmus+ funding, the core costs of your participation are fully covered:
          </p>
          <div className="divide-y divide-sand-dark border-y border-sand-dark">
            {logistics.map((l) => (
              <article key={l.title} className="py-8 sm:grid sm:grid-cols-[220px_1fr] sm:gap-10">
                <h3 className="text-lg text-ink">{l.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft sm:mt-0">{l.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CRITERIA */}
      <section id="criteria" aria-labelledby="criteria-heading" className="scroll-mt-20 bg-sand-light py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            id="criteria-heading"
            eyebrow="Who can apply"
            title="Participation Criteria and Selection"
          />
          <p className="mx-auto -mt-4 mb-12 max-w-2xl text-center text-ink-soft">
            To ensure focused teamwork and equal representation across all participating countries,
            the group is limited to 26 people.
          </p>
          <ul className="grid gap-6 sm:grid-cols-2">
            {criteria.map((c) => (
              <li key={c.title} className="bg-background p-8">
                <p className="eyebrow text-xs text-primary">{c.title}</p>
                <p className="mt-3 leading-relaxed text-ink">{c.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <p className="eyebrow">Selection rule</p>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink-soft">
              Places are filled strictly on a <strong className="text-ink">first-come, first-served</strong>{" "}
              basis among candidates who meet the criteria. Once the 3 spots for your country&apos;s
              partner organization are confirmed, registration for that partner closes automatically.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="register" aria-labelledby="register-heading" className="relative scroll-mt-20 isolate">
        <Image
          src="/images/krakow-panorama.png"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-ink/70" />
        <div className="mx-auto max-w-3xl px-6 py-28 text-center text-white">
          <p className="eyebrow text-white/70">Join us in Krakow</p>
          <h2 id="register-heading" className="mt-4 text-3xl leading-tight sm:text-4xl">
            Ready to Level Up Your Team and Leadership Skills?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/85">
            Join 25 other participants in Krakow from 13 to 19 December 2026 for a week of
            experiential learning and practical workshops.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70">
            Remember: each partner organization has only 3 allocated spots, and applications are
            accepted in order of submission. Once your national quota is filled, the form closes.
          </p>
          <a
            id="register-cta"
            href={MS_FORMS_URL || "#contact"}
            {...(MS_FORMS_URL ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="mt-10 inline-flex items-center gap-2 bg-background px-8 py-4 font-heading text-sm uppercase tracking-[0.15em] text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white"
          >
            Complete the Registration Form <span aria-hidden="true">→</span>
          </a>
          <p className="mx-auto mt-6 max-w-xl text-sm text-white/70">
            After submitting the form, your sending organization will contact you to confirm your
            spot and share practical travel preparation steps.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title="Have Questions Before Applying?"
          />
          <p className="mx-auto -mt-4 mb-12 max-w-2xl text-center text-ink-soft">
            Get in touch directly with the coordination team at Stowarzyszenie POLITES:
          </p>
          <ul className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
            {contacts.map((c) => (
              <li key={c.email} className="bg-sand p-8 text-center">
                <h3 className="text-lg text-ink">{c.name}</h3>
                <a
                  href={`mailto:${c.email}`}
                  className="mt-3 block break-all text-sm text-ink-soft underline-offset-4 hover:text-primary hover:underline"
                >
                  {c.email}
                </a>
                {c.phone && (
                  <a
                    href={`tel:${c.phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-sm text-ink-soft hover:text-primary"
                  >
                    {c.phone}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
