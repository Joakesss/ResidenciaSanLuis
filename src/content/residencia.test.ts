import { describe, it, expect } from "vitest";
import { contenido } from "./residencia";
import { linkWhatsapp } from "@/lib/links";

describe("contenido de Residencia SL", () => {
  it("el nombre del sitio es estrictamente Residencia SL", () => {
    expect(contenido.sitio.nombre).toBe("Residencia SL");
  });

  it("está orientada a adultos entre 50 y 75 años sin problemas de movilidad", () => {
    expect(contenido.sitio.rangoEdad).toContain("50 a 75");
    expect(contenido.sitio.requisitoMovilidad.toLowerCase()).toContain("sin problemas de movilidad");
  });

  it("incluye el servicio de gimnasia terapéutica semanal con el texto de modelo", () => {
    const modelo =
      "Está incluido el servicio de GIMNASIA TERAPEUTICA SEMANAL. Disponibles actividades como: Pilates, Yoga, Fisioterapia, kinesiología, Psicomotricidad, Psicología, Podología. El gimnasio se localiza al lado de la residencia NO REQUIRIENDO TRASLADO ALGUNO.";
    expect(contenido.gimnasio.textoModelo).toBe(modelo);
  });

  it("las actividades terapéuticas incluyen Pilates, Yoga, Kinesiología, Psicomotricidad, Psicología y Podología", () => {
    const nombres = contenido.gimnasio.actividades.map((a) => a.nombre.toLowerCase());
    expect(nombres.some((n) => n.includes("pilates"))).toBe(true);
    expect(nombres.some((n) => n.includes("yoga"))).toBe(true);
    expect(nombres.some((n) => n.includes("kinesiología") || n.includes("kinesiologia") || n.includes("fisioterapia"))).toBe(true);
    expect(nombres.some((n) => n.includes("psicomotricidad"))).toBe(true);
    expect(nombres.some((n) => n.includes("psicología") || n.includes("psicologia"))).toBe(true);
    expect(nombres.some((n) => n.includes("podología") || n.includes("podologia"))).toBe(true);
  });

  it("tiene espacio reservado para fotos en el apartado del gimnasio", () => {
    expect(contenido.gimnasio.fotos.length).toBeGreaterThanOrEqual(4);
    for (const foto of contenido.gimnasio.fotos) {
      expect(foto.src).toMatch(/^\/img\/gimnasio-.+\.svg$/);
    }
  });

  it("incluye servicio de lavado de ropa y limpieza de espacios comunes", () => {
    const lavado = contenido.servicios.find((s) => s.id === "lavado-ropa");
    const limpieza = contenido.servicios.find((s) => s.id === "limpieza-comunes");
    expect(lavado).toBeDefined();
    expect(lavado?.incluido).toBe("si");
    expect(limpieza).toBeDefined();
    expect(limpieza?.incluido).toBe("si");
  });

  it("NO incluye lavarropas individual en la residencia sino servicio de lavado", () => {
    expect(contenido.equipamiento.some((e) => e.nombre.toLowerCase().includes("lavarropas"))).toBe(false);
  });

  it("el teléfono genera un enlace de WhatsApp válido", () => {
    expect(linkWhatsapp(contenido.contacto.whatsapp)).toBe("https://wa.me/5492664309446");
  });

  it("todas las habitaciones tienen disponibilidad e imagen válida", () => {
    expect(contenido.habitaciones.length).toBeGreaterThan(0);
    for (const h of contenido.habitaciones) {
      expect(["disponible", "ocupada", "consultar"]).toContain(h.disponibilidad);
      expect(h.imagen).toMatch(/^\/img\/.+/);
    }
  });
});
