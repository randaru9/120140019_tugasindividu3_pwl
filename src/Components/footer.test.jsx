import { screen, render } from "@testing-library/react";
import { expect } from "vitest";
import Footer from "./footer";

describe("Footer", () => {
    it("renders Footer", () => {
        render(<Footer />);
        expect(screen.getByText("Dibuat Oleh Rangga Ndaru Anggoro")).toBeInTheDocument();
    })
})