"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { links, locations, phone, phoneHref, posts, stories, values } from "@/lib/data";
import { useTx } from "@/lib/i18n";

export function WhyView() {
  const t = useTx();
  return (
    <div className="wrap" style={{ paddingBottom: "3rem" }}>
      <header className="page-intro">
        <p className="kicker">{t({ en: "Why choose CIO", pt: "Por que escolher a CIO" })}</p>
        <h1>{t({ en: "Patients tell it.", pt: "Os pacientes contam." })}</h1>
        <p className="lede">
          {t({
            en: "You have choices in orthopedic care, and deciding who to trust with your family is a serious decision. Instead of the practice telling you why, the live site lets patients share. The titles below are theirs. This study does not invent quotations.",
            pt: "Você tem escolhas no cuidado ortopédico, e decidir em quem confiar a família é uma decisão séria. Em vez de a prática dizer por quê, o site oficial deixa os pacientes falarem. Os títulos abaixo são deles. Este estudo não inventa citações.",
          })}
        </p>
      </header>
      <div className="story-grid" style={{ marginTop: "1.3rem" }}>
        {stories.map((story) => (
          <article key={story.title} className="story">
            {story.image ? (
              <img src={story.image} alt="" style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: "0.8rem" }} />
            ) : null}
            <h2 style={{ fontSize: "1.55rem", marginTop: "0.7rem" }}>{story.title}</h2>
            <a href="https://ciocenter.com/why-choose-cio/">
              {t({ en: "Story on the live site", pt: "História no site oficial" })}
            </a>
          </article>
        ))}
      </div>
      <section className="section">
        <p className="kicker">{t({ en: "Vision, mission, values", pt: "Visão, missão, valores" })}</p>
        <h2>{t({ en: "What the practice prints about itself.", pt: "O que a prática publica sobre si." })}</h2>
        <p>
          <strong>{t({ en: "Vision. ", pt: "Visão. " })}</strong>
          {t({
            en: "Be recognized as central Indiana’s premier, independent orthopedic provider.",
            pt: "Ser reconhecida como a principal provedora ortopédica independente do centro de Indiana.",
          })}
        </p>
        <p>
          <strong>{t({ en: "Mission. ", pt: "Missão. " })}</strong>
          {t({
            en: "Provide compassionate and expert care for each patient for all of their life.",
            pt: "Oferecer cuidado compassivo e especialista a cada paciente, por toda a vida.",
          })}
        </p>
        <div className="card-grid">
          {values.map((value) => (
            <article key={value.title.en} className="panel" style={{ padding: "1rem" }}>
              <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.6rem", margin: "0 0 0.3rem" }}>
                {t(value.title)}
              </h3>
              <p className="meta">{t(value.body)}</p>
            </article>
          ))}
        </div>
        <p>
          <a href={links.vision}>{t({ en: "Vision page on ciocenter.com", pt: "Página de visão em ciocenter.com" })}</a>
        </p>
      </section>
    </div>
  );
}

