import AISuggestion from "@/components/AISuggestion";
import MovieList from "@/components/MovieList";
import { getPopularMovies, getSearchMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

async function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const decodedTerm = decodeURI(term);

  const movies = await getSearchMovies(decodedTerm);
  const popularMovies = await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="px-10 text-6xl font-bold">Results for {decodedTerm}</h1>

        <AISuggestion term={decodedTerm} />

        <MovieList title="Movies" movies={movies} isVertical />
        <MovieList title="You may also like" movies={popularMovies} />
      </div>
    </div>
  );
}

export default SearchPage;
