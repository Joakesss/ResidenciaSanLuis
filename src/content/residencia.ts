import type { Contenido } from "./tipos";

/**
 * ============================================================
 *  CONTENIDO DE LA WEB - RESIDENCIA SL
 * ============================================================
 * Orientada a adultos entre 50 y 75 años sin problemas
 * de movilidad. Comunidad independiente, tranquila y confortable.
 *
 * Incluye:
 * - Gimnasia Terapéutica semanal a elección en gimnasio contiguo (sin traslado)
 * - Servicio de lavado de ropa
 * - Servicio de limpieza de espacios comunes
 */

export const contenido: Contenido = {
  sitio: {
    nombre: "Residencia SL",
    tagline: "Vida activa, serenidad y bienestar para adultos independientes",
    descripcion:
      "Residencia en San Luis para adultos entre 50 y 75 años sin problemas de movilidad. Habitaciones privadas amobladas, gimnasio terapéutico contiguo incluido, servicio de lavado de ropa y limpieza de espacios comunes.",
    url: "https://residencia-sl.example",
    rangoEdad: "50 a 75 años",
    requisitoMovilidad: "Autovalentes · Sin problemas de movilidad",
  },

  contacto: {
    whatsapp: "2664309446",
    whatsappMostrado: "266 430-9446",
    direccion: "Estado de Israel 2185, San Luis, Argentina",
    localidad: "San Luis Capital",
  },

  preinscripcion: {
    urlFormulario: "",
    titulo: "Vení a conocer tu nuevo espacio",
    texto:
      "Escribinos o dejanos tus datos para coordinar una visita personalizada, recorrer la residencia y las instalaciones del gimnasio terapéutico sin compromiso.",
  },

  gimnasio: {
    titulo: "Gimnasio Terapéutico y Bienestar",
    bajada:
      "Cuidar el cuerpo, la postura y la vitalidad es parte esencial de la vida cotidiana. Por eso, el gimnasio contiguo forma parte de tu experiencia en la residencia.",
    textoModelo:
      "Está incluido el servicio de GIMNASIA TERAPEUTICA SEMANAL. Disponibles actividades como: Pilates, Yoga, Fisioterapia, kinesiología, Psicomotricidad, Psicología, Podología. El gimnasio se localiza al lado de la residencia NO REQUIRIENDO TRASLADO ALGUNO.",
    destacadoUbicacion:
      "El gimnasio se localiza al lado de la residencia · NO REQUIRIENDO TRASLADO ALGUNO",
    actividades: [
      {
        id: "gimnasia-terapeutica",
        nombre: "Gimnasia Terapéutica",
        descripcion:
          "Movilidad articular activa, tonificación suave, elongación y ejercicios adaptados para potenciar la agilidad y el equilibrio.",
        icono: "gimnasio",
        frecuencia: "1 clase semanal incluida a elección",
      },
      {
        id: "pilates",
        nombre: "Pilates",
        descripcion:
          "Fortalecimiento del core, flexibilidad, alineación de columna y corrección postural en ambiente cuidado.",
        icono: "actividad",
        frecuencia: "Opción a elección",
      },
      {
        id: "yoga",
        nombre: "Yoga Suave",
        descripcion:
          "Respiración consciente, serenidad mental, flexibilidad y relajación muscular progresiva.",
        icono: "actividad",
        frecuencia: "Opción a elección",
      },
      {
        id: "kinesiologia",
        nombre: "Fisioterapia y Kinesiología",
        descripcion:
          "Tratamiento preventivo y rehabilitación de articulaciones y musculatura a cargo de profesionales de la salud.",
        icono: "corazon",
        frecuencia: "Profesionales en el lugar",
      },
      {
        id: "psicomotricidad",
        nombre: "Psicomotricidad",
        descripcion:
          "Estimulación integral de la coordinación motriz, reflejos y destreza corporal cotidiana.",
        icono: "actividad",
        frecuencia: "Opción a elección",
      },
      {
        id: "psicologia",
        nombre: "Psicología & Estimulación Cognitiva",
        descripcion:
          "Acompañamiento profesional, talleres de memoria, escucha y bienestar emocional activo.",
        icono: "mente",
        frecuencia: "Profesionales disponibles",
      },
      {
        id: "podologia",
        nombre: "Podología Terapéutica",
        descripcion:
          "Salud y confort de los pies, prevención y cuidados periódicos para una pisada segura y sin molestias.",
        icono: "salud",
        frecuencia: "Servicio disponible",
      },
    ],
    // Espacio reservado para las fotos del gimnasio que el usuario proporcionará
    fotos: [
      {
        id: "gym-1",
        tipo: "imagen",
        src: "/img/gimnasio-1.svg",
        alt: "Gimnasio terapéutico contiguo: sala de actividades y movimiento",
        etiqueta: "Espacio para foto del gimnasio: Sala de actividades",
      },
      {
        id: "gym-2",
        tipo: "imagen",
        src: "/img/gimnasio-2.svg",
        alt: "Sala de Pilates y elongación guiada",
        etiqueta: "Espacio para foto del gimnasio: Pilates y Yoga",
      },
      {
        id: "gym-3",
        tipo: "imagen",
        src: "/img/gimnasio-3.svg",
        alt: "Consultorio de Kinesiología y Fisioterapia",
        etiqueta: "Espacio para foto del gimnasio: Kinesiología y Fisioterapia",
      },
      {
        id: "gym-4",
        tipo: "imagen",
        src: "/img/gimnasio-4.svg",
        alt: "Consultorio de bienestar integral y podología",
        etiqueta: "Espacio para foto del gimnasio: Gabinete de Podología",
      },
    ],
  },

  servicios: [
    {
      id: "gimnasia-terapeutica",
      nombre: "Gimnasia Terapéutica Semanal",
      detalle:
        "Está incluido el servicio de Gimnasia Terapéutica Semanal a elección (Pilates, Yoga, etc.) en el gimnasio contiguo, sin requerir traslado alguno.",
      incluido: "si",
      icono: "gimnasio",
      destacado: true,
    },
    {
      id: "lavado-ropa",
      nombre: "Servicio de lavado de ropa",
      detalle:
        "Contamos con servicio de lavado de prendas y ropa blanca. Vos disfrutás de tu tiempo libre sin ocuparte de lavarropas ni planchado.",
      incluido: "si",
      icono: "lavado",
      destacado: true,
    },
    {
      id: "limpieza-comunes",
      nombre: "Limpieza de espacios comunes",
      detalle:
        "Personal de limpieza cuida y desinfecta a diario la sala de estar, comedor, cocina y baños comunes para una convivencia impecable.",
      incluido: "si",
      icono: "escoba",
      destacado: true,
    },
    {
      id: "internet",
      nombre: "Internet Wi-Fi de alta velocidad",
      detalle:
        "Cobertura Wi-Fi en toda la propiedad para llamadas familiares, películas, lectura y trámites personales sin interrupciones.",
      incluido: "si",
      icono: "wifi",
      destacado: false,
    },
    {
      id: "cocina",
      nombre: "Cocina y comedor totalmente equipados",
      detalle:
        "Heladera con freezer, microondas, pava eléctrica, vajilla completa y sectores cómodos para almorzar o merendar en tranquilidad.",
      incluido: "si",
      icono: "cocina",
      destacado: false,
    },
    {
      id: "amoblado",
      nombre: "Habitaciones amobladas y listas",
      detalle:
        "Cama confortable, placard espacioso, mesas de noche y buena luminosidad natural. Llegás y te instalás sin mudar muebles pesados.",
      incluido: "si",
      icono: "cama",
      destacado: false,
    },
    {
      id: "calefaccion",
      nombre: "Calefacción para el invierno",
      detalle:
        "Equipos de tiro balanceado en las habitaciones y espacios comunes para mantener una temperatura cálida y confortable todo el año.",
      incluido: "aparte",
      icono: "calefaccion",
      destacado: false,
    },
    {
      id: "luz-gas",
      nombre: "Luz y Gas",
      detalle:
        "Los consumos de luz y gas se dividen de manera transparente y equitativa entre los residentes.",
      incluido: "aparte",
      icono: "luz",
      destacado: false,
    },
  ],

  habitaciones: [
    {
      id: "privada-luminosa",
      nombre: "Habitación Privada Individual",
      descripcion:
        "Habitación individual confortable y silenciosa, amoblada con cama somier, placard empotrado y velador. Espacio sereno con excelente descanso.",
      capacidad: 1,
      ocupacion: "Individual privada",
      disponibilidad: "disponible",
      imagen: "/img/HabitacionPrivada1.jpeg",
      caracteristicas: ["Cama confortable", "Placard amplio", "Calefactor a gas", "Ventana al exterior"],
    },
    {
      id: "privada-jardin",
      nombre: "Habitación Privada con cortinas y vista verde",
      descripcion:
        "Habitación individual privada con excelente iluminación natural, placard amplio y decoración cálida en un ala muy tranquila de la casa.",
      capacidad: 1,
      ocupacion: "Individual privada",
      disponibilidad: "disponible",
      imagen: "/img/HabitacionPrivada2.jpeg",
      caracteristicas: ["Ambiente sereno", "Mucha paz", "Excelente ventilación", "Amoblada completa"],
    },
    {
      id: "suite-doble",
      nombre: "Habitación Amplia (Individual o Matrimonial)",
      descripcion:
        "La habitación más amplia de la residencia. Ideal para quien busca mayor espacio propio o para parejas autovalentes.",
      capacidad: 2,
      ocupacion: "Para 1 o 2 personas",
      disponibilidad: "disponible",
      imagen: "/img/HabitacionCompartida.jpeg",
      caracteristicas: ["Posibilidad de cama matrimonial", "Placares dobles", "Gran luminosidad", "Espaciosa"],
    },
  ],

  galeria: [
    {
      id: "habitacion-principal",
      tipo: "imagen",
      src: "/img/HabitacionPrivada2.jpeg",
      alt: "Habitación amoblada con cama confortable, lámpara de noche y cortinados",
    },
    {
      id: "entrada-casa",
      tipo: "imagen",
      src: "/img/Entrada.jpeg",
      alt: "Frente y entrada luminosa de la residencia con arbolado natural",
    },
    {
      id: "cocina-comedor",
      tipo: "imagen",
      src: "/img/Cocina.jpeg",
      alt: "Cocina equipada con vajilla, microondas, heladera y mesada amplia",
    },
    {
      id: "estar-comedor",
      tipo: "imagen",
      src: "/img/Estar.jpeg",
      alt: "Salón comedor y área de encuentro con mesas de madera",
    },
    {
      id: "habitacion-otra",
      tipo: "imagen",
      src: "/img/HabitacionPrivada1.jpeg",
      alt: "Habitación individual con dos mesas de noche y calefactor",
    },
    {
      id: "bano",
      tipo: "imagen",
      src: "/img/Banio1.jpeg",
      alt: "Baño amplio, higienizado y seguro",
    },
  ],

  entorno: [
    {
      id: "cuadra-1",
      tipo: "imagen",
      src: "/img/Entorno1.jpeg",
      alt: "Veredas amplias, llanas y arboladas de la zona",
    },
    {
      id: "cuadra-2",
      tipo: "imagen",
      src: "/img/Entorno2.jpeg",
      alt: "Frente verde y entorno residencial pacífico",
    },
    {
      id: "cuadra-3",
      tipo: "imagen",
      src: "/img/Entorno3.jpeg",
      alt: "Zona residencial con comercios de cercanía y transporte público accesible",
    },
  ],

  equipamiento: [
    { id: "cama", nombre: "Cama somier confortable y mesas de noche", uso: "propio" },
    { id: "placard", nombre: "Placard espacioso con percheros y cajoneras", uso: "propio" },
    { id: "calefaccion-hab", nombre: "Calefactor a gas de tiro balanceado", uso: "propio" },
    { id: "cortinas", nombre: "Cortinas blackout y persianas para descanso óptimo", uso: "propio" },
    { id: "iluminacion", nombre: "Iluminación cálida y lámpara de noche", uso: "propio" },

    { id: "estar-tv", nombre: "Sala de estar con sillones confortables y Smart TV", uso: "compartido" },
    { id: "cocina-vajilla", nombre: "Cocina equipada con heladera, microondas, pava eléctrica y vajilla", uso: "compartido" },
    { id: "comedor-mesa", nombre: "Comedor amplio para compartir comidas o lectura", uso: "compartido" },
    { id: "patio", nombre: "Patio / jardín soleado con bancos de descanso", uso: "compartido" },
    { id: "lavanderia-servicio", nombre: "Servicio de lavado de ropa y recambio periódico de ropa de cama", uso: "compartido" },
    { id: "limpieza-profesional", nombre: "Servicio regular de limpieza y mantenimiento de áreas compartidas", uso: "compartido" },
  ],

  normas: [
    {
      id: "convivencia",
      titulo: "Respeto mutuo y trato cordial",
      detalle:
        "Somos una comunidad reducida de adultos que comparten una etapa vital similar. El respeto, la serenidad y la amabilidad son la base de la convivencia.",
    },
    {
      id: "autonomia",
      titulo: "Independencia y libertad de horarios",
      detalle:
        "Cada residente mantiene total libertad para entrar, salir, realizar sus actividades cotidianas y paseos, siempre cuidando el descanso nocturno.",
    },
    {
      id: "descanso",
      titulo: "Horarios de silencio y descanso",
      detalle:
        "Promovemos el silencio a partir de las 22:30 hs y durante la siesta, permitiendo un descanso reparador y sin ruidos molestos.",
    },
    {
      id: "visitas",
      titulo: "Visitas de familiares y afectos",
      detalle:
        "Hijos, nietos, familiares y amigos son siempre bienvenidos en los espacios de estar y jardín durante horarios diurnos.",
    },
    {
      id: "humo",
      titulo: "Ambiente libre de humo",
      detalle:
        "Por salud, higiene y consideración hacia los demás residentes, está terminantemente prohibido fumar en interiores.",
    },
    {
      id: "cuidados",
      titulo: "Salud y autovalencia",
      detalle:
        "La residencia está orientada a personas sin problemas de movilidad que gestionan su día a día de manera independiente.",
    },
  ],

  lugaresCercanos: [
    {
      id: "salud-clinicas",
      nombre: "Centros Médicos y Farmacias",
      categoria: "salud",
      direccion: "Clínicas y centros médicos en San Luis Capital, Argentina",
      descripcion: "Consultorios médicos, farmacias de turno y centros de diagnóstico a minutos.",
      minutosCaminando: null,
    },
    {
      id: "espacios-verdes",
      nombre: "Parques y Plazas Arboladas",
      categoria: "verde",
      direccion: "Plaza Pringles y plazas arboladas, San Luis, Argentina",
      descripcion: "Espacios ideales para caminatas matutinas, bancos a la sombra y contacto con la naturaleza.",
      minutosCaminando: null,
    },
    {
      id: "comercios",
      nombre: "Supermercados y Comercios de Cercanía",
      categoria: "comercio",
      direccion: "supermercados cerca de Estado de Israel 2185, San Luis",
      descripcion: "Supermercado, verdulerías, panaderías y cajeros automáticos a pocas cuadras.",
      minutosCaminando: null,
    },
    {
      id: "centro-cultural",
      nombre: "Centro Cívico y Cafés Tradicionales",
      categoria: "cultura",
      direccion: "Centro de San Luis, Argentina",
      descripcion: "Zona céntrica, confiterías clásicas, bancos y actividades culturales y recreativas.",
      minutosCaminando: null,
    },
  ],

  faq: [
    {
      id: "perfil",
      pregunta: "¿A quién está orientada la residencia?",
      respuesta:
        "Está orientada a adultos de entre 50 y 75 años que conserven su independencia física y no tengan problemas de movilidad. Buscamos ofrecer un hogar sereno, cuidado y con compañía afín, manteniendo la autonomía de cada persona.",
    },
    {
      id: "gimnasia",
      pregunta: "¿Cómo funciona el servicio de Gimnasia Terapéutica?",
      respuesta:
        "Está incluido el servicio de GIMNASIA TERAPEUTICA SEMANAL. Disponibles actividades como: Pilates, Yoga, Fisioterapia, kinesiología, Psicomotricidad, Psicología, Podología. El gimnasio se localiza al lado de la residencia NO REQUIRIENDO TRASLADO ALGUNO. Cada residente cuenta con 1 clase semanal incluida a elección, orientada a mantener la movilidad, fuerza y bienestar.",
    },
    {
      id: "lavarropas-lavado",
      pregunta: "¿Tengo que lavar mi ropa o hay lavarropas?",
      respuesta:
        "La residencia no cuenta con lavarropas de uso individual para evitar ruidos y desgastes diarios en la casa. En su lugar, brindamos un servicio de lavado de ropa periódico para tus prendas personales y sábanas, asegurando máxima comodidad sin esfuerzo.",
    },
    {
      id: "limpieza",
      pregunta: "¿Quién realiza la limpieza?",
      respuesta:
        "El servicio de limpieza de todos los espacios comunes (sala de estar, cocina, comedor, pasillos y baños) está 100% incluido y se realiza con regularidad. Cada residente únicamente se ocupa del orden cotidiano de su habitación.",
    },
    {
      id: "bano",
      pregunta: "¿Cómo son los baños?",
      respuesta:
        "Los baños son seguros, amplios, de fácil acceso y compartidos entre un número muy reducido de residentes (máximo 3 a 4 personas), lo cual garantiza higiene impecable y disponibilidad permanente.",
    },
    {
      id: "cocina-comidas",
      pregunta: "¿Puedo cocinar en la casa?",
      respuesta:
        "Sí. La cocina está completamente equipada con heladera con freezer, microondas, pava eléctrica y utensilios. Podés preparar tus infusiones y platos favoritos o compartir momentos agradables en el comedor.",
    },
    {
      id: "visitas",
      pregunta: "¿Puedo recibir visitas de familiares?",
      respuesta:
        "Por supuesto. Hijos, nietos, familiares y amigos son siempre bienvenidos en los espacios compartidos durante el día, coordinando previamente para respetar los momentos de tranquilidad del resto de los residentes.",
    },
    {
      id: "valores-visita",
      pregunta: "¿Cómo puedo conocer la residencia y consultar los valores?",
      respuesta:
        "Escribinos directamente por WhatsApp. Coordinamos una visita presencial para mostrarte las habitaciones, los espacios comunes y el gimnasio contiguo, y brindarte toda la información actualizada sin compromiso.",
    },
  ],
};
