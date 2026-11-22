export default function Seccion({
  id,
  titulo,
  bajada,
  fondo = "fondo",
  children,
}: {
  id: string;
  titulo: string;
  bajada?: string;
  fondo?: "fondo" | "superficie-alt" | "blanco" | "verde-claro";
  children: React.ReactNode;
}) {
  const fondos = {
    fondo: "bg-fondo",
    "superficie-alt": "bg-superficie-alt",
    blanco: "bg-superficie",
    "verde-claro": "bg-verde-claro/50",
  };

  return (
    <section id={id} className={`${fondos[fondo]} py-16 sm:py-24 border-b border-borde/40 last:border-b-0`}>
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-3xl sm:text-4xl text-verde-fuerte tracking-tight">
          {titulo}
        </h2>
        {bajada && (
          <p className="mt-3 max-w-2xl text-base sm:text-lg text-tinta-suave leading-relaxed">
            {bajada}
          </p>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
