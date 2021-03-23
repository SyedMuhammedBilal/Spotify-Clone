import React, { useState, useEffect } from 'react'
import './Cards.scss'
import { useDataLayerValue } from '../../store/index'

const Cards = () => {
    const [{album01, album02, album03, album04}, dispatch] = useDataLayerValue();
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
                <img src={image?.images[0].url} alt="album" />
            </div>
            <div className="cardContent">
                <h3> {albumName?.name} </h3>
                <p> {artistName?.artists.map(artist => artist.name).join(", ")} </p>
            </div>
        </div>
    )
}

export default Cards
