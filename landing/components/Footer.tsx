import Link from "next/link";
import EuEmblem from "@/components/EuEmblem";

const links = [
  { href: "#about", label: "About" },
  { href: "#program", label: "Program" },
  { href: "#logistics", label: "Logistics" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-sand">
      {/* Pasek z oznaczeniem finansowania UE */}
      <div className="border-b border-sand-dark bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 px-6 py-8 sm:flex-row sm:gap-12">
          {/* Emblemat UE + obowiązkowa formuła (Arial, czarny — wg wytycznych UE) */}
          <div className="flex items-center gap-3">
            <EuEmblem className="h-12 w-auto" />
            <p className="font-[Arial,Helvetica,sans-serif] text-[15px] leading-tight text-black">
              Funded by
              <br />
              the European Union
            </p>
          </div>
          {/* Logo programu Erasmus+ — pobierz oficjalny plik z erasmusplus.org.pl
              i zapisz jako public/logos/erasmus-plus.png */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/erasmus-plus.svg" alt="Erasmus+" className="h-10 w-auto" />
        </div>
        <p className="mx-auto max-w-4xl px-6 pb-6 text-center text-[11px] leading-relaxed text-ink-muted">
          Funded by the European Union. Views and opinions expressed are however those of the
          author(s) only and do not necessarily reflect those of the European Union or the
          Foundation for the Development of the Education System (FRSE).
          Neither the European Union nor the granting authority can be held responsible for them.
        </p>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-center text-sm text-ink-soft sm:text-left">
          © {year} Stowarzyszenie POLITES · Rock Solid Soft Skills — funded by Erasmus+
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="font-heading text-xs uppercase tracking-[0.18em] text-ink-soft transition hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
