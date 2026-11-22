/**
 * Iconos inline vectoriales, sin librerías externas para máxima velocidad y peso ligero.
 */
const PATHS: Record<string, string> = {
  check: "M5 13l4 4L19 7",
  mas: "M12 5v14M5 12h14",
  pregunta: "M9.1 9a3 3 0 015.8 1c0 2-3 3-3 3M12 17h.01",
  wifi: "M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01",
  escoba: "M19 5l-7 7M8 21l-3-3 6-6 3 3-6 6zM14 10l3-3",
  luz: "M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z",
  agua: "M12 2.7s6 6.4 6 10.3a6 6 0 11-12 0c0-3.9 6-10.3 6-10.3z",
  gas: "M12 2s5 5 5 9a5 5 0 11-10 0c0-4 5-9 5-9zM12 16a2 2 0 002-2c0-1.5-2-3-2-3s-2 1.5-2 3a2 2 0 002 2z",
  calefaccion: "M4 20h16M6 20V9M10 20V9M14 20V9M18 20V9M4 9h16M8 5c0-1 1-1 1-2M12 5c0-1 1-1 1-2M16 5c0-1 1-1 1-2",
  cocina: "M4 10h16v7a3 3 0 01-3 3H7a3 3 0 01-3-3v-7zM2 10h20M9 6V4M15 6V4M12 7V3",
  cama: "M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6M3 18h18M3 18v2M21 18v2M7 10V7a1 1 0 011-1h3v4",
  // Nuevos iconos para salud, bienestar, gimnasio y lavandería
  gimnasio: "M6.5 6.5h11M6.5 17.5h11M3 9.5h3.5v5H3zM17.5 9.5H21v5h-3.5zM6.5 12h11",
  actividad: "M12 4a2 2 0 100-4 2 2 0 000 4zM7 11l3-2 2 2 4-3M10 14l-1 6M14 14l2 6",
  corazon: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z",
  mente: "M12 2a8 8 0 00-8 8c0 3.5 2.5 6.5 6 7.6V20h4v-2.4c3.5-1.1 6-4.1 6-7.6a8 8 0 00-8-8z",
  salud: "M12 4v16m-8-8h16",
  lavado: "M3 6a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm9 5a4 4 0 100 8 4 4 0 000-8zm-5-3h.01m3 0h.01",
  camara: "M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2zM12 17a4 4 0 100-8 4 4 0 000 8z",
  estrella: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  reloj: "M12 22a10 10 0 100-20 10 10 0 000 20zm0-15v6l4 2",
  mapa: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 13a3 3 0 100-6 3 3 0 000 6z",
};

export default function Icono({
  nombre,
  className = "h-6 w-6",
}: {
  nombre: string;
  className?: string;
}) {
  const d = PATHS[nombre] ?? PATHS.check;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
