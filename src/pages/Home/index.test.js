import { MemoryRouter } from "react-router-dom";
import {
  render,
  screen,
} from "@testing-library/react";
import { ThemeProvider } from "../../utils/context";
import Home from "./";

// test("renders Home without crashing", () => {
//   console.log("Home component:", Home);
//   console.log("Type of Home:", typeof Home);

//   render(
//     <MemoryRouter>
//       <ThemeProvider>
//         <Home />
//       </ThemeProvider>
//     </MemoryRouter>
//   );

// });
describe("Home Page", () => {
  it("should render title", () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(
      //   screen.getByText(
      //     "Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents"
      //   )
      screen.getByRole("heading", {
        level: 2,
        text: "Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents",
      })
    ).toBeTruthy();
  });
});
