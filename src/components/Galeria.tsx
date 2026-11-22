"use client";

import { useEffect, useState, useCallback } from "react";
import { contenido } from "@/content/residencia";
import Seccion from "./Seccion";

export default function Galeria() {
  const items = contenido.galeria;
  const [indice, setIndice] = useState<number | null>(null);
  const abierto = indice !== null;

  const cerrar = useCallback(() => setIndice(null), []);
  const mover = useCallback(
    (delta: number) =>
      setIndice((i) => (i === null ? null : (i + delta + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (!abierto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar();
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [abierto, cerrar, mover]);

  const actual = indice !== null ? items[indice] : null;

  return (
    <Seccion
      id="galeria"
      titulo="Conocé la residencia"
      bajada="Espacios diseñados para convivir, relajarse y disfrutar del día a día con total confort."
      fondo="blanco"
    >
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
        {items.map((item, i) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setIndice(i)}
              aria-label={`Ampliar: ${item.alt}`}
              className="group block w-full overflow-hidden rounded-2xl border border-borde focus:outline-none focus:ring-2 focus:ring-verde-fuerte shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {actual && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={actual.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          onClick={cerrar}
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
            <p className="mt-4 rounded-xl bg-black/60 px-5 py-2.5 text-center text-sm font-medium text-white/95 backdrop-blur">
              {actual.alt}
            </p>
          </div>

          <button
            type="button"
            onClick={cerrar}
            aria-label="Cerrar"
            className="absolute right-5 top-5 rounded-full bg-white/20 hover:bg-white/30 px-4 py-2 text-2xl font-bold leading-none text-white transition-colors"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              mover(-1);
            }}
            aria-label="Anterior"
            className="absolute left-4 rounded-full bg-white/20 hover:bg-white/30 px-4 py-3 text-xl font-bold text-white transition-colors"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              mover(1);
            }}
            aria-label="Siguiente"
            className="absolute right-4 rounded-full bg-white/20 hover:bg-white/30 px-4 py-3 text-xl font-bold text-white transition-colors"
          >
            ›
          </button>
        </div>
      )}
    </Seccion>
  );
}
