import { Movie } from "@/typings";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
};

function MovieList({ title, movies, isVertical }: Props) {
  return (
    <div className="z-10">
      <h2 className="px-5 py-2 text-xl font-bold lg:px-10">{title}</h2>

      {/* tailwind-scrollbar-hide */}
      <div
        className={cn(
          "flex space-x-4 px-5 py-5 lg:px-10 overflow-x-scroll scrollbar-hide",
          isVertical && "flex-col space-x-0 space-y-12"
        )}
      >
        {isVertical
          ? movies?.map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  isVertical &&
                    "flex flex-col items-center space-x-5 space-y-5 mb-5 lg:flex-row"
                )}
              >
                <MovieCard movie={movie} />
                <div className="max-w-2xl">
                  <p className="font-bold">
                    {movie.title} ({movie.release_date?.split("-")[0]})
                  </p>

                  <hr className="mb-3" />

                  <p className="">{movie.overview}</p>
                </div>
              </div>
            ))
          : movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default MovieList;
