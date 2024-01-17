import AISuggestion from "@/components/AISuggestion";
import MovieList from "@/components/MovieList";
import { getDiscoveryMovies } from "@/lib/getMovies";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

async function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  const movies = await getDiscoveryMovies(id);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="px-10 font-bold text-6xl">Results for {genre}</h1>

        <AISuggestion term={genre} />

        <MovieList title={`Genre`} movies={movies} isVertical />
      </div>
    </div>
  );
}

export default GenrePage;
