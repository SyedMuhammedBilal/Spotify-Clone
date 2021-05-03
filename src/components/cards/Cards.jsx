import React from 'react'
import './Cards.scss'
import { useDataLayerValue } from '../../store/index'
import { ReactComponent as PlayIcon } from '../../svgs/PlayIcon.svg'
import { Link } from 'react-router-dom';

const Cards = () => {
    const [{
        album01, 
        album02, 
        album03, 
        album04
    }] = useDataLayerValue();
    
    let data = [album01, album02, album03, album04]
    
    return (
        <>
           <div className="cardsWrap">
        
            {data?.map((dat) => {
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
        <div className="card">
            <div className="cardImage">
                <img loading="lazy" src={image?.images[0].url} alt="album" />
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
