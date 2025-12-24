<<<<<<< HEAD
import { Movie } from "../page";
import { MovieCard } from "./MovieCard";

const fetchUpcomingMovie = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1' ,
    {
      method: "GET",
      headers: {
        "Content -Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN_KEY}`,
      },
    }
  );

  const data = await response.json();
  console.log(data);
  return data.results;
};

export const Upcoming =() => {
  const upcomingMovies: Movie[] = await fetchUpcomingMovie();
   return(
    <div className="w-full flex flex-col gap-8 mt-8">
      <div className="text-2xl font-semibold flex gap-8">Upcoming</div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {upcomingMovies.slice(0, 10).map((movie) => (
          <MovieCard movie={movie} key={movie.id}/>
        ))}
      </div>
    </div>
   )
}
=======
import { ArrowRight } from "lucide-react";
export type Upcoming = {
  title: string;
  poster: string;
};

const movieUpComing = async () => {
  const response = await fetch("https://api.themoviedb.org/3/movie/upcoming", {
    method: "GET",
    headers: {
      "Contact-Type": "application/json",
      Authorization:
        " Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjM1M2Y5ZTkyYzIyN2JiMmQzN2RiYTRlYzBlMDczNSIsIm5iZiI6MTc2NjUwNzU3My45MjYsInN1YiI6IjY5NGFjNDM1ODU0ZjE1YzI0ODdhYzkxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.suRvWWOi9bwOuzUKrSXdsWg6N144lg5xlmLAIsyznDk",
    },
  });
  const data = await response.json();
  return data.results;
};

export default async function Home() {
  const movies: Upcoming[] = await movieUpComing();
}
>>>>>>> 18420f1 (Update Upcoming component)
