import React, { useEffect, useState } from 'react';
import Login from './components/Auth/Login'
import { getTokenFromURL } from './API/SpotifyAuth'
import Player from './components/Index/Player'
import Card from './components/cards/Cards'
import SpotifyWebAPI from 'spotify-web-api-js'
import { useDataLayerValue } from './store/index';
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Tracks from './pages/TrackList'
import Search from './pages/Search'
import Tracks2 from './components/cards/NewReleases/TrackList'
import Tracks3 from './components/cards/RecentlyPlayed/Track'
import NewTrackList from './components/cards/NewReleases/TrackBody'

const spotify = new SpotifyWebAPI();

function App() {
  const [{ user, token, playlists, album01, album02, album03, album04, followed_artists, artist, categories }, dispatch] = useDataLayerValue();
  const [log, setLog] = useState(true);
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

      spotify.getMyTopArtists().then(response => {
        console.log('tooppppp', response);
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response
        })
      })

      spotify.getNewReleases().then(res => {
        console.log('arataratarta=====', res);
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
            console.log('playlists ------>', playlists.items.track);
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
      console.log(`TOKEN => ${_token}`);
  }, [])

  console.log('user --->', user);
  console.log('token --->', token)

  // const filtered = [...new Set(recentlyPlayed.items.map(item => item.track.albumName))]
  // console.log('filtered------>',filtered);
  console.log('rect1----', album01);
  console.log('rec2----', album02);
  console.log('rec3----', album03);
  console.log('rec4----', album04);
  console.log('playlist ---> ', playlists);
  console.log('followed-Artists =>', followed_artists);
  console.log('GET-ARTIST--->', artist);
  console.log('SEARCH:--->', categories);
  // const PR = <Player spotify={spotify} />


  return (
    <Router history={history}>
      {/* {
        token ? <Player spotify={spotify} /> : <Login />
      } */}
      <Switch>  
          <Route exact path="/" render={() => token ? <Player spotify={spotify} /> : <Login />} />
          <Route path="/search" render={() => token ? <Search spotify={spotify} /> : <Player spotify={spotify} />} />
          <Route path="/album/:id" render={() => token ? <Tracks /> : <Player spotify={spotify} />} />
          <Route path="/albums/:id" render={() => token ? <Tracks3 /> : <Player spotify={spotify} />} />
          <Route path="/new_releases/:id" render={() => token ? <Tracks2 /> : <Player spotify={spotify} />} />
          <Route path="/new_releases" render={() => token ? <NewTrackList spotify={spotify} /> : <Player spotify={spotify} />} />
          {/* <PrivateRoute exact token={token} path="/#" component={Tracks} /> */}
      </Switch>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, token, path, ...rest }) => {
  return (
    <Route
    path={path}
      {...rest}
      render={(props) => token ?
        <Component {...props} />
        : <Redirect to={{pathName: '/'}} />
      }
    />
  )
}


export default App;
