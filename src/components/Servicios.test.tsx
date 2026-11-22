import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Servicios from "./Servicios";

describe("Componente Servicios", () => {
  it("renderiza los servicios destacados (Gimnasia, Lavado de ropa, Limpieza)", () => {
    render(<Servicios />);
    expect(screen.getByText("Gimnasia Terapéutica Semanal")).toBeInTheDocument();
    expect(screen.getByText("Servicio de lavado de ropa")).toBeInTheDocument();
    expect(screen.getByText("Limpieza de espacios comunes")).toBeInTheDocument();
  });

  it("separa los servicios incluidos de los consumos que se dividen", () => {
    render(<Servicios />);
    expect(screen.getByText("Incluido en el valor mensual")).toBeInTheDocument();
    expect(screen.getByText("Consumos que se dividen")).toBeInTheDocument();
  });
});
