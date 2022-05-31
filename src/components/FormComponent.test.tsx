import { render, screen } from "@testing-library/react";
import FormComponent from "./FormComponent";

describe("Given a FormComponent function", () => {
  describe("When it should in the document a label", () => {
    test("Then it should show render in to the document a button its the same to 1", () => {
      const expectedButton = 1;

      render(<FormComponent />);

      const buttons = screen.getAllByRole("button");

      expect(buttons).toHaveLength(expectedButton);
    });
  });
});
