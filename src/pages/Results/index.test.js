import Results, {
  formatJobList,
  formatQueryParams,
} from "./";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { render } from "../../utils/test";
import {
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react";

// test("Ceci est mon premier test", () => {
//   const expectedState = "item2,";
//   expect(formatJobList("item2", 3, 1)).toEqual(
//     expectedState
//   );
// });

// describe("La fonction formatJobList", () => {
//   test("ajoute une virgule à un item", () => {
//     const expectedState = "item2,";
//     expect(formatJobList("item2", 3, 1)).toEqual(
//       expectedState
//     );
//   });
//   test("ne met pas de virgule pour le dernier élément", () => {
//     const expectedState = "item3";
//     expect(formatJobList("item3", 3, 2)).toEqual(
//       expectedState
//     );
//   });
// });

describe("The formatJobList function", () => {
  it("should add a comma to a word", () => {
    const expectedState = "item2,";
    expect(formatJobList("item2", 3, 1)).toEqual(
      expectedState
    );
  });

  it("should not add a comma to the last element of the list", () => {
    const expectedState = "item3";
    expect(formatJobList("item3", 3, 2)).toEqual(
      expectedState
    );
  });
});

describe("The formatQueryParams function", () => {
  it("should use the right format for param", () => {
    const expectedState = "a1=answer1";
    expect(
      formatQueryParams({ 1: "answer1" })
    ).toEqual(expectedState);
  });
  it("should concatenate params with an &", () => {
    const expectedState = "a1=answer1&a2=answer2";
    expect(
      formatQueryParams({
        1: "answer1",
        2: "answer2",
      })
    ).toEqual(expectedState);
  });
});

const resultsMockedData = [
  {
    title: "seo",
    description: `Le SEO est en charge du référencement web d'une page`,
  },
  {
    title: "frontend",
    description: `Le développeur ou la développeuse frontend se charge de l'interface : interactions avec l'utilisateur, style, etc.`,
  },
];

const server = setupServer(
  // On précise ici l'url qu'il faudra "intercepter"
  http.get(
    "http://localhost:8000/results",
    (req, res, ctx) => {
      // Là on va pouvoir passer les datas mockées dans ce qui est retourné en json
      return HttpResponse.json({
        resultsData: resultsMockedData,
      });
    }
  )
);
// Active la simulation d'API avant les tests depuis server
beforeAll(() => server.listen());
// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
afterEach(() => server.resetHandlers());
// Ferme la simulation d'API une fois que les tests sont finis
afterAll(() => server.close());

describe("The Results component", () => {
  test("should display the results after the data is loaded", async () => {
    render(<Results />);
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("loader")
    );
    const jobTitleElements =
      screen.getAllByTestId("job-title");
    expect(jobTitleElements[0].textContent).toBe(
      "seo"
    );
    expect(jobTitleElements.length).toBe(2);
    const jobDescriptionElements =
      screen.getAllByTestId("job-description");
    expect(
      jobDescriptionElements[1].textContent
    ).toBe(resultsMockedData[1].description);
    expect(jobDescriptionElements.length).toBe(2);
  });
});

// describe("The formatQueryParams function", () => {
//   it("should format query parameters correctly", () => {
//     const answers = {
//       1: "value1",
//       2: "value2",
//       3: "value3",
//     };
//     const expectedParams =
//       "a1=value1&a2=value2&a3=value3";
//     expect(formatQueryParams(answers)).toEqual(
//       expectedParams
//     );
//   });
// });
