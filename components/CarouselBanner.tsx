"use client";

import { Movie } from "@/typings";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";

Autoplay.globalOptions = { delay: 8000 };

function CarouselBanner({ movies }: { movies: Movie[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  return (
    <div className="relative overflow-hidden cursor-pointer" ref={emblaRef}>
      <div className="flex">
        {movies.map((movie) => (
          // Custom extend in tailwind.config or flex-[0_0_100%]
          <div className="relative flex-full min-w-0" key={movie.id}>
            <Image
              key={movie.id}
              src={getImagePath(movie.backdrop_path, true)}
              alt={movie.title}
              width={3840}
              height={2160}
              className="xl:max-h-[80vh] xl:object-cover"
            />

            {/* Movie title/description/banner gradient */}
            <div
              className="absolute hidden mt-0 top-0 left-0 h-full w-full p-10 bg-transparent
            lg:inline lg:pt-52 xl:pt-80 bg-gradient-to-r from-gray-900/90 via-transparent
            to-transparent text-white z-20"
            >
              <h2 className="max-w-xl text-5xl font-bold z-50">
                {movie.title}
              </h2>
              <p className="max-w-xl line-clamp-3">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-gray-200/0 
      via-gray-900/25 to-gray-300 dark:to-[#1A1C29]"
      ></div>
    </div>
  );
}

export default CarouselBanner;
