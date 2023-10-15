import { fireEvent, render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Kontak from "./kontak";
describe("Kontak", () => {
    it("renders Kontak", () => {
        render(<Kontak />);
        expect(screen.getByText("Beranda")).toBeInTheDocument();
        expect(screen.getByText("Tentang")).toBeInTheDocument();
        expect(screen.getByText("Kontak")).toBeInTheDocument();
        expect(screen.getByText("Pesan Yang Sudah Masuk : 0")).toBeInTheDocument();
        expect(screen.getByText("Dibuat Oleh Rangga Ndaru Anggoro")).toBeInTheDocument();
        fireEvent.click(screen.getByRole("button"));
        expect(screen.getByText("Pesan Yang Sudah Masuk : 1")).toBeInTheDocument();
    })
})