import { contenido } from "@/content/residencia";

export default function Footer() {
  const { sitio, contacto } = contenido;
  return (
    <footer className="border-t border-borde bg-superficie-alt py-12">
      <div className="mx-auto max-w-6xl px-4 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between text-sm text-tinta-suave">
        <div>
          <p className="font-display text-xl font-semibold text-verde-fuerte">
            {sitio.nombre}
          </p>
          <p className="mt-1 text-xs text-tinta-suave">
            Comunidad para adultos independientes ({sitio.rangoEdad}) · {sitio.requisitoMovilidad}
          </p>
        </div>
        <div className="flex flex-col sm:items-end gap-1">
          <p>{contacto.direccion} · {contacto.localidad}</p>
          <p className="font-medium text-tinta">WhatsApp: {contacto.whatsappMostrado}</p>
        </div>
      </div>
    </footer>
  );
}