export function ContactView() {
  const t = useTx();
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="wrap" style={{ paddingBottom: "3rem" }}>
      <header className="page-intro">
        <p className="kicker">{t({ en: "Contact", pt: "Contato" })}</p>
        <h1>{t({ en: "Call, or leave a note.", pt: "Ligue, ou deixe um recado." })}</h1>
        <p className="lede">
          {t({
            en: "To schedule, call 800-622-6575 or use the form. This pitch does not send the note to the practice. For a real appointment, use the phone or the official site.",
            pt: "Para agendar, ligue 800-622-6575 ou use o formulário. Este pitch não envia o recado à prática. Para uma consulta de verdade, use o telefone ou o site oficial.",
          })}
        </p>
      </header>
      <div className="profile" style={{ marginTop: "1rem" }}>
        <form className="form" onSubmit={onSubmit}>
          <label>
            {t({ en: "Name", pt: "Nome" })}
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            {t({ en: "Phone", pt: "Telefone" })}
            <input name="phone" required autoComplete="tel" />
          </label>
          <label>
            {t({ en: "Preferred clinic", pt: "Unidade preferida" })}
            <select name="clinic" defaultValue="fishers">
              {locations.map((loc) => (
                <option key={loc.slug} value={loc.slug}>
                  {loc.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            {t({ en: "What do you need?", pt: "Do que você precisa?" })}
            <textarea name="need" rows={4} required />
          </label>
          <button className="solid-btn" type="submit">
            {t({ en: "Hold this note on the page", pt: "Guardar este recado na página" })}
          </button>
          {sent ? (
            <p className="note">
              {t({
                en: `Noted in this browser only. Nothing was transmitted. Call ${phone} and the scheduling team will help. Same-day injuries: the walk-in clinics, not this form.`,
                pt: `Anotado só neste navegador. Nada foi enviado. Ligue ${phone} e a equipe de agenda ajuda. Lesão no mesmo dia: as clínicas walk-in, não este formulário.`,
              })}
            </p>
          ) : null}
        </form>
        <div>
          <p className="kicker">{t({ en: "Other lines", pt: "Outras linhas" })}</p>
          <p>{t({ en: "Patient portal", pt: "Portal do paciente" })} — <a href={links.portal}>athenahealth</a></p>
          <p>{t({ en: "Pay a bill", pt: "Pagar uma conta" })} — 765-213-3789 · <a href={links.pay}>InstaMed</a></p>
          <p>{t({ en: "Insurance and billing plans", pt: "Plano de saúde e faturas" })} — 765-608-3694</p>
          <p>{t({ en: "Referrals", pt: "Encaminhamentos" })} — 765-608-3625</p>
          <p>{t({ en: "Work-related injuries", pt: "Lesões de trabalho" })} — 765-608-3955</p>
          <p className="fine">
            {t({
              en: "The contact page on the live site says walk-in is available at all CIO locations. The walk-in hours page lists Anderson, Fishers, Marion, Muncie and Zionsville, and does not list Elwood. This study follows the hours page.",
              pt: "A página de contato do site oficial diz que o walk-in existe em todas as unidades. A página de horários lista Anderson, Fishers, Marion, Muncie e Zionsville, e não lista Elwood. Este estudo segue a página de horários.",
            })}
          </p>
          <a className="solid-btn" href={phoneHref}>{phone}</a>
        </div>
      </div>
    </div>
  );
}

export function BlogView() {
  const t = useTx();
  return (
    <div className="wrap" style={{ paddingBottom: "3rem" }}>
      <header className="page-intro">
        <p className="kicker">Blog</p>
        <h1>{t({ en: "Recent writing.", pt: "Textos recentes." })}</h1>
        <p className="lede">
          {t({
            en: "Titles and opening lines from the live journal. The full articles stay on ciocenter.com.",
            pt: "Títulos e primeiras linhas do jornal oficial. Os artigos completos continuam em ciocenter.com.",
          })}
        </p>
      </header>
      <div className="blog-list" style={{ marginTop: "1.2rem" }}>
        {posts.map((post) => (
          <article key={post.href} className="panel">
            <p className="kicker">{post.date}</p>
            <h2 style={{ fontSize: "1.8rem" }}>
              <a href={post.href}>{t(post.title)}</a>
            </h2>
            <p className="meta">{t(post.excerpt)}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function CareersView() {
  const t = useTx();
  return (
    <div className="wrap prose" style={{ paddingBottom: "3rem" }}>
      <header className="page-intro">
        <p className="kicker">{t({ en: "Careers", pt: "Carreiras" })}</p>
        <h1>{t({ en: "Work at CIO.", pt: "Trabalhe na CIO." })}</h1>
      </header>
      <p>
        {t({
          en: "Central Indiana Orthopedics describes a culture of integrity, teamwork and mutual respect, with professional growth and work-life balance, and no evening, weekend or holiday shifts.",
          pt: "A Central Indiana Orthopedics descreve uma cultura de integridade, trabalho em equipe e respeito mútuo, com crescimento profissional e equilíbrio, e sem plantões à noite, no fim de semana ou em feriados.",
        })}
      </p>
      <p>
        {t({
          en: "CIO is a partner practice of OrthoAlliance, part of SCA Health. Openings listed on the SCA Health careers site for Central Indiana Orthopedics are jobs at CIO, not a general application to SCA Health.",
          pt: "A CIO é uma prática parceira da OrthoAlliance, parte da SCA Health. As vagas no site de carreiras da SCA Health para a Central Indiana Orthopedics são empregos na CIO, não uma candidatura geral à SCA Health.",
        })}
      </p>
      <div className="inline-actions">
        <a className="solid-btn" href={links.careers}>
          {t({ en: "View CIO openings", pt: "Ver vagas da CIO" })}
        </a>
        <a className="ghost-btn" href={links.remote}>
          {t({ en: "Remote roles", pt: "Vagas remotas" })}
        </a>
        <a className="ghost-btn" href={links.vision}>
          {t({ en: "Mission and values", pt: "Missão e valores" })}
        </a>
      </div>
      <p className="fine">
        <a href={links.orthoalliance}>OrthoAlliance</a>
        {" · "}
        <a href={links.sca}>SCA Health</a>
        {" · "}
        <a href="https://ciocenter.com/careers/">ciocenter.com/careers</a>
        {" · "}
        <a href="https://ciocenter.com/physician-opportunities/">
          {t({ en: "Physician opportunities", pt: "Oportunidades para médicos" })}
        </a>
      </p>
    </div>
  );
}

export function ReferringView() {
  const t = useTx();
  return (
    <div className="wrap prose" style={{ paddingBottom: "3rem" }}>
      <header className="page-intro">
        <p className="kicker">{t({ en: "Referring physicians", pt: "Médicos encaminhadores" })}</p>
        <h1>{t({ en: "Send a patient.", pt: "Encaminhe um paciente." })}</h1>
      </header>
      <p>
        {t({
          en: "Thank you for entrusting Central Indiana Orthopedics with your patients. To speak with a referral specialist, call the referral department at 765-608-3625. Print and return the referral form linked on the official page, or use your own form. Once the information arrives, the practice says it will contact the patient within 24 hours to schedule.",
          pt: "Obrigado por confiar seus pacientes à Central Indiana Orthopedics. Para falar com um especialista em encaminhamento, ligue para o departamento no 765-608-3625. Imprima e devolva o formulário ligado na página oficial, ou use o seu. Quando a informação chega, a prática diz que contata o paciente em até 24 horas para agendar.",
        })}
      </p>
      <p>Fax: 765-608-3659</p>
      <p>
        {t({
          en: "Physical therapy referrals for Fishers and Muncie use the forms on the official referring page. Patients who want an appointment should call 800-622-6575.",
          pt: "Encaminhamentos de fisioterapia para Fishers e Muncie usam os formulários da página oficial. Pacientes que querem consulta devem ligar 800-622-6575.",
        })}
      </p>
      <a className="solid-btn" href={links.referring}>
        {t({ en: "Forms on the official site", pt: "Formulários no site oficial" })}
      </a>
    </div>
  );
}

export function PrivacyView() {
  const t = useTx();
  return (
    <div className="wrap prose" style={{ paddingBottom: "3rem" }}>
      <header className="page-intro">
        <p className="kicker">{t({ en: "Privacy", pt: "Privacidade" })}</p>
        <h1>{t({ en: "How information is used.", pt: "Como a informação é usada." })}</h1>
      </header>
      <p>
        {t({
          en: "The official notice says it describes how medical information about you may be used and disclosed and how you may gain access to it, and asks you to review it carefully. Questions go to the practice directly. The binding notice is the one published by Central Indiana Orthopedics, not this design study.",
          pt: "O aviso oficial diz que descreve como informação médica sobre você pode ser usada e divulgada e como você pode ter acesso a ela, e pede que você leia com atenção. Dúvidas vão direto à prática. O aviso que vale é o publicado pela Central Indiana Orthopedics, não este estudo de design.",
        })}
      </p>
      <a className="solid-btn" href={links.privacy}>
        {t({ en: "View the privacy policy", pt: "Ver a política de privacidade" })}
      </a>
    </div>
  );
}

export function AccessView() {
  const t = useTx();
  return (
    <div className="wrap prose" style={{ paddingBottom: "3rem" }}>
      <header className="page-intro">
        <p className="kicker">{t({ en: "Accessibility", pt: "Acessibilidade" })}</p>
        <h1>{t({ en: "The site should be usable.", pt: "O site deve ser utilizável." })}</h1>
      </header>
      <p>
        {t({
          en: "The practice says it is committed to access for people with disabilities and will help if you need assistance with the website or a document. This study keeps that commitment in view: text can scale, controls show focus, the map does not trap the page scroll, and motion respects a reduced-motion setting. The home arrival plays once each visit and then stays still.",
          pt: "A prática diz que se compromete com o acesso de pessoas com deficiência e ajuda se você precisar de apoio no site ou em um documento. Este estudo mantém esse compromisso à vista: o texto pode crescer, os controles mostram foco, o mapa não prende a rolagem da página, e o movimento respeita a redução de movimento. A chegada da página inicial acontece uma vez por visita e depois permanece parada.",
        })}
      </p>
      <p>
        {t({
          en: "Their published page also notes relative font sizes, readable content if stylesheets fail, links that make sense out of context, and descriptive content images. For help with the official site, use the contact published there.",
          pt: "A página publicada também cita tamanhos relativos de fonte, conteúdo legível se as folhas de estilo falharem, links que fazem sentido fora de contexto e imagens de conteúdo descritas. Para ajuda no site oficial, use o contato publicado lá.",
        })}
      </p>
      <Link className="ghost-btn" href="/contact">
        {t({ en: "Contact this study", pt: "Falar com este estudo" })}
      </Link>{" "}
      <a className="solid-btn" href={links.accessibility}>
        {t({ en: "Official accessibility page", pt: "Página oficial de acessibilidade" })}
      </a>
    </div>
  );
}
