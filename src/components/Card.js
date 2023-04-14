import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import "./Card.css";

const Cards = ({ item }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          className="card col-11 col-md-3 col-sm-4 m-3"
          style={{ height: "400px" }}
        >
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <p>
              <Skeleton height={200} duration={1} />
            </p>
          </SkeletonTheme>
        </div>
      ) : (
        <div className="card col-11 col-md-3 col-sm-4 m-3">
          <img src={item.url} className="card-img-top" alt="item" />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">Photo ID: {item.id}</p>
            <p className="card-text">AlbumId ID: {item.albumId}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">URL: {item.url}</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Cards;
