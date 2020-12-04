import React from 'react';

export const ErrorFallBack = ({
  error,
  componentStack,
  resetErrorBoundary,
}) => {
  return (
    <div className="h-screen w-full bg-gray-100 flex justify-center flex-col px-5">
      <h1>An error occurred: {error.message}</h1>
      <button className="cursor-not-allowed" onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
