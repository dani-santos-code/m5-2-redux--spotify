export const requestAccessToken = () => ({
  type: "REQUEST_ACCESS_TOKEN",
});

export const receiveAccessToken = (token) => ({
  type: "RECEIVE_ACCESS_TOKEN",
  payload: { token },
});

export const receiveAccessTokenError = () => ({
  type: "RECEIVE_ACCESS_TOKEN_ERROR",
});

export const requestArtistProfileToken = () => ({
  type: "REQUEST_ARTIST_PROFILE",
});

export const receiveArtistProfile = (token) => ({
  type: "RECEIVE_ARTIST_PROFILE",
  payload: { token },
});

export const receiveArtistProfileError = () => ({
  type: "RECEIVE_ARTIST_PROFILE_ERROR",
});
