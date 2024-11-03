import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CatsList } from "../cats-list";
import { useGetCats, useInfiniteScroll } from "../hooks";

const queryClient = new QueryClient();

jest.mock("next/navigation", () => {
  return {
    useRouter: () => ({
      push: () => {},
    }),
  };
});

jest.mock("../hooks", () => ({
  useGetCats: jest.fn(),
  useInfiniteScroll: jest.fn(),
}));

const renderCatsList = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <CatsList />
    </QueryClientProvider>
  );
};

const setupGetCatsMock = ({
  data = undefined,
  isError = false,
  isPending = false,
}: {
  data?: {
    pages: {
      id: number;
      url: string;
      breeds: { name: string }[];
    }[][];
  };
  isError?: boolean;
  isPending?: boolean;
}) => {
  (useGetCats as jest.Mock).mockReturnValue({
    data,
    isError,
    isPending,
    hasNextPage: false,
    isFetchingNextPage: false,
    fetchNextPage: jest.fn(),
    refetch: jest.fn(),
  });
};

const setupInfiniteScrollMock = () => {
  (useInfiniteScroll as jest.Mock).mockReturnValue({
    observerRef: jest.fn(),
  });
};

describe("List of cats", () => {
  it("should show loading screen while loading request", async () => {
    setupGetCatsMock({ isPending: true });

    renderCatsList();

    const loadingScreen = screen.getByTestId("loading-screen");
    expect(loadingScreen).toBeInTheDocument();
  });

  it("should show error screen if request returns error", async () => {
    setupGetCatsMock({ isError: true });

    renderCatsList();

    const errorScreen = screen.getByText("Oops! Something went wrong.");
    expect(errorScreen).toBeInTheDocument();
  });

  it("should show the cats list when request returns the data", async () => {
    setupInfiniteScrollMock();

    const mockData = {
      pages: [
        [
          {
            id: 1,
            url: "https://domain.com/images/cat1.jpg",
            breeds: [{ name: "cat1" }],
          },
          {
            id: 2,
            url: "https://domain.com/images/cat2.jpg",
            breeds: [{ name: "cat2" }],
          },
        ],
      ],
    };

    setupGetCatsMock({ data: mockData });

    renderCatsList();

    const catCard1 = screen.getByText("cat1");
    const catCard2 = screen.getByText("cat2");

    expect(catCard1).toBeInTheDocument();
    expect(catCard2).toBeInTheDocument();
  });
});
