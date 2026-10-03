"use client";

import Link from "next/link";
import { ClinicAtlas } from "@/components/atlas";
import { phone, phoneHref, physicians } from "@/lib/data";
import { useTx } from "@/lib/i18n";

export function HomeView() {
  const t = useTx();
  return (
    <>
      <section className="wrap hero">
        <div>
          <p className="kicker">{t({ en: "Central Indiana · since 1950", pt: "Centro de Indiana · desde 1950" })}</p>
          <h1>{t({ en: "Because life moves.", pt: "Porque a vida se move." })}</h1>
          <p className="lede">
            {t({
              en: "When you have an orthopedic issue, come see the specialists, not only in orthopedics but in the art of individualized patient care. We’ll work to get you moving again.",
              pt: "Quando você tem uma questão ortopédica, venha ver os especialistas — não só em ortopedia, mas na arte do cuidado individual. Vamos trabalhar para você voltar a se mover.",
            })}
          </p>
          <p className="lede">
            {t({
              en: "Listening to your story and understanding your goals are part of treatment at Central Indiana Orthopedics. For more than 75 years the practice has cared for Anderson, Elwood, Fishers, Marion, Muncie, Zionsville, Indianapolis and the towns around them.",
              pt: "Ouvir a sua história e entender os seus objetivos fazem parte do tratamento na Central Indiana Orthopedics. Há mais de 75 anos a prática cuida de Anderson, Elwood, Fishers, Marion, Muncie, Zionsville, Indianápolis e das cidades ao redor.",
            })}
          </p>
          <div className="hero-actions">
            <Link className="solid-btn" href="/services/walk-in-clinic">
              {t({ en: "Walk-in clinics", pt: "Clínicas walk-in" })}
            </Link>
            <Link className="ghost-btn" href="/services/surgery-revision">
              {t({ en: "Joint replacement", pt: "Prótese articular" })}
            </Link>
            <a className="ghost-btn" href={phoneHref}>
              {phone}
            </a>
          </div>
        </div>
        <div className="hero-frame">
          <img src="/media/hero.jpg" alt={t({ en: "Published photograph from Central Indiana Orthopedics", pt: "Fotografia publicada da Central Indiana Orthopedics" })} />
          <p className="hero-caption">
            {t({
              en: "Six clinics. One phone line for most of them: 800-622-6575. Elwood answers at 765-608-3668.",
              pt: "Seis unidades. Um telefone para a maioria: 800-622-6575. Elwood atende em 765-608-3668.",
            })}
          </p>
        </div>
      </section>

      <section className="wrap section" style={{ paddingTop: "1.5rem" }}>
        <div className="door-grid">
          {[
            { href: "/physicians", en: "Physicians", pt: "Médicos", d: { en: "Twenty-two published specialists, with the faces from the practice directory.", pt: "Vinte e dois especialistas publicados, com os rostos do diretório da prática." } },
            { href: "/services", en: "Services", pt: "Serviços", d: { en: "From walk-in and imaging to Mako hip and knee replacement.", pt: "Do walk-in e da imagem à prótese de quadril e joelho com Mako." } },
            { href: "/locations", en: "Locations", pt: "Unidades", d: { en: "Anderson, Elwood, Fishers, Marion, Muncie, Zionsville.", pt: "Anderson, Elwood, Fishers, Marion, Muncie e Zionsville." } },
            { href: "/why-choose-cio", en: "Why CIO", pt: "Por que a CIO", d: { en: "Patient stories, as titled on the live site, plus the published mission.", pt: "Histórias de pacientes, com os títulos do site oficial, e a missão publicada." } },
          ].map((door) => (
            <Link key={door.href} href={door.href} className="door">
              <strong>{t(door)}</strong>
              <span>{t(door.d)}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div className="split">
          <Link href="/services/walk-in-clinic">
            <img src="/media/walkin.png" alt="" />
            <div>
              <p className="kicker">Walk-in</p>
              <h2>{t({ en: "Same day, no appointment.", pt: "No mesmo dia, sem hora marcada." })}</h2>
              <p>
                {t({
                  en: "Anderson, Fishers, Muncie, Marion and Zionsville. Faster than the ER, with imaging and casting onsite. The practice cites an average savings of $2,000.",
                  pt: "Anderson, Fishers, Muncie, Marion e Zionsville. Mais rápido que o pronto-socorro, com imagem e gesso no local. A prática cita uma economia média de US$ 2.000.",
                })}
              </p>
            </div>
          </Link>
          <Link href="/services/surgery-revision">
            <img src="/media/joint.jpg" alt="" />
            <div>
              <p className="kicker">{t({ en: "Joint replacement", pt: "Prótese articular" })}</p>
              <h2>{t({ en: "Hip, knee, shoulder, ankle.", pt: "Quadril, joelho, ombro, tornozelo." })}</h2>
              <p>
                {t({
                  en: "Replacement and revision by board-certified surgeons. Mako SmartRobotics for hip and knee at the Fishers and Muncie surgery centers.",
                  pt: "Prótese e revisão com cirurgiões certificados. Mako SmartRobotics para quadril e joelho nos centros cirúrgicos de Fishers e Muncie.",
                })}
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="wrap section" id="reach">
        <div className="section-head">
          <div>
            <p className="kicker">{t({ en: "Reach", pt: "Alcance" })}</p>
            <h2>{t({ en: "Which clinic actually does this.", pt: "Qual unidade de fato faz isso." })}</h2>
          </div>
          <p className="lede" style={{ margin: 0 }}>
            {t({
              en: "Filter the six published locations by the services listed on each clinic page. Elwood is not a walk-in site. Physical therapy is published at Fishers, Muncie and Anderson.",
              pt: "Filtre as seis unidades publicadas pelos serviços listados em cada página. Elwood não é walk-in. Fisioterapia está publicada em Fishers, Muncie e Anderson.",
            })}
          </p>
        </div>
        <ClinicAtlas />
      </section>

      <section className="wrap section">
        <div className="section-head">
          <div>
            <p className="kicker">{t({ en: "Physicians", pt: "Médicos" })}</p>
            <h2>{t({ en: "The directory, still familiar.", pt: "O diretório, ainda reconhecível." })}</h2>
          </div>
          <Link href="/physicians">{t({ en: "All physicians", pt: "Todos os médicos" })}</Link>
        </div>
        <div className="roster">
          {physicians.map((person) => (
            <Link key={person.slug} href={`/physicians/${person.slug}`} className="person">
              <img src={person.photo} alt="" />
              <div>
                <strong style={{ fontSize: "1.25rem" }}>{person.name}</strong>
                <em>{t(person.specialty)}</em>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div className="split">
          <article>
            <img src="/media/care.jpg" alt="" />
            <div>
              <p className="kicker">{t({ en: "Under one roof", pt: "Sob o mesmo teto" })}</p>
              <h2>{t({ en: "Care for the whole orthopedic life.", pt: "Cuidado para toda a vida ortopédica." })}</h2>
              <p>
                {t({
                  en: "The mission is compassionate, expert care for each patient for all of their life: walk-in, surgery center and physical therapy where those services are published.",
                  pt: "A missão é cuidado compassivo e especialista para cada paciente, por toda a vida: walk-in, centro cirúrgico e fisioterapia onde esses serviços estão publicados.",
                })}
              </p>
            </div>
          </article>
          <article>
            <img src="/media/sponsor.jpg" alt="" />
            <div>
              <p className="kicker">{t({ en: "Sponsorships", pt: "Patrocínios" })}</p>
              <h2>{t({ en: "The towns where patients live.", pt: "As cidades onde os pacientes vivem." })}</h2>
              <p>
                {t({
                  en: "Supporting the communities where patients live and work matters to the practice. It sponsors local nonprofits that promote health and education.",
                  pt: "Apoiar as comunidades onde os pacientes vivem e trabalham importa para a prática. Ela patrocina organizações locais que promovem saúde e educação.",
                })}
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
