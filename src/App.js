import React, { useEffect, useState } from 'react';
import Login from './components/Auth/Login'
import { getTokenFromURL } from './API/SpotifyAuth'
import Player from './components/Index/Player'
import SpotifyWebAPI from 'spotify-web-api-js'

const spotify = new SpotifyWebAPI();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = ""
    
    const _token = hash.access_token
    
    if(_token) {
      setToken(_token)
      spotify.setAccessToken(_token);

      spotify.getMe()
        .then((user) => {
          console.log('user-data ---> ', user);
        })
    }
    console.log(`TOKEN => ${_token}`);
  }, [])

  return (
    <div>
      {
        token ? <Player /> : <Login />
      }
    </div>
  );
};

export default App;
