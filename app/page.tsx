import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MovieList from "@/components/MovieList";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className="flex items-center">
      <div className="flex flex-col space-y-2 ">
        {/* BANNER */}
        <CarouselBannerWrapper />

        <MovieList
          title="Upcoming"
          movies={upcomingMovies}
          isVertical={false}
        />
        <MovieList
          title="Top Rated"
          movies={topRatedMovies}
          isVertical={false}
        />
        <MovieList
          title="Popular Movies"
          movies={popularMovies}
          isVertical={false}
        />
      </div>
    </main>
  );
}
