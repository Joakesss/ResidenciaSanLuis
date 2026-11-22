import { contenido } from "@/content/residencia";
import { linkMapaEmbed, linkComoLlegar } from "@/lib/links";
import Seccion from "./Seccion";

const ETIQUETA: Record<string, string> = {
  salud: "Salud y Cuidados",
  verde: "Espacios Verdes",
  comercio: "Comercios de cercanía",
  cultura: "Paseos y Centro",
  transporte: "Transporte",
};

export default function Ubicacion() {
  const { contacto, lugaresCercanos, entorno } = contenido;

  return (
    <Seccion
      id="ubicacion"
      titulo="Ubicación privilegiada en San Luis"
      bajada="En un barrio residencial apacible, seguro y arbolado, con comercios de proximidad y centros médicos a pocos minutos."
      fondo="blanco"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-3xl border border-borde shadow-sm">
            <iframe
              src={linkMapaEmbed(contacto.direccion)}
              title={`Mapa de ubicación: ${contacto.direccion}`}
              className="h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-4 font-display text-xl text-verde-fuerte font-medium">
            {contacto.direccion}
          </p>
          <p className="text-sm text-tinta-suave">
            {contacto.localidad} · Barrio residencial arbolado y tranquilo
          </p>
          <a
            href={linkComoLlegar("Mi ubicación actual", contacto.direccion)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full bg-verde-fuerte px-7 py-3.5 text-sm font-semibold text-white shadow hover:bg-verde-oscuro transition-colors"
          >
            Cómo llegar a la residencia en Google Maps
          </a>
        </div>

        <div>
          <h3 className="font-display text-2xl text-verde-fuerte font-medium">
            Puntos de interés cercanos
          </h3>
          <ul className="mt-5 space-y-3.5">
            {lugaresCercanos.map((lugar) => (
              <li
                key={lugar.id}
                className="rounded-2xl border border-borde bg-fondo p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex-1">
                    <span className="text-xs uppercase tracking-wider font-semibold text-verde-medio">
                      {ETIQUETA[lugar.categoria] ?? lugar.categoria}
                    </span>
                    <h4 className="font-display text-lg text-tinta font-medium mt-0.5">
                      {lugar.nombre}
                    </h4>
                    <p className="mt-1 text-sm text-tinta-suave">
                      {lugar.descripcion}
                    </p>
                    {lugar.minutosCaminando !== null && (
                      <p className="mt-1.5 text-xs font-semibold text-verde-medio">
                        {lugar.minutosCaminando} min caminando
                      </p>
                    )}
                  </div>
                  <a
                    href={linkComoLlegar(contacto.direccion, lugar.direccion)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-full border border-verde-fuerte px-4 py-2 text-xs font-semibold text-verde-fuerte hover:bg-verde-fuerte hover:text-white transition-colors"
                  >
                    Cómo llegar
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {entorno.length > 0 && (
        <div className="mt-14">
          <h3 className="font-display text-2xl text-verde-fuerte font-medium">
            Así es el entorno y la cuadra
          </h3>
          <p className="mt-1 text-sm text-tinta-suave">
            Veredas parejas, arbolado y un ambiente sereno para caminar seguro.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {entorno.map((foto) => (
              <li
                key={foto.id}
                className="overflow-hidden rounded-2xl border border-borde shadow-sm"
              >
                <img
                  src={foto.src}
                  alt={foto.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </Seccion>
  );
}
