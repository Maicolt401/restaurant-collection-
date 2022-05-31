import { render, screen } from "@testing-library/react";
import RegisterPage from "./RegisterPage";

describe("Given a FormComponent function", () => {
  describe("When it should in the document a label", () => {
    test("Then it should show render in to the document a button its the same to 1", () => {
      render(<RegisterPage />);

      const form = screen.getByLabelText("Username");

      expect(form).toBeInTheDocument();
    });
  });
});
