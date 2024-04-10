import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  it("should render the terms and conditions", () => {
    render(<TermsAndConditions />);

    const heading = screen.getByRole("heading", {
      name: /terms & conditions/i,
    });
    expect(heading).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox", {
      name: /i accept the terms and conditions./i,
    });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("should enable the submit button when the checkbox is checked", async () => {
    render(<TermsAndConditions />);

    const checkbox = screen.getByRole("checkbox", {
      name: /i accept the terms and conditions./i,
    });
    const button = screen.getByRole("button", { name: /submit/i });
    const user = userEvent.setup();
    await user.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(button).not.toBeDisabled();
  });
});
