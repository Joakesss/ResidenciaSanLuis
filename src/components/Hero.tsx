import { contenido } from "@/content/residencia";
import { linkWhatsapp } from "@/lib/links";

const MENSAJE =
  "¡Hola! Vi la web de Residencia SL y quería consultar por una habitación y conocer las actividades.";

export default function Hero() {
  const { sitio, contacto, preinscripcion } = contenido;
  return (
    <section id="inicio" className="relative pt-18">
      <div className="relative min-h-[88vh] flex items-center">
        {/* Foto de cabecera cálida, confortable y adecuada para la temática de la residencia */}
        <img
          src="/img/HabitacionPrivada2.jpeg"
          alt="Habitación privada cálida, luminosa y confortable en Residencia SL"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Degradado verde bosque profundo que aporta serenidad y garantiza contraste óptimo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a211a]/95 via-[#103228]/80 to-[#1b4d3e]/50" />

        <div className="relative mx-auto max-w-6xl px-4 py-20 text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-4 py-1.5 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs sm:text-sm font-medium tracking-wide text-white uppercase">
              {sitio.rangoEdad} · {sitio.requisitoMovilidad}
            </span>
          </div>

          <h1 className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl max-w-3xl leading-tight font-medium tracking-tight">
            {sitio.tagline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/95 leading-relaxed font-light">
            Un hogar diseñado para disfrutar de tu independencia con la tranquilidad de tener
            todo resuelto:{" "}
            <strong className="font-semibold text-white underline decoration-emerald-400/80 decoration-2 underline-offset-4">
              gimnasia terapéutica semanal a elección en gimnasio contiguo
            </strong>
            , servicio de lavado de ropa y limpieza de espacios comunes.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs sm:text-sm text-white/90">
            <span className="rounded-lg bg-black/25 border border-white/15 px-3 py-1.5 backdrop-blur">
              ✓ Gimnasia terapéutica semanal incluida
            </span>
            <span className="rounded-lg bg-black/25 border border-white/15 px-3 py-1.5 backdrop-blur">
              ✓ Gimnasio contiguo sin traslado alguno
            </span>
            <span className="rounded-lg bg-black/25 border border-white/15 px-3 py-1.5 backdrop-blur">
              ✓ Servicio de lavado de ropa
            </span>
            <span className="rounded-lg bg-black/25 border border-white/15 px-3 py-1.5 backdrop-blur">
              ✓ Limpieza de áreas comunes
            </span>
          </div>

          <div className="mt-9 flex flex-wrap gap-4 items-center">
            <a
              href="#preinscripcion"
              className="rounded-full bg-white px-8 py-4 font-semibold text-verde-fuerte shadow-xl hover:bg-verde-claro transition-all transform hover:-translate-y-0.5 text-base sm:text-lg"
            >
              {preinscripcion.titulo}
            </a>
            <a
              href={linkWhatsapp(contacto.whatsapp, MENSAJE)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-white/80 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur hover:bg-white hover:text-verde-fuerte transition-colors text-base"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
