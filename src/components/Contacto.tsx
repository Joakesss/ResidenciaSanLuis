import { contenido } from "@/content/residencia";
import { linkWhatsapp, linkComoLlegar } from "@/lib/links";
import Seccion from "./Seccion";
import Icono from "./Icono";

const MENSAJE =
  "¡Hola! Quería realizar una consulta sobre Residencia SL.";

export default function Contacto() {
  const { contacto } = contenido;
  return (
    <Seccion
      id="contacto"
      titulo="Estamos a tu disposición"
      bajada="La forma más ágil y directa de consultar cualquier detalle o agendar tu visita es escribirnos por WhatsApp."
      fondo="fondo"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <a
          href={linkWhatsapp(contacto.whatsapp, MENSAJE)}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-3xl border border-borde bg-superficie p-8 shadow-sm hover:border-verde-fuerte hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-verde-claro text-verde-fuerte">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23a8.23 8.23 0 010 16.47z" />
                </svg>
              </span>
              <span className="text-xs font-semibold text-verde-fuerte uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                Escribir ahora →
              </span>
            </div>
            <h3 className="mt-5 font-display text-2xl text-verde-fuerte font-medium">
              Atención por WhatsApp
            </h3>
            <p className="mt-2 text-2xl font-bold text-tinta">
              {contacto.whatsappMostrado}
            </p>
          </div>
          <p className="mt-4 text-sm text-tinta-suave">
            Tocá para abrir una conversación directa. Respondemos todos los días.
          </p>
        </a>

        <a
          href={linkComoLlegar("Mi ubicación actual", contacto.direccion)}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-3xl border border-borde bg-superficie p-8 shadow-sm hover:border-verde-fuerte hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-verde-claro text-verde-fuerte">
                <Icono nombre="mapa" className="h-6 w-6" />
              </span>
              <span className="text-xs font-semibold text-verde-fuerte uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                Ver mapa →
              </span>
            </div>
            <h3 className="mt-5 font-display text-2xl text-verde-fuerte font-medium">
              Dirección de la Residencia
            </h3>
            <p className="mt-2 text-xl font-semibold text-tinta">
              {contacto.direccion}
            </p>
          </div>
          <p className="mt-4 text-sm text-tinta-suave">
            {contacto.localidad} · Tocá para ver cómo llegar paso a paso.
          </p>
        </a>
      </div>
    </Seccion>
  );
}
