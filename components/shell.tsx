"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { links, phone, phoneHref } from "@/lib/data";
import { useLocale, useTx } from "@/lib/i18n";

const nav = [
  { href: "/physicians", en: "Physicians", pt: "Médicos" },
  { href: "/services", en: "Services", pt: "Serviços" },
  { href: "/locations", en: "Locations", pt: "Unidades" },
  { href: "/why-choose-cio", en: "Why CIO", pt: "Por que a CIO" },
  { href: "/blog", en: "Blog", pt: "Blog" },
];

function setTheme(next: "light" | "dark") {
  document.documentElement.classList.toggle("dark", next === "dark");
  window.localStorage.setItem("cio-theme", next);
}

export function Shell({ children }: { children: ReactNode }) {
  const path = usePathname();
  const { locale, setLocale } = useLocale();
  const t = useTx();
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const read = () => setDark(document.documentElement.classList.contains("dark"));
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <>
      <a className="skip" href="#content">
        {t({ en: "Skip to content", pt: "Ir para o conteúdo" })}
      </a>
      <div className="study-ribbon">
        {t({
          en: "Design study by dglxss. Not the official Central Indiana Orthopedics site. ",
          pt: "Estudo de design da dglxss. Não é o site oficial da Central Indiana Orthopedics. ",
        })}
        <a href={links.source}>{t({ en: "Live site", pt: "Site oficial" })}</a>
      </div>
      <header className={`site-header${stuck ? " is-stuck" : ""}`}>
        <div className="header-row">
          <Link href="/" className="logo-link" aria-label="Central Indiana Orthopedics">
            <img
              src={dark ? "/media/logo-white.png" : "/media/logo.png"}
              alt="Central Indiana Orthopedics"
            />
          </Link>
          <nav className="nav-desktop" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={path.startsWith(item.href) ? "page" : undefined}
              >
                {t(item)}
              </Link>
            ))}
          </nav>
          <div className="tools">
            <a className="phone-pill" href={phoneHref}>
              {phone}
            </a>
            <div className="seg" role="group" aria-label={t({ en: "Language", pt: "Idioma" })}>
              <button type="button" aria-pressed={locale === "en"} onClick={() => setLocale("en")}>
                EN
              </button>
              <button type="button" aria-pressed={locale === "pt"} onClick={() => setLocale("pt")}>
                PT
              </button>
            </div>
            <div className="seg" role="group" aria-label={t({ en: "Theme", pt: "Tema" })}>
              <button type="button" aria-pressed={!dark} onClick={() => setTheme("light")}>
                {t({ en: "Light", pt: "Claro" })}
              </button>
              <button type="button" aria-pressed={dark} onClick={() => setTheme("dark")}>
                {t({ en: "Dark", pt: "Escuro" })}
              </button>
            </div>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-label={t({ en: "Menu", pt: "Menu" })}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "×" : "☰"}
            </button>
          </div>
        </div>
        {open ? (
          <nav className="mobile-panel" aria-label="Mobile">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {t(item)}
              </Link>
            ))}
            <Link href="/services/walk-in-clinic">{t({ en: "Walk-in clinic", pt: "Walk-in" })}</Link>
            <Link href="/services/surgery-revision">
              {t({ en: "Joint replacement", pt: "Prótese articular" })}
            </Link>
            <Link href="/contact">{t({ en: "Contact", pt: "Contato" })}</Link>
            <a href={phoneHref}>{phone}</a>
          </nav>
        ) : null}
      </header>
      <main id="content">{children}</main>
      <footer className="site-footer">
        <div className="footer-inner footer-grid">
          <div>
            <p className="kicker">CIO</p>
            <p className="lede" style={{ marginTop: 0 }}>
              {t({
                en: "Central Indiana Orthopedics. Six clinics. Since 1950. Because life moves.",
                pt: "Central Indiana Orthopedics. Seis unidades. Desde 1950. Porque a vida se move.",
              })}
            </p>
            <a href={phoneHref}>{phone}</a>
            <p className="fine">
              {t({
                en: "Main line, Monday–Thursday 8:00 a.m.–5:00 p.m., Friday 8:00 a.m.–4:00 p.m. After hours, the same number reaches the on-call physician for urgent problems. Emergencies: 911.",
                pt: "Linha principal, segunda a quinta, 8h–17h, sexta, 8h–16h. Fora do horário, o mesmo número aciona o médico de plantão em casos urgentes. Emergências: 911.",
              })}
            </p>
          </div>
          <div>
            <p className="kicker">{t({ en: "Clinics", pt: "Unidades" })}</p>
            <Link href="/locations/anderson">Anderson</Link>
            <Link href="/locations/elwood">Elwood</Link>
            <Link href="/locations/fishers">Fishers</Link>
            <Link href="/locations/marion">Marion</Link>
            <Link href="/locations/muncie">Muncie</Link>
            <Link href="/locations/zionsville">Zionsville</Link>
          </div>
          <div>
            <p className="kicker">{t({ en: "Patients", pt: "Pacientes" })}</p>
            <Link href="/services/walk-in-clinic">{t({ en: "Walk-in", pt: "Walk-in" })}</Link>
            <Link href="/services/surgery-revision">
              {t({ en: "Joint replacement", pt: "Prótese articular" })}
            </Link>
            <Link href="/contact">{t({ en: "Request an appointment", pt: "Pedir uma consulta" })}</Link>
            <a href={links.portal}>{t({ en: "Patient portal", pt: "Portal do paciente" })}</a>
            <a href={links.pay}>{t({ en: "Pay a bill", pt: "Pagar uma conta" })}</a>
            <Link href="/referring">{t({ en: "Referring physicians", pt: "Médicos encaminhadores" })}</Link>
            <Link href="/careers">{t({ en: "Careers", pt: "Carreiras" })}</Link>
            <Link href="/privacy">{t({ en: "Privacy", pt: "Privacidade" })}</Link>
            <Link href="/accessibility">{t({ en: "Accessibility", pt: "Acessibilidade" })}</Link>
            <a href={links.nondiscrimination}>
              {t({ en: "Notice of non-discrimination", pt: "Aviso de não discriminação" })}
            </a>
          </div>
        </div>
        <div className="footer-inner">
          <p className="built">{t({ en: "Built by dglxss", pt: "Feito pela dglxss" })}</p>
          <p className="fine">
            {t({
              en: "A Path A pitch. Names, phones, hours, services and photographs are transplanted from ciocenter.com. This study does not book visits or take payment.",
              pt: "Um pitch Path A. Nomes, telefones, horários, serviços e fotografias foram transplantados de ciocenter.com. Este estudo não marca consultas nem recebe pagamento.",
            })}
          </p>
          <p className="fine">
            <a href={links.facebook}>Facebook</a>
            {" · "}
            <a href={links.instagram}>Instagram</a>
            {" · "}
            <a href={links.youtube}>YouTube</a>
            {" · "}
            <a href={links.x}>X</a>
          </p>
        </div>
      </footer>
    </>
  );
}
