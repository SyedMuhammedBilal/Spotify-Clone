import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

const Playback = ({ accessToken }) => {
    if(!accessToken) {
        return null;
    }
    return (
        <SpotifyPlayer 
            showSaveIcon
            token
            uris
        />
    )
}

export default Playback
