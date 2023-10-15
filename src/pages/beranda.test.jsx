import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Beranda from "./beranda";
describe("Beranda", () => {
    it("renders Beranda", () => {
        render(<Beranda />);
        expect(screen.getByText("Beranda")).toBeInTheDocument();
        expect(screen.getByText("Tentang")).toBeInTheDocument();
        expect(screen.getByText("Kontak")).toBeInTheDocument();
        expect(screen.getByText("Beranda")).toBeInTheDocument();
        expect(screen.getByText("Dibuat Oleh Rangga Ndaru Anggoro")).toBeInTheDocument();
    })
})