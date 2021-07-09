import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", async () => {
    render(<CheckoutForm />);

    const header = screen.getByText(/React Plants/i)

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const showSuccessMessage = screen.getByText(/success/i);
    const button = screen.getByRole('button', {value: /submit/i});

    userEvent.click(button);

    expect(showSuccessMessage).toHaveTextContent("success");
});
