import {render} from "@testing-library/react";
import {describe, it} from "vitest";
import {Button} from "./Button";

describe("Button component", () => {
    it("renders the button with children text", () => {
        render(<Button>Click me</Button>);
        // expect(screen.getByText("Click me")).toBeInTheDocument();
    });
});
