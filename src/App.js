import React, { useEffect, useState } from 'react';
import Login from './components/Auth/Login'
import { getTokenFromURL } from './API/SpotifyAuth'
import Player from './components/Index/Player'
import SpotifyWebAPI from 'spotify-web-api-js'
import { useDataLayerValue } from './store/index';

const spotify = new SpotifyWebAPI();

function App() {
  const [{ user, token, playlists, album01, album02, album03, album04 }, dispatch] = useDataLayerValue();
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

      spotify.getAlbum('5dGWwsZ9iB2Xc3UKR0gif2').then(album => {
        // justice
        console.log('responseeeeeeeee', album);
        dispatch({
          type: 'SET_ALBUM_ONE',
          album01: album
        })
      })
      spotify.getAlbum('2yuQqhSklmfWgn8lmJNk5t').then(album => {
        // no body listening
        console.log('responseeeeeeeee', album);
        dispatch({
          type: 'SET_ALBUM_TWO',
          album02: album
        })
      })
      spotify.getAlbum('1DF9B2hfwX4EdgEFwGcRwh').then(album => {
        // zayn icarus
        console.log('responseeeeeeeee', album);
        dispatch({
          type: 'SET_ALBUM_THREE',
          album03: album
        })
      })
      spotify.getAlbum('5amj9zNeZ3B2EdpBgXrOZ0').then(album => {
        // mind of mine
        console.log('responseeeeeeeee', album);
        dispatch({
          type: 'SET_ALBUM_FOUR',
          album04: album
        })
      })

        spotify.getUserPlaylists()
          .then((playlists) => {
            console.log('playlists ------>', playlists.items.track);
            dispatch({
              type: 'SET_PLAYLIST',
              playlists: playlists
            })
          })
      }
      console.log(`TOKEN => ${_token}`);
  }, [])

  console.log('user --->', user);
  // console.log('token --->', token);
  // const filtered = [...new Set(recentlyPlayed.items.map(item => item.track.albumName))]
  // console.log('filtered------>',filtered);
  console.log('rect1----', album01);
  console.log('rec2----', album02);
  console.log('rec3----', album03);
  console.log('rec4----', album04);
  console.log('playlist ---> ', playlists);

  return (
    <div>
      {
        token ? <Player spotify={spotify} /> : <Login />
      }
    </div>
  );
};

export default App;
