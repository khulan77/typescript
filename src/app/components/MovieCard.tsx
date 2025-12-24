import { isValidElement } from "react";
import { Movie } from "../page";
export type Movie = {
  id: number;
  title: string;
  rating: number;
}
export const MovieCard = ({movie}: { movie: Movie}) => {
    const { title, rating, id } = movie;
    return(
        <div>
            <div>{title}</div>
            <div>{rating}</div>
            <div>{id}</div>
        </div>
    )
}