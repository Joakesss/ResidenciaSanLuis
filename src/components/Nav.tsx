"use client";

import { useState } from "react";

const SECCIONES = [
  { href: "#gimnasio", label: "Gimnasio Terapéutico", destacado: true },
  { href: "#servicios", label: "Servicios" },
  { href: "#habitaciones", label: "Habitaciones" },
  { href: "#galeria", label: "Fotos" },
  { href: "#equipamiento", label: "Equipamiento" },
  { href: "#normas", label: "Convivencia" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#faq", label: "Preguntas" },
];

export default function Nav() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-superficie/95 backdrop-blur border-b border-borde">
      <nav className="mx-auto max-w-6xl px-4 h-18 flex items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center">
          <span className="font-display text-2xl text-verde-fuerte font-semibold tracking-tight">
            Residencia SL
          </span>
        </a>

        <ul className="hidden xl:flex items-center gap-5 text-sm font-medium">
          {SECCIONES.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className={`transition-colors py-1 ${
                  s.destacado
                    ? "text-verde-fuerte font-semibold hover:text-verde-medio"
                    : "text-tinta-suave hover:text-verde-fuerte"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#preinscripcion"
            className="hidden sm:inline-block rounded-full bg-verde-fuerte px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-verde-oscuro transition-colors"
          >
            Coordinar visita
          </a>
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-mobile"
            aria-label="Menú principal"
            className="xl:hidden rounded-lg p-2.5 text-tinta hover:bg-superficie-alt focus:outline-none focus:ring-2 focus:ring-verde-fuerte"
          >
            <span aria-hidden="true" className="block w-6 border-t-2 border-current" />
            <span aria-hidden="true" className="block w-6 border-t-2 border-current mt-1.5" />
            <span aria-hidden="true" className="block w-6 border-t-2 border-current mt-1.5" />
          </button>
        </div>
      </nav>

      {abierto && (
        <ul
          id="menu-mobile"
          className="xl:hidden border-t border-borde bg-superficie px-4 py-4 space-y-2 shadow-lg"
        >
          {SECCIONES.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                onClick={() => setAbierto(false)}
                className={`block rounded-lg px-3 py-2.5 text-base ${
                  s.destacado
                    ? "font-semibold text-verde-fuerte bg-verde-claro/60"
                    : "text-tinta hover:bg-superficie-alt"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#preinscripcion"
              onClick={() => setAbierto(false)}
              className="block text-center rounded-full bg-verde-fuerte py-3 text-white font-medium shadow-sm"
            >
              Coordinar visita
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
