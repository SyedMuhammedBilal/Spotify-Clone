import React, { useState, useEffect } from 'react'
import './Cards.scss'
import { useDataLayerValue } from '../../../store/index'
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { withStyles } from '@material-ui/core/styles';
import { ReactComponent as PlayIcon } from '../../../svgs/PlayIcon.svg'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Cards = () => {
    const [{
        new_releases
    }, dispatch] = useDataLayerValue();
    
    let data = new_releases
    console.log('newnewnew ==--==--==--',data);
    return (
        <>
           <div className="cardsWrap3">
            {/* {console.log(JSON.stringify([recentlyPlayed.items])) */}
            
            {data?.albums?.items?.map((item) => {
                return (
                    <Link style={{textDecoration: 'none', color: '#fff'}} to={`/album/${item?.id}`} >
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
