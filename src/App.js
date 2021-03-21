import React, { useEffect, useState } from 'react';
import Login from './components/Auth/Login'
import { getTokenFromURL } from './API/SpotifyAuth'
import Player from './components/Index/Player'
import SpotifyWebAPI from 'spotify-web-api-js'
import { useDataLayerValue } from './store/index';

const spotify = new SpotifyWebAPI();

function App() {
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();
  // { user } is same as useDataLayerValue.user, just destructuring the value

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = ""
    
    const _token = hash.access_token
    
    if(_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe()
        .then((user) => {
          // console.log('user-data ---> ', user);

          dispatch({
            type: 'SET_USER',
            user: user
          })
        })

        spotify.getUserPlaylists()
          .then((playlists) => {
            console.log('playlists ------>', playlists);
            dispatch({
              type: 'SET_PLAYLIST',
              playlists: playlists
            })
          })
      }
      console.log(`TOKEN => ${_token}`);
  }, [])
  
  // console.log('user --->', user);
  // console.log('token --->', token);

  return (
    <div>
      {
        token ? <Player spotify={spotify} /> : <Login />
      }
    </div>
  );
};

export default App;
