import { contenido } from "@/content/residencia";
import { linkWhatsapp } from "@/lib/links";
import type { Disponibilidad } from "@/content/tipos";
import Seccion from "./Seccion";

const BADGE: Record<Disponibilidad, { texto: string; clase: string }> = {
  disponible: { texto: "Disponible", clase: "bg-verde-claro text-verde-fuerte border border-verde/20 font-semibold" },
  ocupada: { texto: "Ocupada", clase: "bg-superficie-alt text-tinta-suave border border-borde" },
  consultar: { texto: "Consultar", clase: "bg-superficie text-tinta border border-borde font-medium" },
};

export default function Habitaciones() {
  const { habitaciones, contacto } = contenido;
  return (
    <Seccion
      id="habitaciones"
      titulo="Habitaciones privadas y confortables"
      bajada="Espacios amoblados, luminosos y con excelente descanso. Diseñados para disfrutar de tu privacidad y tranquilidad cotidiana."
      fondo="fondo"
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {habitaciones.map((h) => {
          const badge = BADGE[h.disponibilidad];
          return (
            <li key={h.id}>
              <article className="h-full overflow-hidden rounded-3xl border border-borde bg-superficie shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="relative h-56 w-full overflow-hidden bg-verde-claro/30">
                  <img
                    src={h.imagen}
                    alt={h.nombre}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <span
                    className={`absolute top-4 right-4 rounded-full px-3.5 py-1 text-xs shadow-sm backdrop-blur ${badge.clase}`}
                  >
                    {badge.texto}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-display text-2xl text-verde-fuerte font-medium">
                    {h.nombre}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wider font-semibold text-verde-medio">
                    {h.ocupacion ?? `Para ${h.capacidad} persona`}
                  </p>
                  <p className="mt-3 text-sm text-tinta-suave leading-relaxed flex-1">
                    {h.descripcion}
                  </p>

                  {h.caracteristicas && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {h.caracteristicas.map((c, i) => (
                        <span
                          key={i}
                          className="rounded-lg bg-superficie-alt border border-borde/60 px-2.5 py-1 text-xs text-tinta-suave font-medium"
                        >
                          ✓ {c}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={linkWhatsapp(
                      contacto.whatsapp,
                      `¡Hola! Quería consultar disponibilidad y valores de la ${h.nombre.toLowerCase()} en Residencia SL.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block rounded-full border-2 border-verde-fuerte py-3 text-center text-sm font-semibold text-verde-fuerte hover:bg-verde-fuerte hover:text-white transition-colors shadow-sm"
                  >
                    Consultar valores por WhatsApp
                  </a>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </Seccion>
  );
}
