export function Error({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! Something went wrong.
        </h2>
        <p className="text-gray-600 mb-4">
          An error has occurred. Please try again.
        </p>
        <button
          onClick={onRetry}
          className="px-6 py-2 text-white rounded-md bg-black transition duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
