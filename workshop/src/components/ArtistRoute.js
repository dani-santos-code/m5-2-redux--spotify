import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import fetchArtistProfile from "../helpers/api-helpers";
import {
  requestArtistProfile,
  receiveArtistProfile,
  receiveArtistProfileError,
} from "../actions";

export default function ArtistRoute() {
  const dispatch = useDispatch();
  let { artistId } = useParams();
  const accessToken = useSelector((state) => state.auth.token);
  const currentArtistProfile = useSelector(
    (state) => state.artists.currentArtist
  );
  console.log(currentArtistProfile);
  useEffect(() => {
    if (!accessToken) {
      return;
    }
    dispatch(requestArtistProfile());
    fetchArtistProfile(accessToken, artistId)
      .then((json) => dispatch(receiveArtistProfile(json)))
      .catch((e) => dispatch(receiveArtistProfileError()));
  }, [accessToken]);

  const formatAmountOfFollowers = (number) => {
    if (number > 1000 && number <= 100000) {
      return `${Math.round(number / 1000)}K`;
    } else if (number >= 100000 && number < 1000000) {
      return `${Math.round(number / 1000)}K`;
    } else if (number >= 1000000 && number < 10000000) {
      return `${parseFloat(number / 1000000).toFixed(1)}M`;
    } else if (number >= 10000000 && number <= 100000000) {
      return `${parseFloat(number / 1000000).toFixed(1)}M`;
    } else {
      return number;
    }
  };
  return (
    <div>
      {currentArtistProfile && (
        <>
          <h1>{currentArtistProfile.name}</h1>
          <p>
            Total Followers:{" "}
            {formatAmountOfFollowers(currentArtistProfile.followers.total)}
          </p>
          {currentArtistProfile.images.map((image) => {
            if (image.width >= 300 && image.width <= 400) {
              return (
                <img key={`${image.url}`} src={image.url} alt="album"></img>
              );
            }
          })}
          <div>
            <h2>Tags</h2>
            {currentArtistProfile.genres.slice(0, 2).map((genre, id) => {
              return <span key={`${id}-${genre}`}>#{genre} </span>;
            })}
          </div>
        </>
      )}
    </div>
  );
}
