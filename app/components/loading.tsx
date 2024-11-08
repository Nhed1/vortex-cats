import { LoadingIcon } from "./loading-icon";

export function Loading() {
  return (
    <div
      className="h-96 flex justify-center items-center"
      data-testid="loading-screen"
    >
      <LoadingIcon />
    </div>
  );
}
