import { contenido } from "@/content/residencia";
import { linkWhatsapp } from "@/lib/links";

const MENSAJE =
  "¡Hola! Me comunico desde la web para coordinar una visita a Residencia SL y conocer las instalaciones.";

export default function Preinscripcion() {
  const { preinscripcion, contacto } = contenido;

  const hayFormulario = preinscripcion.urlFormulario.trim().length > 0;
  const destino = hayFormulario
    ? preinscripcion.urlFormulario
    : linkWhatsapp(contacto.whatsapp, MENSAJE);

  const etiqueta = hayFormulario
    ? "Completar formulario de visita"
    : "Coordinar visita por WhatsApp";

  return (
    <section
      id="preinscripcion"
      className="bg-gradient-to-br from-verde-fuerte to-[#0a211a] py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <span className="inline-block rounded-full bg-white/15 border border-white/25 px-4 py-1.5 text-xs sm:text-sm font-medium tracking-wide text-white uppercase backdrop-blur">
          Coordinación personalizada
        </span>
        <h2 className="mt-4 font-display text-3xl sm:text-5xl font-medium leading-tight">
          {preinscripcion.titulo}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/90 leading-relaxed font-light">
          {preinscripcion.texto}
        </p>
        <a
          href={destino}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-white px-9 py-4 font-semibold text-verde-fuerte shadow-xl hover:bg-verde-claro transition-all transform hover:-translate-y-0.5 text-lg"
        >
          {etiqueta}
        </a>
        <p className="mt-5 text-sm text-white/70">
          Sin compromiso ni costo previo. Te recibimos cordialmente para mostrarte la casa y el gimnasio.
        </p>
      </div>
    </section>
  );
}
