"use client";

/**
 * Reach atlas — marker, popup and theme-aware map behavior adapted from MapCN.
 * https://github.com/AnmolSaini16/mapcn
 *
 * MIT License
 *
 * Copyright (c) 2025 Anmoldeep Singh
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Tiles are OpenFreeMap public styles (commercial use permitted).
 * Map data © OpenStreetMap contributors. Style © OpenMapTiles.
 */

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Map as MlMap, Marker } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { locations, needs } from "@/lib/data";
import { useTheme, useTx } from "@/lib/i18n";
import type { NeedId } from "@/lib/types";

const STYLES = {
  light: "https://tiles.openfreemap.org/styles/positron",
  dark: "https://tiles.openfreemap.org/styles/dark",
};

export function ClinicAtlas({ initial = "fishers" }: { initial?: string }) {
  const t = useTx();
  const theme = useTheme();
  const [need, setNeed] = useState<NeedId | "all">("all");
  const [selected, setSelected] = useState(initial);
  const mapNode = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MlMap | null>(null);
  const markers = useRef<Marker[]>([]);
  const [ready, setReady] = useState(false);

  const visible = locations.filter((loc) => need === "all" || loc.offers.includes(need));
  const current = locations.find((loc) => loc.slug === selected) ?? visible[0] ?? locations[0];

  useEffect(() => {
    let cancel = false;
    let map: MlMap | null = null;

    (async () => {
      const maplibre = await import("maplibre-gl");
      if (cancel || !mapNode.current) return;
      const dark = document.documentElement.classList.contains("dark");
      map = new maplibre.Map({
        container: mapNode.current,
        style: dark ? STYLES.dark : STYLES.light,
        center: [-85.75, 40.22],
        zoom: 7.15,
        cooperativeGestures: true,
        attributionControl: {},
      });
      map.addControl(new maplibre.NavigationControl({ showCompass: false }), "top-right");
      map.on("load", () => {
        if (!cancel) setReady(true);
      });
      mapRef.current = map;
    })();

    return () => {
      cancel = true;
      markers.current.forEach((marker) => marker.remove());
      markers.current = [];
      map?.remove();
      mapRef.current = null;
      setReady(false);
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;
    const next = theme === "dark" ? STYLES.dark : STYLES.light;
    map.setStyle(next);
  }, [theme, ready]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;
    let cancel = false;

    const place = async () => {
      const maplibre = await import("maplibre-gl");
      if (cancel || !mapRef.current) return;
      markers.current.forEach((marker) => marker.remove());
      markers.current = locations.map((loc) => {
        const on = need === "all" || loc.offers.includes(need);
        const el = document.createElement("button");
        el.type = "button";
        el.className = `pin${on ? "" : " is-dim"}${loc.slug === current.slug ? " is-on" : ""}`;
        el.title = loc.name;
        el.setAttribute("aria-label", loc.name);
        el.addEventListener("click", () => setSelected(loc.slug));
        return new maplibre.Marker({ element: el }).setLngLat([loc.lng, loc.lat]).addTo(map);
      });
    };

    const onStyle = () => {
      void place();
    };
    map.on("style.load", onStyle);
    if (map.isStyleLoaded()) onStyle();
    return () => {
      cancel = true;
      map.off("style.load", onStyle);
    };
  }, [need, current.slug, ready, theme]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready || !current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = { center: [current.lng, current.lat] as [number, number], zoom: 9.2 };
    if (reduce) map.jumpTo(target);
    else map.flyTo({ ...target, duration: 700 });
  }, [current, ready]);

  return (
    <div className="atlas">
      <div className="need-row" role="group" aria-label={t({ en: "Filter clinics", pt: "Filtrar unidades" })}>
        {needs.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={need === item.id}
            onClick={() => {
              setNeed(item.id);
              if (item.id !== "all") {
                const next = locations.find((loc) => loc.offers.includes(item.id as NeedId));
                if (next) setSelected(next.slug);
              }
            }}
          >
            {t(item.label)}
          </button>
        ))}
      </div>
      <div className="atlas-stage">
        <div className="map-shell">
          <div ref={mapNode} className="map" />
        </div>
        <aside className="dossier">
          <p className="kicker">{t({ en: "Published clinic", pt: "Unidade publicada" })}</p>
          <h3>{current.name}</h3>
          <p className="meta">{current.address.join(", ")}</p>
          <p>
            <a href={current.phoneHref}>{current.phone}</a>
          </p>
          <p className="fine">
            {current.walkIn
              ? t(current.walkIn)
              : t({
                  en: "No walk-in hours are published for this clinic.",
                  pt: "Não há horário de walk-in publicado para esta unidade.",
                })}
          </p>
          <p className="fine">
            {t({ en: "Office: ", pt: "Consultório: " })}
            {t(current.office)}
          </p>
          <div className="clinic-list">
            {visible.map((loc) => (
              <button
                key={loc.slug}
                type="button"
                aria-pressed={loc.slug === current.slug}
                onClick={() => setSelected(loc.slug)}
              >
                {loc.name}
              </button>
            ))}
          </div>
          <Link className="ghost-btn" href={`/locations/${current.slug}`} style={{ marginTop: "0.6rem" }}>
            {t({ en: "Open this clinic", pt: "Abrir esta unidade" })}
          </Link>
          <p className="fine">
            {t({
              en: "Hours are the ones printed on ciocenter.com, including the walk-in week of 09/28–10/02 where it differs. This map is not a live open/closed clock.",
              pt: "Os horários são os impressos em ciocenter.com, inclusive a semana de walk-in de 28/09 a 02/10 quando difere. Este mapa não é um relógio ao vivo de aberto ou fechado.",
            })}
          </p>
        </aside>
      </div>
    </div>
  );
}
