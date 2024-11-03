import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CatsList } from "../cats-list";

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

describe("List of cats", () => {
  it("show loading while loading cats list", async () => {
    const { useGetCats } = await import("../hooks");
    const mockUseGetCats = useGetCats as jest.Mock;

    mockUseGetCats.mockReturnValue({
      data: undefined,
      isError: false,
      isPending: true,
      hasNextPage: false,
      isFetchingNextPage: false,
      fetchNextPage: jest.fn(),
      refetch: jest.fn(),
    });

    render(
      <QueryClientProvider client={queryClient}>
        <CatsList />
      </QueryClientProvider>
    );

    const loadingScreen = screen.getByTestId("loading-screen");

    expect(loadingScreen).toBeInTheDocument();
  });

  it("show error if cats list can't be loaded", async () => {
    const { useGetCats } = await import("../hooks");
    const mockUseGetCats = useGetCats as jest.Mock;

    mockUseGetCats.mockReturnValue({
      data: undefined,
      isError: true,
      isPending: false,
      hasNextPage: false,
      isFetchingNextPage: false,
      fetchNextPage: jest.fn(),
      refetch: jest.fn(),
    });

    render(
      <QueryClientProvider client={queryClient}>
        <CatsList />
      </QueryClientProvider>
    );

    const errorScreen = screen.getByText("Oops! Something went wrong.");

    expect(errorScreen).toBeInTheDocument();
  });

  it("show cards of cats on success", async () => {
    const { useGetCats, useInfiniteScroll } = await import("../hooks");

    const mockUseGetCats = useGetCats as jest.Mock;
    const mockUseInfiniteScroll = useInfiniteScroll as jest.Mock;

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

    mockUseInfiniteScroll.mockReturnValue({
      observerRef: jest.fn(),
    });

    mockUseGetCats.mockReturnValue({
      data: mockData,
      isError: false,
      isPending: false,
      hasNextPage: false,
      isFetchingNextPage: false,
      fetchNextPage: jest.fn(),
      refetch: jest.fn(),
    });

    render(
      <QueryClientProvider client={queryClient}>
        <CatsList />
      </QueryClientProvider>
    );

    const catCard1 = screen.getByText("cat1");
    const catCard2 = screen.getByText("cat2");

    expect(catCard1).toBeInTheDocument();
    expect(catCard2).toBeInTheDocument();
  });
});
