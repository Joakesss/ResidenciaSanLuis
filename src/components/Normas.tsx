import { contenido } from "@/content/residencia";
import Seccion from "./Seccion";

export default function Normas() {
  return (
    <Seccion
      id="normas"
      titulo="Pautas de convivencia serena"
      bajada="Principios simples y claros para preservar la armonía, la independencia personal y la tranquilidad de toda la comunidad."
      fondo="fondo"
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {contenido.normas.map((n, i) => (
          <li
            key={n.id}
            className="flex flex-col rounded-3xl border border-borde bg-superficie p-6 sm:p-7 shadow-sm"
          >
            <span
              aria-hidden="true"
              className="font-display text-2xl font-bold text-verde-medio"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-display text-xl text-verde-fuerte font-medium">
              {n.titulo}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-tinta-suave leading-relaxed flex-1">
              {n.detalle}
            </p>
          </li>
        ))}
      </ul>
    </Seccion>
  );
}
