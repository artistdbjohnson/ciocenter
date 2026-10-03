"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  locationBySlug,
  locations,
  needs,
  physicianBySlug,
  physicians,
  physiciansAt,
  serviceBySlug,
  services,
  type Location,
} from "@/lib/data";
import { useTx } from "@/lib/i18n";

function offerLine(loc: Location, tx: (copy: { en: string; pt: string }) => string) {
  return loc.offers
    .map((id) => needs.find((item) => item.id === id)?.label)
    .filter((label): label is { en: string; pt: string } => Boolean(label))
    .map((label) => tx(label))
    .join(" · ");
}

const sourceSlug: Record<string, string> = {
  "brian-l-badman-md": "brian-l-badman-m-d",
  "aaron-m-baessler-md": "aaron-m-baessler-m-d",
  "warren-g-lawless-do": "warren-g-lawless-d-o",
  "ryan-r-jaggers-md": "ryan-r-jaggers-m-d",
  "adam-w-lyon-md": "adam-w-lyon-m-d",
  "john-r-martin-md": "john-r-martin-m-d",
  "stanton-a-wilhite-dpm": "stanton-a-wilhite-d-p-m",
};

function officialPhysician(slug: string) {
  return `https://ciocenter.com/physicians/${sourceSlug[slug] ?? slug}/`;
}

const walkInClinicians = [
  "brian-l-badman-md",
  "aaron-m-baessler-md",
  "brian-e-camilleri-do",
  "jonathan-s-chae-md",
  "adam-w-lyon-md",
  "kile-j-carter-md",
  "jeremy-j-hunt-md",
  "warren-g-lawless-do",
];

