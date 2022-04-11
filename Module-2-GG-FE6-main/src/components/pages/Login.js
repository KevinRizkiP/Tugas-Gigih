import React, { useEffect } from "react";
import { getUserProfile } from "../../lib/Api";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../utils/authSlice";

const Login = () => {
  const isAuthorize = useSelector((state) => state.auth.isAuthorize);
  const dispatch = useDispatch();

  useEffect(() => {
    const accessTokenParams = new URLSearchParams(window.location.hash).get(
      "#access_token"
    );

    if (accessTokenParams !== null) {
      const setUserProfile = async () => {
        try {
          const responseUser = await getUserProfile(accessTokenParams);

          dispatch(
            login({
              accessToken: accessTokenParams,
              user: responseUser,
            })
          );
        } catch (e) {
          console.error(e);
        }
      };

      setUserProfile();
    }
  });

  const getSpotifyLinkAuthorize = () => {
    const state = Date.now().toString();
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

    return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000/&state=${state}&scope=playlist-modify-private`;
  };

  return (
    <>
      {!isAuthorize && (
        <main className="w-full h-screen flex justify-center items-center bg-black">
          <div className="justify-center flex flex-col items-center">
            <img className="h-72 w-72" src="spotify_logo.png" alt="logo" />
            <a
              className="bg-green-500 py-2 px-5 color-black rounded-full font-bold text-xl tracking-wider transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-400 duration-300"
              href={getSpotifyLinkAuthorize()}
            >
              Login
            </a>
          </div>
        </main>
      )}
    </>
  );
};

export default Login;
