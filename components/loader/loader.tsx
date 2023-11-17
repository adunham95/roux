import React from 'react';

export const Loader = () => {
  return (
    <div className="flex space-x-2 justify-center items-center py-4">
      <span className="sr-only">Loading...</span>
      <div className="h-6 w-6 bg-brand-variable rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-6 w-6 bg-brand-variable rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-6 w-6 bg-brand-variable rounded-full animate-bounce"></div>
    </div>
  );
};
