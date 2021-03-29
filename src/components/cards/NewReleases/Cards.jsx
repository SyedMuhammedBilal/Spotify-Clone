import React, { useState, useEffect } from 'react'
import './Cards.scss'
import { useDataLayerValue } from '../../../store/index'
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { withStyles } from '@material-ui/core/styles';
import { ReactComponent as PlayIcon } from '../../../svgs/PlayIcon.svg'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Track from './Tracks'

const Cards = ( {spotify} ) => {
    const [{
        new_releases,
        released_album
    }, dispatch] = useDataLayerValue();
    
    let data = new_releases
    console.log('newnewnew ==--==--==--',data);
    // console.log('phatphatphat', released_album);

    return (
        <>
           <div className="cardsWrap3">
            {/* {console.log(JSON.stringify([recentlyPlayed.items])) */}
            
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
