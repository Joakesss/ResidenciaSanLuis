import { contenido } from "@/content/residencia";
import type { ItemEquipamiento } from "@/content/tipos";
import Seccion from "./Seccion";

function Lista({ items }: { items: ItemEquipamiento[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((e) => (
        <li key={e.id} className="flex items-start gap-3 text-tinta-suave text-base">
          <span
            aria-hidden="true"
            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-verde-claro text-verde-fuerte text-xs font-bold mt-0.5"
          >
            ✓
          </span>
          <span>{e.nombre}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Equipamiento() {
  const propio = contenido.equipamiento.filter((e) => e.uso === "propio");
  const compartido = contenido.equipamiento.filter((e) => e.uso === "compartido");

  return (
    <Seccion
      id="equipamiento"
      titulo="Comodidades y equipamiento completo"
      bajada="La residencia viene completamente amoblada y lista para habitar. Traé tus efectos personales y disfrutá desde el primer día."
      fondo="superficie-alt"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-borde bg-superficie p-7 sm:p-8 shadow-sm">
          <h3 className="font-display text-2xl text-verde-fuerte font-medium">
            En tu habitación
          </h3>
          <p className="mt-1 text-sm text-tinta-suave">
            De uso exclusivo para tu privacidad y descanso óptimo.
          </p>
          <Lista items={propio} />
        </div>

        <div className="rounded-3xl border border-borde bg-superficie p-7 sm:p-8 shadow-sm">
          <h3 className="font-display text-2xl text-verde-fuerte font-medium">
            Espacios compartidos y servicios
          </h3>
          <p className="mt-1 text-sm text-tinta-suave">
            Compartidos entre una comunidad reducida (máximo <strong className="text-tinta">4 personas</strong>).
            Incluyen servicio de limpieza y servicio de lavado de ropa.
          </p>
          <Lista items={compartido} />
        </div>
      </div>
    </Seccion>
  );
}
