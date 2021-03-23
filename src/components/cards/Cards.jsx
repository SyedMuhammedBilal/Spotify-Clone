import React, { useState, useEffect } from 'react'
import './Cards.scss'
import { useDataLayerValue } from '../../store/index'
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { withStyles } from '@material-ui/core/styles';
import { ReactComponent as PlayIcon } from '../../svgs/PlayIcon.svg'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Cards = () => {
    const [{
        album01, 
        album02, 
        album03, 
        album04
    }, dispatch] = useDataLayerValue();
    
    let data = [album01, album02, album03, album04]
    console.log('data ==--==--==--',data);
    return (
        <>
           <div className="cardsWrap">
            {/* {console.log(JSON.stringify([recentlyPlayed.items])) */}
            
            {data?.map((dat) => {
                return (
                    <SongCard key={dat?.id} artistName={dat} image={dat} albumName={dat} /> 
                )
            })}
            </div>  
        </> 
    )
}

const SongCard = ({ albumName, artistName, image }) => {
    return (
        <div className="card">
            <div className="cardImage">
                <Link to="/album">
                <img loading="lazy" src={image?.images[0].url} alt="album" />
                </Link>
            </div>
            <div className="cardContent">
                <h3> {albumName?.name} </h3>
                <p> {artistName?.artists.map(artist => artist.name).join(", ")} </p>
            </div>
            <span className="playIcon">
                <PlayIcon />
            </span>
        </div>
    )
}

export default Cards
