import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Equipamiento from "./Equipamiento";

describe("Componente Equipamiento", () => {
  it("renderiza equipamiento propio y compartido", () => {
    render(<Equipamiento />);
    expect(screen.getByText("En tu habitación")).toBeInTheDocument();
    expect(screen.getByText("Espacios compartidos y servicios")).toBeInTheDocument();
  });

  it("menciona el servicio de lavado de ropa y no un lavarropas de uso personal", () => {
    render(<Equipamiento />);
    const elementos = screen.getAllByText(/Servicio de lavado de ropa/i);
    expect(elementos.length).toBeGreaterThan(0);
    expect(screen.queryByText(/lavarropas para residentes/i)).not.toBeInTheDocument();
  });
});
