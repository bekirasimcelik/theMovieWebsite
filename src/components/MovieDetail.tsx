import React from "react";

const IMGpath = "https://image.tmdb.org/t/p/w1280";

const MovieDetail = (props) => {
  const { data } = props;
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={IMGpath + data.posterPath} alt={data.title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.title}</h4>
            <p>{data.releaseDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
