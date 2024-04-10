import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("should render Hello with the name when the name is provided", () => {
    render(<Greet name="John" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument;
    expect(heading).toHaveTextContent(/John/i);
  });
});

describe("Not greet", () => {
  it("should render login button when the name is not provided", () => {
    render(<Greet />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument;
    expect(button).toHaveTextContent(/login/i);
  });
});