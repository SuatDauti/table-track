import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AdminLoginPage from "../app/adminLogin/page";

describe("Page", () => {
  it("renders a form and can be filled out", async () => {
    render(<AdminLoginPage />);

    // Get the input fields by their placeholder text
    const usernameInput = screen.getByPlaceholderText("username");
    userEvent.type(usernameInput, "testuser");

    const passwordInput = screen.getByPlaceholderText("password");
    userEvent.type(passwordInput, "testpassword");

    // Get the submit button by its text content
    const submitButton = screen.getByRole("button", { name: /Submit/i });
    userEvent.click(submitButton);
  });
});
