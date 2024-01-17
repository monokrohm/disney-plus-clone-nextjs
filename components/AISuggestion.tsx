"use client";

import useSWR from "swr";

// route.ts -> Azure function
const fetcher = (term: string) =>
  fetch("/api/suggestions?term=" + term).then((res) => res.json());

function AISuggestion({ term }: { term: string }) {
  // useSWR(key, fetcher)
  const { data, error, isLoading, isValidating } = useSWR(
    "suggestions",
    () => fetcher(term),
    { revalidateOnFocus: false, revalidateOnReconnect: false }
  );

  // console.log(data.message);

  const generateText = () => {
    if (isLoading || isValidating)
      return (
        <>
          <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-white" />
          <p className="text-sm text-gray-400">AI Assistant is thinking...</p>
        </>
      );

    if (error) return <>Error...</>;
    if (!data) return <>No Data</>;

    return (
      <>
        <div className="flex-shrink-0 h-10 w-10 animate-pulse rounded-full bg-gradient-to-t from-white border-2 border-white" />
        <div>
          <p className="text-sm text-gray-400">
            AI (Azure) Assistant Suggests:{" "}
          </p>
          <p className="text-xl italic">&quot;{data.message}&quot;</p>
        </div>
      </>
    );
  };

  return (
    <div className="flex items-center space-x-5 px-10">{generateText()}</div>
  );
}

export default AISuggestion;
