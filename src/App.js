import React, { useEffect } from 'react';
import Login from './components/Auth/Login'
import { getTokenFromURL } from './API/SpotifyAuth'
import Player from './components/Index/Player'
import SpotifyWebAPI from 'spotify-web-api-js'
import { useDataLayerValue } from './store/index';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Tracks from './pages/TrackList'
import Search from './pages/Search'
import Playlist from './pages/Playlist'
import LibTracks from './components/Library/LibBody'
import Tracks2 from './components/cards/NewReleases/TrackList'
import Tracks3 from './components/cards/RecentlyPlayed/Track'
import NewTrackList from './components/cards/NewReleases/TrackBody'

const spotify = new SpotifyWebAPI()

function App() {
  const [{ user, token, followed_artists }, dispatch] = useDataLayerValue();
  const history = useHistory();
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
          dispatch({
            type: 'SET_USER',
            user: user
          })
        })

      spotify.getAlbum('5dGWwsZ9iB2Xc3UKR0gif2').then(album => {
        dispatch({
          type: 'SET_ALBUM_ONE',
          album01: album
        })
      })
      spotify.getAlbum('2yuQqhSklmfWgn8lmJNk5t').then(album => {
        dispatch({
          type: 'SET_ALBUM_TWO',
          album02: album
        })
      })
      spotify.getAlbum('1DF9B2hfwX4EdgEFwGcRwh').then(album => {
        dispatch({
          type: 'SET_ALBUM_THREE',
          album03: album
        })
      })
      spotify.getAlbum('5amj9zNeZ3B2EdpBgXrOZ0').then(album => {
        dispatch({
          type: 'SET_ALBUM_FOUR',
          album04: album
        })
      })

      spotify.getMyTopArtists().then(response => {
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response
        })
      })

      spotify.getNewReleases().then(res => {
        dispatch({
          type: "SET_NEW_RELEASES",
          new_releases: res
        })
      })

      spotify.getMyRecentlyPlayedTracks().then(res => {
        dispatch({
          type: "SET_FOLLOWED_ARTISTS",
          followed_artists: res
        })
      })
      console.log('followed-Artists =>', followed_artists);

      spotify.getArtistRelatedArtists().then((res) => {
        dispatch({
          type: "SET_ARTIST",
          artist: res
        })
      })

        spotify.getUserPlaylists()
          .then((playlists) => {
            dispatch({
              type: 'SET_PLAYLIST',
              playlists: playlists
            })
          })
      }

      spotify.getCategories()
        .then((categories) => {
          dispatch({
            type: 'SET_CATEGORIES',
            categories: categories
          })
        })

      spotify.getUserPlaylists()
        .then((res) => {
        dispatch({
          type: 'SET_GENRE',
          genre: res
        })
      })

      console.log(`TOKEN => ${_token}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('user --->', user);
  console.log('token --->', token)


  return (
    <Router history={history}>
      {/* {
        token ? <Player spotify={spotify} /> : <Login />
      } */}
      <Switch>  
          <Route exact path="/" render={() => token ? <Player spotify={spotify} /> : <Login />} />
          <Route path="/search" render={() => token ? <Search spotify={spotify} /> : <Player spotify={spotify} />} />
          <Route path="/collection/playlist" render={() => token ? <Playlist spotify={spotify} /> : <Player spotify={spotify} />} />
          <Route path="/playlist/:id" render={() => token ? <LibTracks spotify={spotify} /> : <Player spotify={spotify} />} />
          <Route path="/album/:id" render={() => token ? <Tracks /> : <Player spotify={spotify} />} />
          <Route path="/albums/:id" render={() => token ? <Tracks3 /> : <Player spotify={spotify} />} />
          <Route path="/new_release" render={() => token ? <NewTrackList spotify={spotify} /> : <Player spotify={spotify} />} />
          <Route path="/new_releases/:id" render={() => token ? <Tracks2 /> : <Player spotify={spotify} />} />
      </Switch>
    </Router>
  );
};

export default App
