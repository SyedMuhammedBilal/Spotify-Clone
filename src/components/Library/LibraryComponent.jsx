import React from 'react'
import { useDataLayerValue } from '../../store/index'
import { Link } from 'react-router-dom'
import { ReactComponent as PlayIcon } from '../../svgs/PlayIcon.svg'
import './Library.scss'

const LibraryComponent = ({ spotify }) => {
    const [{ genre }, dispatch] = useDataLayerValue();

    return (
        <React.Fragment>
            <h1 style={{fontSize: '25px'}}>Playlist</h1>
            <div className="library-container">
                <div className="liked__songs">
                    <div className="liked__content">
                        <p> <strong> Sabrina Carpenter </strong>Let me move you - From the Netflix film Work it • <strong> ZAYN </strong> windowsill - From Nobody's listening • <strong> Justin Bieber </strong> Deserve you - From JUSTICE • <strong> ZAYN </strong> PillowTalk - From Mind of Mine </p>
                    </div>
                    <div className="liked__content-2">
                        <h2> Liked Songs </h2>
                        <p> 20 liked songs </p>
                    </div>
                </div>
                {genre?.items?.map((artist) => {
                    const getPlaylist = (id) => {
                        spotify.getPlaylist(id)
                        .then(res => {
                          dispatch({
                            type: 'SET_TRACKS',
                            tracks: res
                          })
                        })
                    }
                    return (
                        <Link style={{textDecoration: 'none', color: '#fff'}} onClick={() => getPlaylist(artist?.id)} to={`/playlist/${artist?.id}`}>
                            <SongCard singerName={artist?.name} profileName={artist?.owner?.display_name} image={artist?.images[0]?.url} />
                        </Link>
                )})}
            </div>
        </React.Fragment>
    )
}


const SongCard = ({ singerName, profileName, image }) => {
    return (
        <div className="card-L">
            <div className="cardImage-L">
                <img loading="lazy" src={image} alt="album" />
            </div>
            <div className="cardContent-L">
                <h3> {singerName} </h3>
                <p> {profileName} </p>
            </div>
            <span className="playIcon-L">
                <PlayIcon />
            </span>
        </div>
    )
}


export default LibraryComponent
