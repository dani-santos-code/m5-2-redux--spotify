import React from "react";
import { useSelector } from "react-redux";

export default function ArtistRoute() {
  const accessToken = useSelector((state) => state.auth.token);
  return <div>{accessToken}</div>;
}
