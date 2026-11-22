import { contenido } from "@/content/residencia";
import type { EstadoInclusion, Servicio } from "@/content/tipos";
import Seccion from "./Seccion";
import Icono from "./Icono";

const GRUPOS: Record<
  EstadoInclusion,
  { titulo: string; aclaracion: string; marca: string; claseMarca: string }
> = {
  si: {
    titulo: "Incluido en el valor mensual",
    aclaracion: "Todo esto forma parte de tu estadía sin cargos adicionales.",
    marca: "check",
    claseMarca: "bg-verde-fuerte text-white",
  },
  aparte: {
    titulo: "Consumos que se dividen",
    aclaracion: "Luz y gas se dividen de manera transparente entre los residentes.",
    marca: "mas",
    claseMarca: "bg-tinta-suave text-white",
  },
  "a-confirmar": {
    titulo: "A coordinar",
    aclaracion: "Servicios opcionales o a coordinar según tus preferencias.",
    marca: "pregunta",
    claseMarca: "bg-verde-medio text-white",
  },
};

function Grupo({
  estado,
  servicios,
}: {
  estado: EstadoInclusion;
  servicios: Servicio[];
}) {
  const grupo = GRUPOS[estado];
  const idTitulo = `servicios-${estado}`;
  return (
    <section
      aria-labelledby={idTitulo}
      className="rounded-3xl border border-borde bg-superficie p-6 sm:p-8 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <span
          className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${grupo.claseMarca}`}
        >
          <Icono nombre={grupo.marca} className="h-4 w-4" />
        </span>
        <h3 id={idTitulo} className="font-display text-2xl text-verde-fuerte font-medium">
          {grupo.titulo}
        </h3>
      </div>
      <p className="mt-2 text-sm text-tinta-suave">{grupo.aclaracion}</p>

      <ul className="mt-6 divide-y divide-borde">
        {servicios.map((s) => (
          <li key={s.id} className="flex gap-4 py-4.5 last:pb-0">
            <span
              className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                s.destacado
                  ? "bg-verde-fuerte text-white shadow-sm"
                  : "bg-verde-claro text-verde-fuerte"
              }`}
            >
              <Icono nombre={s.icono} className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="font-semibold text-tinta text-base sm:text-lg">
                  {s.nombre}
                </h4>
                {s.destacado && (
                  <span className="rounded-full bg-verde-claro px-2.5 py-0.5 text-xs font-semibold text-verde-fuerte border border-verde/20">
                    Destacado
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-tinta-suave leading-relaxed">
                {s.detalle}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Servicios() {
  const porEstado = (estado: EstadoInclusion) =>
    contenido.servicios.filter((s) => s.incluido === estado);
  const incluidos = porEstado("si");
  const resto = (["aparte", "a-confirmar"] as const)
    .map((estado) => ({ estado, servicios: porEstado(estado) }))
    .filter((g) => g.servicios.length > 0);

  return (
    <Seccion
      id="servicios"
      titulo="Servicios incluidos y organización"
      bajada="Claridad y tranquilidad desde el primer día: todo lo que cubre tu estadía en Residencia SL."
      fondo="superficie-alt"
    >
      <div className="grid items-start gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <Grupo estado="si" servicios={incluidos} />
        </div>
        <div className="grid gap-6 lg:col-span-2">
          {resto.map((g) => (
            <Grupo key={g.estado} estado={g.estado} servicios={g.servicios} />
          ))}
        </div>
      </div>
    </Seccion>
  );
}
