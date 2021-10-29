/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './Cards.scss'
import { useDataLayerValue } from '../../../store/index'
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { withStyles } from '@material-ui/core/styles';
import { ReactComponent as PlayIcon } from '../../../svgs/PlayIcon.svg'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Cards = () => {
    const [{
        top_artists
    }, dispatch] = useDataLayerValue();
    
    let data = top_artists
    return (
        <>
           <div className="cardsWrap2">
            {data?.items?.map((dat) => {
                return (
                    <Link style={{textDecoration: 'none', color: '#fff'}} to={`/album/${dat?.id}`} >
                        <SongCard key={dat?.id} artistName={dat} image={dat} albumName={dat} /> 
                    </Link>
                )
            })}
            </div>  
        </> 
    )
}

const SongCard = ({ albumName, artistName, image }) => {
    return (
        <div className="card2">
            <div className="cardImage2">
                <img loading="lazy" src={image?.images[0].url} alt="album" />
            </div>
            <div className="cardContent2">
                <h3> {albumName?.name} </h3>
                <p> {artistName?.type} </p>
            </div>
            <span className="playIcon2">
                <PlayIcon />
            </span>
        </div>
    )
}

export default Cards
