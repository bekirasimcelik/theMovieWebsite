import React from "react";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

interface CastMember {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}

interface MovieDetailProps {
  cast: CastMember[];
}

const MovieDetail: React.FC<MovieDetailProps> = ({ cast }) => {
  return (
    <div className="cast-container mt-8">
      <h3 className="text-xl font-bold mb-4">Featured Cast</h3>
      <div className="flex flex-wrap gap-4">
        {cast.map((actor) => (
          <div key={actor.id} className="w-24 flex flex-col items-center">
            <div className="w-full">
              <img
                src={
                  actor.profile_path
                    ? `${IMG_BASE_URL}${actor.profile_path}`
                    : "/placeholder-image.jpg"
                }
                alt={actor.name}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="text-sm text-gray-700 mt-2">{actor.name}</div>
            <div className="text-xs text-gray-500">{actor.character}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetail;
