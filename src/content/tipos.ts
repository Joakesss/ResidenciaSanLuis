export type Disponibilidad = "disponible" | "ocupada" | "consultar";

export interface Habitacion {
  id: string;
  nombre: string;
  descripcion: string;
  /** Cuántas personas se alojan en esta habitación */
  capacidad: number;
  /** Texto de ocupación para la tarjeta. Ej: "Individual privada", "Para 1 o 2 personas" */
  ocupacion?: string;
  disponibilidad: Disponibilidad;
  /** Ruta pública, ej. "/img/habitacion-suite.svg" */
  imagen: string;
  caracteristicas?: string[];
}

/**
 * "si"          = confirmado, incluido en el valor mensual.
 * "aparte"      = confirmado, se paga por separado del canon base.
 * "a-confirmar" = todavía en definición.
 */
export type EstadoInclusion = "si" | "aparte" | "a-confirmar";

export interface Servicio {
  id: string;
  nombre: string;
  detalle: string;
  incluido: EstadoInclusion;
  /** Nombre del icono inline */
  icono: string;
  /** true = se muestra destacado con badge / color distintivo */
  destacado: boolean;
}

export interface ActividadTerapeutica {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
  frecuencia?: string;
}

export interface ItemEquipamiento {
  id: string;
  nombre: string;
  /** "propio" = uso exclusivo en habitación; "compartido" = uso común en la casa */
  uso: "propio" | "compartido";
}

export interface Norma {
  id: string;
  titulo: string;
  detalle: string;
}

export interface LugarCercano {
  id: string;
  nombre: string;
  categoria: "salud" | "verde" | "comercio" | "cultura" | "transporte";
  direccion: string;
  descripcion: string;
  minutosCaminando: number | null;
}

export interface PreguntaFrecuente {
  id: string;
  pregunta: string;
  respuesta: string;
}

export interface MediaGaleria {
  id: string;
  tipo: "imagen" | "video";
  src: string;
  alt: string;
  poster?: string;
  etiqueta?: string;
}

export interface GimnasioTerapeuticoInfo {
  titulo: string;
  bajada: string;
  textoModelo: string;
  destacadoUbicacion: string;
  actividades: ActividadTerapeutica[];
  fotos: MediaGaleria[];
}

export interface Contenido {
  sitio: {
    nombre: string;
    tagline: string;
    descripcion: string;
    url: string;
    rangoEdad: string;
    requisitoMovilidad: string;
  };
  contacto: {
    whatsapp: string;
    whatsappMostrado: string;
    direccion: string;
    localidad: string;
  };
  preinscripcion: {
    urlFormulario: string;
    titulo: string;
    texto: string;
  };
  gimnasio: GimnasioTerapeuticoInfo;
  servicios: Servicio[];
  habitaciones: Habitacion[];
  galeria: MediaGaleria[];
  entorno: MediaGaleria[];
  equipamiento: ItemEquipamiento[];
  normas: Norma[];
  lugaresCercanos: LugarCercano[];
  faq: PreguntaFrecuente[];
}
