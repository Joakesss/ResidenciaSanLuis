import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Gimnasio from "./Gimnasio";

describe("Componente Gimnasio", () => {
  it("renderiza el título y el texto modelo de gimnasia terapéutica semanal", () => {
    render(<Gimnasio />);
    expect(screen.getByText(/GIMNASIA TERAPEUTICA SEMANAL/i)).toBeInTheDocument();
    expect(screen.getByText(/Pilates, Yoga, Fisioterapia/i)).toBeInTheDocument();
    expect(screen.getByText(/NO REQUIRIENDO TRASLADO ALGUNO/i)).toBeInTheDocument();
  });

  it("renderiza las actividades y disciplinas", () => {
    render(<Gimnasio />);
    expect(screen.getByText("Pilates")).toBeInTheDocument();
    expect(screen.getByText("Yoga Suave")).toBeInTheDocument();
    expect(screen.getByText("Fisioterapia y Kinesiología")).toBeInTheDocument();
    expect(screen.getByText("Psicomotricidad")).toBeInTheDocument();
    expect(screen.getByText("Psicología & Estimulación Cognitiva")).toBeInTheDocument();
    expect(screen.getByText("Podología Terapéutica")).toBeInTheDocument();
  });

  it("muestra las fotos reales del gimnasio terapéutico", () => {
    render(<Gimnasio />);
    const imgs = screen.getAllByRole("img");
    const gymImgs = imgs.filter((img) => img.getAttribute("src")?.toLowerCase().includes("gimnasio"));
    expect(gymImgs.length).toBe(5);
  });
});
