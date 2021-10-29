/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './Cards.css'
import { useDataLayerValue } from '../../../store/index'
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { withStyles } from '@material-ui/core/styles';
import { ReactComponent as PlayIcon } from '../../../svgs/PlayIcon.svg'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Track from './Tracks'
import _ from 'lodash'

const Cards = ( {spotify} ) => {
    const [{
        followed_artists,
        album
    }, dispatch] = useDataLayerValue();
    
    let data = followed_artists
    console.log('RECENT ^^^ ==--==--==--',data);
    // console.log('phatphatphat', released_album);

    return (
        <>
           <div className="cardsWrap4">
             
             {data?.items?.map((item) => {
                const getAlbum = (id) => {
                    spotify.getAlbum(id).then(response => {
                        dispatch({
                            type: 'SET_ALBUMS',
                            album: response
                        })
                    })
                }
                console.log('check-ALBUM--->', album);

                return (
            
                    <Link  onClick={() => getAlbum(item?.track?.id)} style={{textDecoration: 'none', color: '#fff'}} to={`/albums/${item?.track.id}`} >
                        <SongCard key={item?.track?.id} artistName={item?.track} image={item?.track} albumName={item?.track} /> 
                    </Link>
                )
            })}
            </div>  
        </> 
    )
}

const SongCard = ({ albumName, artistName, image }) => {
    return (
        <div className="card4">
            <div className="cardImage4">
                <img loading="lazy" src={image.album?.images[0]?.url} alt="album" />
            </div>
            <div className="cardContent4">
                <h3> {albumName.name} </h3>
            </div>
            <span className="playIcon4">
                <PlayIcon />
            </span>
        </div>
    )
}

export default Cards
