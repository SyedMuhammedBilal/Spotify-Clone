import React from 'react'
import './Cards.scss'
import { useDataLayerValue } from '../../../store/index'
import { ReactComponent as PlayIcon } from '../../../svgs/PlayIcon.svg'
import { Link } from 'react-router-dom';

const Cards = ( {spotify} ) => {
    const [{
        new_releases,
    }, dispatch] = useDataLayerValue();
    
    let data = new_releases
    console.log(data);

    return (
        <>
           <div className="cardsWrap3">            
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
                    <Link onClick={() => getAlbum(item?.id)}  style={{textDecoration: 'none', color: '#fff'}} to={`/new_releases/${item?.id}`} >
                        <SongCard key={item?.id} artistName={item} image={item} albumName={item} /> 
                    </Link>
                )
            })}
            </div>  
        </> 
    )
}

const SongCard = ({ albumName, artistName, image }) => {
    return (
        <div className="card3">
            <div className="cardImage3">
                <img loading="lazy" src={image?.images[0].url} alt="album" />
            </div>
            <div className="cardContent3">
                <h3> {albumName?.name} </h3>
                <p> {artistName?.artists.map(artist => artist.name).join(", ")} </p>
            </div>
            <span className="playIcon3">
                <PlayIcon />
            </span>
        </div>
    )
}

export default Cards
