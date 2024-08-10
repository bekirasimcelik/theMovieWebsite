import React from "react";
import { Link } from "react-router-dom";

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string;
  releaseDate: string;
  rating: number;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  posterPath,
  releaseDate,
  rating,
}) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-48">
        <img
          src={posterPath}
          alt={title}
          className="w-full h-60 object-cover"
        />
        <div className="p-2 h-[108px] flex flex-col">
          <h3 className="text-md font-bold mb-1 flex-grow">{title}</h3>
          <p className="text-gray-600 text-sm">Release Date: {releaseDate}</p>
          <p className="text-gray-800 font-semibold text-sm">
            Rating: {rating}/10
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
