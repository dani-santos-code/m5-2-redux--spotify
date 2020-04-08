import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import fetchArtistProfile from "../helpers/api-helpers";
export default function ArtistRoute() {
  let { artistId } = useParams();

  const accessToken = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    fetchArtistProfile(accessToken, artistId);
  }, [accessToken]);

  return <div></div>;
}