export function PhysiciansView() {
  const t = useTx();
  const [role, setRole] = useState<"all" | "surgeon" | "nonoperative">("all");
  const [place, setPlace] = useState("all");
  const list = useMemo(() => {
    return physicians.filter((person) => {
      if (role !== "all" && person.role !== role) return false;
      if (place === "all") return true;
      const loc = locationBySlug(place);
      return loc?.physicians.includes(person.slug);
    });
  }, [role, place]);

  return (
    <div className="wrap" style={{ paddingBottom: "3rem" }}>
      <header className="page-intro">
        <p className="kicker">{t({ en: "Directory", pt: "Diretório" })}</p>
        <h1>{t({ en: "Physicians", pt: "Médicos" })}</h1>
        <p className="lede">
          {t({
            en: "When you spend time talking with any one of these doctors, the practice says, you learn they are dedicated to the course of treatment that is right for you.",
            pt: "A prática diz que, ao conversar com qualquer um destes médicos, você percebe a dedicação ao tratamento certo para você.",
          })}
        </p>
      </header>
      <div className="filter-row">
        {(
          [
            ["all", { en: "Everyone", pt: "Todos" }],
            ["surgeon", { en: "Surgeons", pt: "Cirurgiões" }],
            ["nonoperative", { en: "Non-operative", pt: "Não cirúrgicos" }],
          ] as const
        ).map(([id, label]) => (
          <button key={id} type="button" className="ghost-btn" aria-pressed={role === id} onClick={() => setRole(id)}>
            {t(label)}
          </button>
        ))}
        <label className="fine">
          {t({ en: "Clinic", pt: "Unidade" })}{" "}
          <select value={place} onChange={(e) => setPlace(e.target.value)} style={{ font: "inherit", marginLeft: 8 }}>
            <option value="all">{t({ en: "All clinics", pt: "Todas" })}</option>
            {locations.map((loc) => (
              <option key={loc.slug} value={loc.slug}>
                {loc.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="people-grid">
        {list.map((person) => (
          <Link key={person.slug} href={`/physicians/${person.slug}`} className="person-card">
            <img src={person.photo} alt="" />
            <div>
              <strong>{person.name}</strong>
              <p className="meta">{t(person.specialty)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function PhysicianView({ slug }: { slug: string }) {
  const t = useTx();
  const person = physicianBySlug(slug);
  if (!person) return null;
  const clinics = locations.filter((loc) => loc.physicians.includes(person.slug));
  return (
    <article className="wrap profile">
      <header className="page-intro">
        <p className="kicker">{t(person.specialty)}</p>
        <h1>{person.name}</h1>
      </header>
      <div className="profile" style={{ paddingBottom: 0 }}>
        <img className="profile-photo" src={person.photo} alt={person.name} />
        <div className="prose">
          <p>{t(person.bio)}</p>
          <p className="fine">
            {t({
              en: "Portrait and biography transplanted from the published profile. Portuguese is a translation of that published text.",
              pt: "Retrato e biografia transplantados do perfil publicado. O português é tradução desse texto.",
            })}
          </p>
          <h2 style={{ fontSize: "2rem" }}>{t({ en: "Clinics", pt: "Unidades" })}</h2>
          {clinics.length ? (
            clinics.map((loc) => (
              <p key={loc.slug}>
                <Link href={`/locations/${loc.slug}`}>{loc.name}</Link>
                {" — "}
                {loc.address.join(", ")}
              </p>
            ))
          ) : (
            <p>{t({ en: "Clinic assignments are listed on each location page.", pt: "A lotação está nas páginas de cada unidade." })}</p>
          )}
          <div className="inline-actions">
            <Link className="solid-btn" href="/contact">
              {t({ en: "Request an appointment", pt: "Pedir uma consulta" })}
            </Link>
            <a className="ghost-btn" href={officialPhysician(person.slug)}>
              {t({ en: "Published profile", pt: "Perfil publicado" })}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ServicesView() {
  const t = useTx();
  return (
    <div className="wrap" style={{ paddingBottom: "3rem" }}>
      <header className="page-intro">
        <p className="kicker">{t({ en: "For over 75 years", pt: "Há mais de 75 anos" })}</p>
        <h1>{t({ en: "Services", pt: "Serviços" })}</h1>
        <p className="lede">
          {t({
            en: "Board-certified doctors and licensed specialists, with a goal of getting patients back to what they love.",
            pt: "Médicos certificados e especialistas licenciados, com o objetivo de devolver os pacientes ao que eles amam.",
          })}
        </p>
      </header>
      <div className="card-grid" style={{ marginTop: "1.4rem" }}>
        {services.map((service, index) => (
          <Link key={service.slug} href={`/services/${service.slug}`} className="service-row">
            <p className="kicker">{String(index + 1).padStart(2, "0")}</p>
            <strong style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.7rem" }}>
              {t(service.title)}
            </strong>
            <span className="meta">{t(service.summary)}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function ServiceView({ slug }: { slug: string }) {
  const t = useTx();
  const service = serviceBySlug(slug);
  if (!service) return null;
  const clinics = locations.filter((loc) => {
    if (slug === "walk-in-clinic") return loc.offers.includes("walkin");
    if (slug === "physical-therapy") return loc.offers.includes("therapy");
    if (slug === "surgery-revision" || slug === "robotic-assisted-hip-and-knee-replacement")
      return loc.offers.includes("joint");
    return true;
  });
  const people =
    slug === "walk-in-clinic" ? physiciansAt(walkInClinicians) : [];
  return (
    <article className="wrap" style={{ paddingBottom: "3rem" }}>
      <header className="page-intro">
        <p className="kicker">{t({ en: "Service", pt: "Serviço" })}</p>
        <h1>{t(service.title)}</h1>
        <p className="lede">{t(service.summary)}</p>
      </header>
      <div className="prose" style={{ marginTop: "1.2rem" }}>
        {service.body.map((para) => (
          <p key={para.en}>{t(para)}</p>
        ))}
        <p>
          <a href={`https://ciocenter.com/services/${service.slug}/`}>
            {t({ en: "Read the full page on ciocenter.com", pt: "Ler a página completa em ciocenter.com" })}
          </a>
        </p>
      </div>
      {slug === "walk-in-clinic" ? (
        <div style={{ marginTop: "1.4rem" }}>
          <h2>{t({ en: "Where walk-in is published", pt: "Onde o walk-in está publicado" })}</h2>
          <div className="hours">
            {locations
              .filter((loc) => loc.walkIn)
              .map((loc) => (
                <div key={loc.slug}>
                  <Link href={`/locations/${loc.slug}`}>{loc.name}</Link>
                  <span className="fine" style={{ maxWidth: "36rem", textAlign: "right" }}>
                    {t(loc.walkIn!)}
                  </span>
                </div>
              ))}
          </div>
          <h2>{t({ en: "Named on the walk-in page", pt: "Citados na página do walk-in" })}</h2>
          <div className="people-grid">
            {people.map((person) => (
              <Link key={person.slug} href={`/physicians/${person.slug}`} className="person-card">
                <img src={person.photo} alt="" />
                <div>
                  <strong>{person.name}</strong>
                  <p className="meta">{t(person.specialty)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
      {slug !== "walk-in-clinic" && clinics.length < locations.length ? (
        <div style={{ marginTop: "1rem" }}>
          <h2>{t({ en: "Clinics that list it", pt: "Unidades que listam o serviço" })}</h2>
          <p>{clinics.map((loc) => loc.name).join(" · ")}</p>
        </div>
      ) : null}
      <div className="inline-actions">
        <Link className="solid-btn" href="/contact">
          {t({ en: "Request an appointment", pt: "Pedir uma consulta" })}
        </Link>
        <a className="ghost-btn" href="tel:8006226575">
          800-622-6575
        </a>
      </div>
    </article>
  );
}

export function LocationsView() {
  const t = useTx();
  return (
    <div className="wrap" style={{ paddingBottom: "3rem" }}>
      <header className="page-intro">
        <p className="kicker">{t({ en: "Central Indiana", pt: "Centro de Indiana" })}</p>
        <h1>{t({ en: "Locations", pt: "Unidades" })}</h1>
        <p className="lede">
          {t({
            en: "Several clinics across central Indiana, so expert care is closer. Each page below carries the hours and services published for that office.",
            pt: "Várias unidades no centro de Indiana, para o cuidado especialista ficar mais perto. Cada página traz os horários e serviços publicados daquele consultório.",
          })}
        </p>
      </header>
      <div className="loc-grid" style={{ marginTop: "1.3rem" }}>
        {locations.map((loc) => (
          <Link key={loc.slug} href={`/locations/${loc.slug}`} className="loc-card">
            <img src={loc.image} alt="" style={{ borderRadius: "0.8rem", height: 160, width: "100%", objectFit: "cover" }} />
            <strong style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.8rem" }}>{loc.name}</strong>
            <span className="meta">{loc.address.join(", ")}</span>
            <span className="fine">{offerLine(loc, t)}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function LocationView({ slug }: { slug: string }) {
  const t = useTx();
  const loc = locationBySlug(slug);
  if (!loc) return null;
  const people = physiciansAt(loc.physicians);
  return (
    <article className="wrap" style={{ paddingBottom: "3rem" }}>
      <header className="page-intro">
        <p className="kicker">CIO</p>
        <h1>{loc.name}</h1>
        <p className="lede">{t(loc.blurb)}</p>
      </header>
      <img className="place-hero" src={loc.image} alt="" />
      {loc.note ? <p className="note" style={{ marginTop: "1rem" }}>{t(loc.note)}</p> : null}
      <div className="profile" style={{ marginTop: "1.2rem" }}>
        <div>
          <p className="kicker">{t({ en: "Visit", pt: "Visita" })}</p>
          {loc.address.map((line) => (
            <p key={line} style={{ margin: 0 }}>{line}</p>
          ))}
          <p>
            <a href={loc.phoneHref}>{loc.phone}</a>
          </p>
          <a
            className="ghost-btn"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address.join(", "))}`}
          >
            {t({ en: "Directions", pt: "Como chegar" })}
          </a>
          <div className="hours">
            <div>
              <span>{t({ en: "Office", pt: "Consultório" })}</span>
              <span>{t(loc.office)}</span>
            </div>
            <div>
              <span>Walk-in</span>
              <span>
                {loc.walkIn
                  ? t({ en: "Published — see note", pt: "Publicado — ver nota" })
                  : t({ en: "Not listed", pt: "Não listado" })}
              </span>
            </div>
          </div>
          {loc.walkIn ? <p className="fine">{t(loc.walkIn)}</p> : null}
          {loc.fax ? <p className="fine">Fax: {loc.fax}</p> : null}
          {loc.referring ? (
            <p className="fine">
              {t({ en: "Referring physicians", pt: "Médicos encaminhadores" })}: {loc.referring}
            </p>
          ) : null}
          <p className="fine">
            {t({
              en: "If you call before or after office hours with an urgent problem, the answering service relays the message to the on-call doctor. For immediate medical assistance, call 911.",
              pt: "Se você ligar fora do horário com um problema urgente, a central repassa a mensagem ao médico de plantão. Para ajuda médica imediata, ligue 911.",
            })}
          </p>
        </div>
        <div>
          <p className="kicker">{t({ en: "Services at this clinic", pt: "Serviços nesta unidade" })}</p>
          <ul>
            {loc.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
      <h2>{t({ en: "Physicians here", pt: "Médicos aqui" })}</h2>
      <div className="people-grid">
        {people.map((person) => (
          <Link key={person.slug} href={`/physicians/${person.slug}`} className="person-card">
            <img src={person.photo} alt="" />
            <div>
              <strong>{person.name}</strong>
              <p className="meta">{t(person.specialty)}</p>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
