import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DetailsPage from "../(details)/[id]/page";
import CatDetailsComponent from "../(details)/cat-details";

jest.mock("../(details)/cat-details", () => {
  return jest.fn(() => <div>Mocked CatDetails Component</div>);
});

describe("Cat details page", () => {
  it("render cat details page", async () => {
    render(await DetailsPage({ params: Promise.resolve({ id: "123" }) }));

    expect(
      await screen.findByText("Mocked CatDetails Component")
    ).toBeInTheDocument();

    expect(CatDetailsComponent).toHaveBeenCalledWith({ id: "123" }, {});
  });
});
