import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "From Krakow Airport to WOW Hostel | Rock Solid Soft Skills",
  description:
    "Step-by-step directions from Krakow John Paul II Airport (KRK) to WOW Hostel, Westerplatte 8/2, by train, bus or taxi.",
};

const HOSTEL = "Westerplatte 8/2, 31-033 Kraków";
const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&origin=Krak%C3%B3w+Airport+KRK&destination=Westerplatte+8,+31-033+Krak%C3%B3w&travelmode=transit";

const trainSteps = [
  {
    title: "Find the train station at the airport",
    text: "After arrivals, follow the “Train / Pociąg” signs. A covered walkway leads from the terminal to the airport railway platform (about 5 minutes on foot).",
  },
  {
    title: "Buy a ticket",
    text: "Use the ticket machine on the platform (cards accepted, English menu) or the Koleje Małopolskie app. Choose a single ticket “Kraków Lotnisko → Kraków Główny”. You can also buy it from the conductor on board.",
  },
  {
    title: "Take the train to Kraków Główny",
    text: "Trains run roughly every 30 minutes from early morning until around midnight. The ride takes about 20 minutes. Kraków Główny (Main Railway Station) is the final stop.",
  },
  {
    title: "Walk to the hostel (approx. 10 minutes)",
    text: "Leave the station towards the Old Town and the main square in front of the historic station building. Walk to the Basztowa / Lubicz junction and continue straight onto Westerplatte street along the Planty park. WOW Hostel is at Westerplatte 8, on the left-hand side, before the Poczta Główna tram stop.",
  },
];

const alternatives = [
  {
    title: "Bus",
    text: "City bus 208 runs from the airport bus stop to Dworzec Główny Wschód (Main Station East), about 40 minutes. At night use bus 902. Buy a ticket in the machine at the stop or on board (contactless card). From the station, walk to the hostel as described above.",
  },
  {
    title: "Taxi / ride-hailing",
    text: "Bolt, Uber and FreeNow operate at the airport. The ride to the hostel takes around 25–35 minutes depending on traffic. Use only official taxis from the rank in front of the terminal or book through an app.",
  },
];

export default function AirportDirectionsPage() {
  return (
    <article className="pb-24">
      <header className="bg-sand">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="eyebrow">Getting there</p>
          <h1 className="mt-4 text-4xl leading-tight text-ink sm:text-5xl">
            From Krakow Airport to the Hostel
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-ink-soft">
            Krakow John Paul II International Airport (KRK, Balice) → WOW Hostel Kraków,{" "}
            {HOSTEL}. The fastest and cheapest option is the airport train.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Open route in Google Maps <span aria-hidden="true">↗</span>
            </a>
            <Link href="/#logistics" className="btn-outline">
              ← Back to the main page
            </Link>
          </div>
        </div>
      </header>

      <section aria-labelledby="train-heading" className="mx-auto max-w-4xl px-6 pt-20">
        <p className="eyebrow">Recommended · approx. 35 minutes in total</p>
        <h2 id="train-heading" className="mt-3 text-3xl text-ink">By train</h2>
        <ol className="mt-10 space-y-8">
          {trainSteps.map((s, i) => (
            <li key={s.title} className="flex gap-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-ink font-heading text-lg text-white">
                {i + 1}
              </span>
              <div className="border-b border-sand-dark pb-8">
                <h3 className="text-xl text-ink">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="alt-heading" className="mx-auto max-w-4xl px-6 pt-16">
        <h2 id="alt-heading" className="text-3xl text-ink">Other options</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {alternatives.map((a) => (
            <div key={a.title} className="bg-sand p-8">
              <h3 className="text-xl text-ink">{a.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pt-16">
        <div className="border-l-4 border-primary bg-primary-light p-6">
          <h2 className="text-lg text-ink">Good to know</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-soft">
            <li>Keep your train/bus ticket — it may be needed for travel cost reimbursement.</li>
            <li>Check-in at the hostel starts at 14:00. If you arrive earlier, you can leave your luggage at reception.</li>
            <li>Timetables can change — check the current departures on the day of travel.</li>
          </ul>
        </div>
      </section>
    </article>
  );
}
