import React from 'react'
import { ReactComponent as PlayIcon } from '../../../svgs/PlayIcon.svg'
import './NewTracks.scss'
import { Link } from 'react-router-dom'
import { useDataLayerValue } from '../../../store/index'

const NewTracks = ({ spotify }) => {
    const [{
        new_releases,
    }, dispatch] = useDataLayerValue();
    
    let data = new_releases

    return (
        <div className="cardsWrap5">
            {data?.albums?.items?.map((item) => {
                const getAlbum = (id) => {
                    spotify.getAlbum(id).then(album => {
                        console.log('check-RA--->', album);
                        dispatch({
                            type: 'SET_RELEASED_ALBUM',
                            released_album: album
                        })
                    })
                }
                return (
                    <Link onClick={() => getAlbum(item?.id)}  style={{textDecoration: 'none', color: '#fff'}} to={`/new_releases/${item?.id}`}>
                        <SongCards key={item?.id} artistName={item} image={item} albumName={item} />
                    </Link>
                )
            })}
        </div>
    )
}

const SongCards = ({ albumName, artistName, image }) => {
    return (
        <div className="card5">
            <div className="cardImage5">
                <img loading="lazy" src={image?.images[0].url} alt="album" />
            </div>
            <div className="cardContent5">
                <h3> {albumName?.name} </h3>
                <p> {artistName?.artists.map(artist => artist.name).join(", ")} </p>
            </div>
            <span className="playIcon5">
                <PlayIcon />
            </span>
        </div>
    )
}

export default NewTracks
