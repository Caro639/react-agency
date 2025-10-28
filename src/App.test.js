import {
  render,
  screen,
} from "@testing-library/react";
import App from "./App";

test("renders the app without crashing", () => {
  render(<App />);
  // Vérifie qu'un élément de la page d'accueil est présent
  const element = screen.getByText(
    /Chez Shiny nous réunissons/i
  );
  expect(element).toBeInTheDocument();
});
