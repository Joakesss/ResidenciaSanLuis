"use client";

import { useState } from "react";
import { contenido } from "@/content/residencia";
import Seccion from "./Seccion";

export default function Faq() {
  const [abierta, setAbierta] = useState<string | null>(null);

  return (
    <Seccion
      id="faq"
      titulo="Preguntas frecuentes"
      bajada="Respuestas claras a las dudas más habituales sobre nuestra comunidad, servicios y dinámica cotidiana."
      fondo="superficie-alt"
    >
      <ul className="mx-auto max-w-3xl space-y-3.5">
        {contenido.faq.map((p) => {
          const activa = abierta === p.id;
          return (
            <li
              key={p.id}
              className="overflow-hidden rounded-2xl border border-borde bg-superficie shadow-sm"
            >
              <button
                type="button"
                onClick={() => setAbierta(activa ? null : p.id)}
                aria-expanded={activa}
                aria-controls={`faq-${p.id}`}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-fondo/50"
              >
                <span className="font-semibold text-tinta text-base sm:text-lg">
                  {p.pregunta}
                </span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-2xl text-verde-fuerte font-light transition-transform duration-200 ${
                    activa ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {activa && (
                <div
                  id={`faq-${p.id}`}
                  className="border-t border-borde px-6 py-5 text-base text-tinta-suave leading-relaxed bg-fondo/40"
                >
                  {p.respuesta}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </Seccion>
  );
}
