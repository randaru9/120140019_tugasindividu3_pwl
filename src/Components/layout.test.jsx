import { screen, render } from "@testing-library/react";
import { expect } from "vitest";
import Layout from "./layout";

describe("Layout", () => {
    it("renders navbar component", () => {
        render(<Layout>INI CHILDREN</Layout>);
        expect(screen.getByText("Beranda")).toBeInTheDocument();
        expect(screen.getByText("Tentang")).toBeInTheDocument();
        expect(screen.getByText("Kontak")).toBeInTheDocument();
    })
    it("renders children inside layout", () => {
        render(<Layout>INI CHILDREN</Layout>);
        expect(screen.getByText("INI CHILDREN")).toBeInTheDocument();
    });
    it("renders Footer component", () => {
        render(<Layout>INI CHILDREN</Layout>);
        expect(screen.getByText("Dibuat Oleh Rangga Ndaru Anggoro")).toBeInTheDocument();
    })
})