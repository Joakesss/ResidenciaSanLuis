import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Nav from "./Nav";

describe("Componente Nav", () => {
  it("renderiza el nombre 'Residencia SL' y el enlace al gimnasio terapéutico", () => {
    render(<Nav />);
    expect(screen.getByText("Residencia SL")).toBeInTheDocument();
    expect(screen.getByText("Gimnasio Terapéutico")).toBeInTheDocument();
  });
});
