import { render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Given a Key component", () => {
  describe("When rendered with the number '2'", () => {
    test("Then it should show a key with the number '2'", () => {
      const number = "2";

      render(<Key className={""} content={number} />);

      const expectedButton = screen.getByText(number);

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
