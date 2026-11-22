"use client";

import { useState } from "react";
import { contenido } from "@/content/residencia";
import Seccion from "./Seccion";
import Icono from "./Icono";

export default function Gimnasio() {
  const { gimnasio } = contenido;
  const [fotoActiva, setFotoActiva] = useState<number | null>(null);

  const fotos = gimnasio.fotos;
  const actual = fotoActiva !== null ? fotos[fotoActiva] : null;

  return (
    <Seccion
      id="gimnasio"
      titulo={gimnasio.titulo}
      bajada={gimnasio.bajada}
      fondo="verde-claro"
    >
      {/* Tarjeta de anuncio destacado con el texto de modelo */}
      <div className="relative overflow-hidden rounded-3xl border border-verde-medio/40 bg-gradient-to-br from-verde-fuerte to-[#0a211a] p-8 sm:p-11 text-white shadow-lg">
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-1.5 text-xs sm:text-sm font-medium tracking-wide text-white uppercase backdrop-blur">
            <Icono nombre="estrella" className="h-4 w-4 text-emerald-300" />
            Servicio de Bienestar Incluido
          </div>

          <h3 className="mt-5 font-display text-2xl sm:text-4xl text-white font-medium leading-snug">
            {gimnasio.textoModelo}
          </h3>

          <div className="mt-6 flex flex-wrap items-center gap-4 pt-5 border-t border-white/15">
            <div className="flex items-center gap-2 text-sm sm:text-base text-emerald-100 font-medium">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white font-bold text-xs">
                ✓
              </span>
              1 clase semanal a elección 100% incluida
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base text-emerald-100 font-medium">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white font-bold text-xs">
                ✓
              </span>
              Al lado de la residencia: sin necesidad de traslados
            </div>
          </div>
        </div>

        {/* Círculo decorativo de fondo */}
        <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      </div>

      {/* Grilla de actividades terapéuticas disponibles */}
      <div className="mt-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl text-verde-fuerte font-medium">
              Actividades y disciplinas disponibles
            </h3>
            <p className="mt-1 text-sm sm:text-base text-tinta-suave">
              Profesionales especializados que acompañan tu salud articular, postura y equilibrio.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 self-start text-xs font-semibold text-verde-fuerte bg-superficie px-3.5 py-1.5 rounded-full border border-borde shadow-sm">
            <Icono nombre="check" className="h-4 w-4 text-verde-medio" />
            Clase semanal a elección
          </span>
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gimnasio.actividades.map((act) => (
            <li
              key={act.id}
              className="rounded-2xl border border-borde bg-superficie p-6 shadow-sm hover:border-verde-medio transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-verde-claro text-verde-fuerte">
                    <Icono nombre={act.icono} className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-superficie-alt px-3 py-1 text-xs font-medium text-tinta-suave border border-borde/60">
                    {act.frecuencia}
                  </span>
                </div>
                <h4 className="mt-4 font-display text-xl text-verde-fuerte font-medium">
                  {act.nombre}
                </h4>
                <p className="mt-2 text-sm text-tinta-suave leading-relaxed">
                  {act.descripcion}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* APARTADO DEL GIMNASIO: LUGAR RESERVADO PARA FOTOS */}
      <div className="mt-16 rounded-3xl border border-borde bg-superficie p-8 sm:p-10 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-borde pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-verde-medio">
              <Icono nombre="camara" className="h-4 w-4" />
              Instalaciones del Gimnasio
            </div>
            <h3 className="mt-1 font-display text-2xl sm:text-3xl text-verde-fuerte font-medium">
              Espacio de Gimnasia Terapéutica
            </h3>
            <p className="mt-1 text-sm sm:text-base text-tinta-suave">
              Sector contiguo a la residencia, equipado para el entrenamiento preventivo y rehabilitación.
            </p>
          </div>
          <div className="rounded-full bg-verde-claro border border-verde-medio/20 px-4 py-2 text-xs text-verde-fuerte font-medium flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-verde-medio" />
            <span>{fotos.length} fotos de las instalaciones</span>
          </div>
        </div>

        {/* Grilla de fotos del gimnasio */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {fotos.map((foto, idx) => (
            <div
              key={foto.id}
              className="group relative overflow-hidden rounded-2xl border border-borde bg-fondo flex flex-col cursor-pointer transition-all hover:border-verde-medio hover:shadow-md"
              onClick={() => setFotoActiva(idx)}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-verde-claro/40">
                <img
                  src={foto.src}
                  alt={foto.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-verde-oscuro/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-verde-fuerte shadow">
                    Ampliar
                  </span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs font-semibold text-verde-fuerte">
                  {foto.etiqueta ?? foto.alt}
                </p>
                <p className="mt-2 text-[11px] text-tinta-suave/80 uppercase tracking-wide">
                  Foto {idx + 1} de {fotos.length}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox para ampliar las fotos del gimnasio */}
      {actual && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={actual.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setFotoActiva(null)}
        >
          <div
            className="relative max-h-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={actual.src}
              alt={actual.alt}
              className="max-h-[80vh] w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-4 rounded-xl bg-black/60 backdrop-blur px-5 py-3 text-center text-sm text-white">
              <p className="font-medium">{actual.etiqueta ?? actual.alt}</p>
              <p className="mt-1 text-xs text-white/70">
                Gimnasio terapéutico contiguo a la residencia
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setFotoActiva(null)}
            aria-label="Cerrar vista"
            className="absolute right-5 top-5 rounded-full bg-white/20 hover:bg-white/30 px-4 py-2 text-2xl font-bold text-white transition-colors"
          >
            ×
          </button>
        </div>
      )}
    </Seccion>
  );
}
