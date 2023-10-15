import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Tentang from "./tentang";
describe("Tentang", () => {
    it("renders Tentang", () => {
        render(<Tentang />);
        expect(screen.getByText("Beranda")).toBeInTheDocument();
        expect(screen.getByText("Tentang")).toBeInTheDocument();
        expect(screen.getByText("Kontak")).toBeInTheDocument();
        expect(screen.getByText("Bisa Dipencet ya tombol dibawah, buat dapet quotes nya :*")).toBeInTheDocument();
        expect(screen.getByText("Dibuat Oleh Rangga Ndaru Anggoro")).toBeInTheDocument();
    })
})