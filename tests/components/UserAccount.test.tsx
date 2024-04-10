import { render, screen } from "@testing-library/react";
import { User } from "../../src/entities";
import UserAccount from "../../src/components/UserAccount";

describe("UserAccount", () => {
  it("should render user profile information", () => {
    const user: User = {
      name: "John Doe",
      isAdmin: false,
      id: 1,
    };

    render(<UserAccount user={user} />);

    const name = screen.getByRole("user-name");
    expect(name).toBeInTheDocument;
    expect(name).toHaveTextContent(user.name);
  });

  it("should render edit button when user is admin", () => {
    const adminUser: User = {
      name: "Admin User",
      isAdmin: true,
      id: 2,
    };

    render(<UserAccount user={adminUser} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument;
    expect(button).toHaveTextContent(/edit/i);
  });

  it("should not render edit button when user is not admin", () => {
    const regularUser: User = {
      name: "Regular User",
      isAdmin: false,
      id: 3,
    };

    render(<UserAccount user={regularUser} />);

    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument;
  });
});
